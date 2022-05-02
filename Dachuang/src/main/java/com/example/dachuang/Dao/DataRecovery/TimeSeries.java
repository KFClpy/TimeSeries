package com.example.dachuang.Dao.DataRecovery;

import java.util.ArrayList;
import java.util.List;

/**
 * Time series
 *
 * @author Stoke
 *
 */
public class TimeSeries {
    private ArrayList<TimePoint> timeseries;
    private List<Integer> wrongList;

    public List<Integer> getWrongList() {
        return wrongList;
    }

    public void setWrongList(List<Integer> wrongList) {
        this.wrongList = wrongList;
    }

    public TimeSeries(ArrayList<TimePoint> timeseries) {
        setTimeseries(timeseries);
    }

    public TimeSeries() {
        setTimeseries(new ArrayList<TimePoint>());
    }

    public ArrayList<TimePoint> getTimeseries() {
        return timeseries;
    }

    public void setTimeseries(ArrayList<TimePoint> timeseries) {
        this.timeseries = timeseries;
    }

    public int getLength() {
        return timeseries.size();
    }

    public void addTimePoint(TimePoint tp) {
        timeseries.add(tp);
    }
}
