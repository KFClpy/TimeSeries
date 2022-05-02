package com.example.dachuang.Dao.DataRecovery;

import org.springframework.stereotype.Component;

import java.io.BufferedReader;
import java.io.FileReader;
import java.io.IOException;
import java.util.ArrayList;
@Component
public class Assist {
    public static String PATH = "D:\\360安全浏览器下载\\vldb17-imr-master\\data\\";

    /**
     * Basic attributes: timestamp, dirty, label, truth
     *
     * @param pathAndFile path + filename
     * @param index which column besides timestamp should be read
     * @return data in timeseries form
     */
    public TimeSeries readData(String pathAndFile, int index, String splitOp) {
        TimeSeries timeSeries = new TimeSeries();

        try {
            FileReader fr = new FileReader(pathAndFile);
            BufferedReader br = new BufferedReader(fr);

            String line;
            long timestamp;
            double value;
            TimePoint tp;

            while ((line = br.readLine()) != null) {
                String[] vals = line.split(splitOp);
                timestamp = Long.parseLong(vals[0].trim());
                value = Double.parseDouble(vals[index].trim());

                tp = new TimePoint(timestamp, value);
                timeSeries.addTimePoint(tp);
            }

            br.close();
            fr.close();
        } catch (IOException e) {
            // TODO Auto-generated catch block
            e.printStackTrace();
        }

        return timeSeries;
    }

    /**
     *
     * @param pathAndFile path + filename
     * @param index the label index
     * @return labelList
     */
    public ArrayList<Boolean> readLabel(String pathAndFile, int index, String splitOp) {
        ArrayList<Boolean> labelList = new ArrayList<>();

        try {
            FileReader fr = new FileReader(pathAndFile);
            BufferedReader br = new BufferedReader(fr);

            String line;
            boolean isLabel;

            while ((line = br.readLine()) != null) {
                String[] vals = line.split(splitOp);
                isLabel = Boolean.parseBoolean(vals[index].trim());

                labelList.add(isLabel);
            }

            br.close();
            fr.close();
        } catch (IOException e) {
            // TODO Auto-generated catch block
            e.printStackTrace();
        }

        return labelList;
    }

    /**
     * RMS sqrt(|modify - truth|^2 / len)
     * s
     * @param truthSeries truth
     * @param resultSeries after repair
     * @param labelList labelList
     * @return RMS error
     */
    public double calcRMS(TimeSeries truthSeries, TimeSeries resultSeries, ArrayList<Boolean> labelList) {
        double cost = 0;
        double delta;
        int len = truthSeries.getLength();
        int labelNum = 0;

        for (int i = 0; i < len; ++i) {
            if (labelList.get(i)) {
                labelNum++;
                continue;
            }
            delta = resultSeries.getTimeseries().get(i).getVal()
                    - truthSeries.getTimeseries().get(i).getVal();

            cost += delta * delta;
        }
        cost /= (len - labelNum);

        return Math.sqrt(cost);
    }

}
