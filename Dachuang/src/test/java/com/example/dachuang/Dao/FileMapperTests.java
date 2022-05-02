package com.example.dachuang.Dao;

import com.example.dachuang.Entity.FileUpLoad;
import org.apache.tomcat.util.http.fileupload.FileUpload;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.Date;

@SpringBootTest
public class FileMapperTests {
    @Autowired
    FileUploadMapper fileUploadMapper;

    @Test
    public void insert()
    {
        FileUpLoad fileUpload=new FileUpLoad();
        fileUpload.setCreateTime(new Date());
        fileUpload.setExtension("test");
        fileUpload.setFilename("test");
        fileUpload.setRealname("test");
        fileUpload.setPath("test");
        fileUpload.setPrimaryname("test");
        fileUpload.setSize(100);
        fileUpload.setType("test");
        fileUpload.setUploader("test");
        Integer rows=fileUploadMapper.insert(fileUpload);
        System.err.println(rows);
    }
    @Test
    public void selectByid()
    {
        FileUpLoad fileUpload= fileUploadMapper.selectByid(12);
        System.err.println(fileUpload.toString());
    }
}
