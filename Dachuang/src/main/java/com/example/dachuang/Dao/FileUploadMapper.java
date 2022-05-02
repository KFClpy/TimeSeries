package com.example.dachuang.Dao;

import com.example.dachuang.Entity.FileUpLoad;

public interface FileUploadMapper {
    Integer insert(FileUpLoad fileUpLoad);
    FileUpLoad selectByid(int id);
}
