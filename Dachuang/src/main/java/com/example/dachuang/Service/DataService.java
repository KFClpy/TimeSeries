package com.example.dachuang.Service;

import com.example.dachuang.Dao.DataRecovery.TimeSeries;
import org.springframework.web.multipart.MultipartFile;

import java.util.ArrayList;

public interface DataService {
    TimeSeries dataUpload(String username, MultipartFile file);
    ArrayList<TimeSeries> dataRepair(String username, int p, double delta, int maxNumIterations);
    String getDataRePath(String username);
}
