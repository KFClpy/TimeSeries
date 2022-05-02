package com.example.dachuang.Entity;

import java.io.Serializable;
import java.util.Objects;

public class DataRe implements Serializable {

    private static final long serialVersionUID = -1348213578848993836L;

    private int id;
    private String username;
    private String dataPath;
    private String datarePath;

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getDataPath() {
        return dataPath;
    }

    public void setDataPath(String dataPath) {
        this.dataPath = dataPath;
    }

    public String getDatarePath() {
        return datarePath;
    }

    public void setDatarePath(String datarePath) {
        this.datarePath = datarePath;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        DataRe dataRe = (DataRe) o;
        return id == dataRe.id && username.equals(dataRe.username) && dataPath.equals(dataRe.dataPath) && Objects.equals(datarePath, dataRe.datarePath);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id);
    }

    public DataRe(String username, String dataPath, String datarePath) {
        this.username = username;
        this.dataPath = dataPath;
        this.datarePath = datarePath;
    }

    public DataRe() {

    }

    @Override
    public String toString() {
        return "DataRe{" +
                "username='" + username + '\'' +
                ", dataPath='" + dataPath + '\'' +
                ", datarePath='" + datarePath + '\'' +
                '}';
    }
}
