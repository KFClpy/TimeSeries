package com.example.dachuang.Dao;

import com.example.dachuang.Entity.DataRe;
import org.apache.ibatis.annotations.Param;

public interface DataRepairMapper {
    Integer insert(DataRe datare);
    Integer updateDataByUser(
            @Param("username") String username,
            @Param("dataPath") String dataPath
    );
    Integer updateDataReByUser(
            @Param("username") String username,
            @Param("datarePath") String datarePath
    );
    DataRe findByUsername(String username);
}
