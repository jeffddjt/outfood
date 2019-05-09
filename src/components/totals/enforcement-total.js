import React, { Component } from "react";
import "./total.css";
import ChartBox from "./chartbox";
import { total_data } from "./data.json";

class EnforcementTotal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeForm: 0
        };
    }

    getPlatformData() {
        var xAxis = ["2019-05-02", "2019-05-03", "2019-05-04", "2019-05-05", "2019-05-06", "2019-05-07", "2019-05-08"];
        var platform = [{ name: "美团外卖", value: 4535 }, { name: "百度外卖", value: 753 }, { name: "饿了么", value: 389 }];
        var data = { xAxis: xAxis, legend: { data: platform.map((item, index) => { return item.name }) }, series: [] };
            platform.forEach((district) => {
                var total = { name: district.name, data: [] };
                xAxis.forEach((item, index) => {
                    total.data.push(district.value);
                });
                data.series.push(total);
            })
        return data;
    }
    getDistrictData() {
        var xAxis = ["2019-05-02", "2019-05-03", "2019-05-04", "2019-05-05", "2019-05-06", "2019-05-07", "2019-05-08"];
        var data = { xAxis: xAxis, legend: { data: total_data.map((item, index) => { return item.name }) }, series: [],tableData:{} };
        var tableData=[];
        xAxis.forEach((item)=>{
            var tb=[item];
            total_data.forEach((dist)=>{
                tb.push(dist.value);
            });
            tableData.push(tb);
        });
        data.tableData=tableData;
        total_data.forEach((district) => {
            var total = { name: district.name, data: [] };
            xAxis.forEach((item, index) => {
                total.data.push(district.value);
            });
            data.series.push(total);
        })
        return data;
    }
    getDistrictAddedData() {
        var xAxis = ["2019-05-02", "2019-05-03", "2019-05-04", "2019-05-05", "2019-05-06", "2019-05-07", "2019-05-08"];
        var data = { xAxis: xAxis, legend: { data: total_data.map((item, index) => { return item.name }) }, series: [],tableData:{} };
        var tableData=[];
        xAxis.forEach((item)=>{
            var tb=[item];
            total_data.forEach((dist)=>{
                tb.push(0);
            });
            tableData.push(tb);
        });
        data.tableData=tableData;
        total_data.forEach((district) => {
            var total = { name: district.name, data: [] };
            xAxis.forEach((item, index) => {
                total.data.push(0);
            });
            data.series.push(total);
        })
        return data;
    }

    getDistrictPieData() {
        var series = [{
            name: '辖区名称',
            type: 'pie',
            radius: ['40%', '70%'],
            center: ['50%', '50%'],
            data: []
        }];
        total_data.forEach((item) => {
            series[0].data.push({ value: item.value, name: item.name });
        });
        return series;
    }
    getDistrictPieAddedData() {
        var series = [{
            name: '辖区名称',
            type: 'pie',
            radius: ['40%', '70%'],
            center: ['50%', '50%'],
            data: []
        }];
        total_data.forEach((item) => {
            series[0].data.push({ value: 0, name: item.name });
        });
        return series;
    }
    getPlatformPieData() {
        var platform = [{ name: "美团外卖", value: 4535 }, { name: "百度外卖", value: 753 }, { name: "饿了么", value: 389 }];
        var series = [{
            name: '平台名称',
            type: 'pie',
            radius: ['40%', '70%'],
            center: ['50%', '50%'],
            data: []
        }];
        platform.forEach((item) => {
            series[0].data.push({ value: item.value, name: item.name });
        });
        return series;
    }
    changeTab(form) {
        this.setState({ activeForm: form });
    }

    render() {
        return (
            <div className="contentBox">
                <h3 style={{ fontSize: "1.5rem", display: "block", fontWeight: "bold" }}>执法统计</h3>

                {/* tabs start */}
                <div className="tabs" style={{ height: "auto", marginTop: "20px" }}>
                    {/* tabs title */}
                    <div className="content" style={{ border: "1px solid silver", height: "40px", alignItems: "flex-end" }}>
                        <div
                            style={{ alignItems: "flex-end" }}
                            className={this.state.activeForm === 0 ? "active" : ""}
                            onClick={this.changeTab.bind(this, 0)}>
                            按平台划分
                         </div>
                        <div
                            className={this.state.activeForm === 1 ? "active" : ""}
                            style={{ alignItems: "flex-end" }}
                            onClick={this.changeTab.bind(this, 1)}>
                            按辖区划分
                         </div>
                    </div>
                    {/* tabs title end */}

                    {/* tab content */}
                    <div className="tab" style={{display:this.state.activeForm===0?"block":"none"}}>
                        <ChartBox title="平台查处统计" url="getPlatformDataWeek" chartData={this.getPlatformData()} pieData={this.getPlatformPieData()} chartType="line" />
                        <ChartBox title="平台份额占比" url="getPlatformDataWeek" chartData={this.getPlatformData()} pieData={this.getPlatformPieData()} chartType="bar" />
                    </div>

                    <div className="tab" style={{display:this.state.activeForm===1?"block":"none"}}>
                        <ChartBox title="执法统计" url="getPlatformDataWeek" chartData={this.getDistrictData()} pieData={this.getDistrictPieData()} chartType="line" showTable={true} />
                        <ChartBox title="累计新增商家" url="getPlatformDataWeek" chartData={this.getDistrictAddedData()} pieData={this.getDistrictPieAddedData()} chartType="bar" showTable={true} />
                        <ChartBox title="累计减少商家" url="getPlatformDataWeek" chartData={this.getDistrictAddedData()} pieData={this.getDistrictPieAddedData()} chartType="bar" showTable={true} />
                    </div>

                    {/* tab content end */}


                </div>
            </div>


        );
    }
}

export default EnforcementTotal;