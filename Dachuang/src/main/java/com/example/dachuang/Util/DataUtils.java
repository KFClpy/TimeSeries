package com.example.dachuang.Util;

import com.example.dachuang.Dao.DataRecovery.TimePoint;
import com.example.dachuang.Dao.DataRecovery.TimeSeries;
import org.springframework.stereotype.Component;

import java.io.BufferedWriter;
import java.io.IOException;
import java.nio.charset.StandardCharsets;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.List;

@Component
public class DataUtils {
    public void dataToCsv(String filepath, TimeSeries timeSeries) throws IOException
    {
        Path path= Paths.get(filepath);
        try(BufferedWriter writer= Files.newBufferedWriter(path, StandardCharsets.UTF_8))
        {
            List<TimePoint>list=timeSeries.getTimeseries();
            for(int i=0;i<list.size();i++)
            {
                writer.write(list.get(i).getTimestamp()+","+list.get(i).getVal());
                writer.newLine();
            }
        }
    }
}
