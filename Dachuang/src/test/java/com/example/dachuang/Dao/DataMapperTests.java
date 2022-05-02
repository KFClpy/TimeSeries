package com.example.dachuang.Dao;

import com.example.dachuang.Entity.DataRe;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

@SpringBootTest
public class DataMapperTests {
    @Autowired
    DataRepairMapper dataRepairMapper;
    @Test
    public void insertTest()
    {
        DataRe dataRe=new DataRe();
        dataRe.setUsername("test0");
        dataRe.setDataPath("test");
        Integer rows=dataRepairMapper.insert(dataRe);
        System.out.println("插入"+rows);
    }
    @Test
    public void updateTest()
    {
        dataRepairMapper.updateDataByUser("test0","wocaonima");
        dataRepairMapper.updateDataReByUser("test0","sbwocainima");
    }
    @Test
    public void selectTest()
    {
        DataRe dataRe= dataRepairMapper.findByUsername("test0");
        System.out.println(dataRe.toString());
    }
}

