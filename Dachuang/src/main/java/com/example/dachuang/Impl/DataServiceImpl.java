package com.example.dachuang.Impl;

import com.example.dachuang.Dao.DataRepairMapper;
import com.example.dachuang.Dao.DataRecovery.Assist;
import com.example.dachuang.Dao.DataRecovery.IMRIC;
import com.example.dachuang.Dao.DataRecovery.TimeSeries;
import com.example.dachuang.EX.UpdateException;
import com.example.dachuang.Entity.DataRe;
import com.example.dachuang.Entity.FileUpLoad;
import com.example.dachuang.Service.DataService;
import com.example.dachuang.Util.DataUtils;
import com.example.dachuang.Util.UploadFileTool;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

@Service
public class DataServiceImpl implements DataService {
    @Autowired
    DataRepairMapper dataRepairMapper;
    @Autowired
    UploadFileTool uploadFileTool;
    @Autowired
    Assist assist;
    @Autowired
    IMRIC imric;
    @Autowired
    DataUtils dataUtils;
    @Value("${uploadFile.path}")
    String path;
    @Value("${dataRepair.splitOp}")
    String splitOp;
    @Override

    public TimeSeries dataUpload(String username, MultipartFile file)
    {
        DataRe dataRe=dataRepairMapper.findByUsername(username);
        FileUpLoad fileUpLoad= uploadFileTool.upload(username,file.getOriginalFilename(),file);
        if(dataRe!=null)
        {
            System.out.println("用户已上传过数据，更新数据");
            String filepath=dataRe.getDataPath();
            File preAvatar=new File(path+filepath);
            if(preAvatar.isFile()&&preAvatar.exists())
            {
                boolean res=preAvatar.delete();
                System.out.println("删除旧数据"+(res?"成功":"失败"));
            }
            Integer rows=dataRepairMapper.updateDataByUser(username,fileUpLoad.getType()+ File.separator+fileUpLoad.getFilename());
            if(rows!=1)
            {
                throw new UpdateException("更新上传数据失败");
            }
        }
        else
        {
            DataRe newone=new DataRe(username,fileUpLoad.getType()+ File.separator+fileUpLoad.getFilename(),null);
            dataRepairMapper.insert(newone);
            System.out.println("上传数据成功");
        }
        return assist.readData(path+fileUpLoad.getType()+ File.separator+fileUpLoad.getFilename(),1,splitOp);
    }
    @Override
    public ArrayList<TimeSeries> dataRepair(String username,int p,double delta,int maxNumIterations)
    {
        ArrayList<TimeSeries>result=new ArrayList<>();
        DataRe dataRe=dataRepairMapper.findByUsername(username);
        TimeSeries timeSeries=null;
        if(dataRe!=null)
        {
            String dataPath=path+dataRe.getDataPath();
            TimeSeries dirtySeries=assist.readData(dataPath,1,splitOp);
            result.add(dirtySeries);
            TimeSeries labelSeries=assist.readData(dataPath,2,splitOp);
            ArrayList<Boolean> labelList = assist.readLabel(dataPath, 3, splitOp);
            List<Integer>wronglist=new ArrayList<>();
            timeSeries=imric.mainIMRIC(dirtySeries,labelSeries,labelList,p,delta,maxNumIterations,wronglist);
            timeSeries.setWrongList(wronglist);
            result.add(timeSeries);
            String datarePath=dataRe.getDataPath().substring(0,dataRe.getDataPath().lastIndexOf("."))+"_re"+".csv";
            if(dataRe.getDatarePath()!=null)
            {
                File preAvatar=new File(path+dataRe.getDatarePath());
                if(preAvatar.isFile()&&preAvatar.exists())
                {
                    boolean res=preAvatar.delete();
                    System.out.println("删除修复数据数据"+(res?"成功":"失败"));
                }
            }
            try {
                dataUtils.dataToCsv(path+datarePath,timeSeries);
            } catch (IOException e) {
                e.printStackTrace();
            }
            dataRepairMapper.updateDataReByUser(username,datarePath);
            System.out.println("修复成功");
        }
        else{
            System.out.println("请上传待修复数据");
        }
        return result;
    }
    @Override
    public String getDataRePath(String username)
    {
        return path+dataRepairMapper.findByUsername(username).getDatarePath();
    }
}
