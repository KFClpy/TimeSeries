package com.example.dachuang.Controller;

import com.alibaba.fastjson.JSONObject;
import com.example.dachuang.Dao.DataRecovery.IMRIC;
import com.example.dachuang.Dao.DataRecovery.TimeSeries;
import com.example.dachuang.Service.DataService;
import com.example.dachuang.Util.TokenUtils;
import org.apache.tomcat.util.http.fileupload.IOUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import javax.servlet.http.HttpServletResponse;
import java.io.*;
import java.util.ArrayList;

@RequestMapping("data")
@RestController
public class DataController {
    @Autowired
    IMRIC imric;
    @Autowired
    TokenUtils tokenUtils;
    @Autowired
    DataService dataService;
    private static final int OK=2000;
    @PostMapping("repair")
    public JSONObject dataRepair(@RequestParam String p,@RequestParam String delta,@RequestParam String maxNumIterations)
    {
        JSONObject obj=new JSONObject();
        int p_=Integer.parseInt(p);
        String token=tokenUtils.getToken();
        String username=tokenUtils.getUsername(token);
        double delta_=Double.parseDouble(delta);
        int maxNumIterations_=Integer.parseInt(maxNumIterations);
        System.out.println("修复");
        ArrayList<TimeSeries> timeSeries= dataService.dataRepair(username,p_,delta_,maxNumIterations_);
        if(timeSeries!=null)
        {
            obj.put("state",OK);
            obj.put("timeSeries",timeSeries.get(0));
            obj.put("timeSeries1",timeSeries.get(1));
        }
        else{
            obj.put("state",4000);
        }
        return obj;
    }
    @PostMapping("upload")
    public JSONObject dataUpload(@RequestParam MultipartFile file)
    {
           JSONObject obj=new JSONObject();
           String token=tokenUtils.getToken();
           String username=tokenUtils.getUsername(token);
           TimeSeries timeSeries= dataService.dataUpload(username,file);
           obj.put("state",OK);
           obj.put("timeSeries",timeSeries);
           return obj;
    }
    @PostMapping("download")
    public void dataDownload(HttpServletResponse response)
    {
        JSONObject obj=new JSONObject();
        OutputStream os=null;
        InputStream is=null;
        String token= tokenUtils.getToken();
        String username= tokenUtils.getUsername(token);
        String filename=dataService.getDataRePath(username);
        try{
            os=response.getOutputStream();
            response.reset();
            response.setContentType("application/x-download;charset=utf-8");
            response.setHeader("Content-Disposition", "attachment;filename="+ new String(filename.getBytes("utf-8"),"ISO8859-1"));
            File f=new File(filename);
            is=new FileInputStream(f);
            IOUtils.copy(is, response.getOutputStream());
            response.getOutputStream().flush();
        }
        catch (IOException e)
        {
            obj.put("state",4000);
            obj.put("msg","下载数据失败"+e.getMessage());
            System.out.println(obj);
            return ;
        }
        finally
        {
            try {
                if (is != null) {
                    is.close();
                }
            } catch (IOException e) {
                e.printStackTrace();
            }
            try {
                if (os != null) {
                    os.close();
                }
            } catch (IOException e) {
                e.printStackTrace();
            }
        }
        obj.put("state",OK);
        obj.put("msg","下载成功");
        System.out.println(obj);
    }
}
