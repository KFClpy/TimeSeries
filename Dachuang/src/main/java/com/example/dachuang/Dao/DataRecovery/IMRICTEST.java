package com.example.dachuang.Dao.DataRecovery;

import com.example.dachuang.Util.DataUtils;

import java.io.IOException;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

public class IMRICTEST {

    public static void main(String[] args) throws IOException {
        String inputFileName="D:/360安全浏览器下载/vldb17-imr-master/data/ild3k.csv";
        Assist assist=new Assist();
        String splitOp=",";
        TimeSeries dirtySeries = assist.readData(inputFileName, 1, splitOp);
        TimeSeries labelSeries = assist.readData(inputFileName, 2, splitOp);
//        TimeSeries truthSeries = assist.readData(inputFileName, 3, splitOp);
        ArrayList<Boolean> labelList = assist.readLabel(inputFileName, 4, splitOp);

//        double rmsDirty = assist.calcRMS(truthSeries, dirtySeries, labelList);
//        System.out.println("Dirty RMS error is " + rmsDirty);

        int p = 4;
        double delta = 0.1;
        int maxNumIterations = 100000;

        IMRIC imric = new IMRIC();
        long starttime=new Date().getTime();
        List<Integer> wrongList=new ArrayList<>();
        TimeSeries resultSeries =
                imric.mainIMRIC(dirtySeries, labelSeries, labelList, p, delta, maxNumIterations,wrongList);
        DataUtils dataUtils=new DataUtils();
        dataUtils.dataToCsv("D:/360安全浏览器下载/vldb17-imr-master/data/ild3k_repaired.csv",resultSeries);
        long endtime=new Date().getTime();
        System.out.println("Time consumption is "+(endtime-starttime));
//        double rms = assist.calcRMS(truthSeries, resultSeries, labelList);
//
//        System.out.println("RMS error is " + rms);
    }

}
