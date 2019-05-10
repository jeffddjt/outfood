import React, { Component } from "react";
import "./total.css";
import ChartBoxWide from "./chartbox-wide";
import { total_data,distric_problem,problem_data,statecontent } from "./data.json";

class ViolationTotal extends Component {
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
        //var xAxis = ["2019-05-02", "2019-05-03", "2019-05-04", "2019-05-05", "2019-05-06", "2019-05-07", "2019-05-08"];
        var xAxis=distric_problem.map((item)=>{return item.name});
        var data = { xAxis: xAxis, legend: { data: problem_data.map((item) => { return item.name }) }, series: [], tableData: {} };
        var tableData = [];
        distric_problem.forEach((item) => {
            var tb = [item.name];
            item.data.forEach((dist) => {
                tb.push(dist);
            });
            tableData.push(tb);
        });
        data.tableData = tableData;
        problem_data.forEach((district,index) => {
            var total = { name: district.name, data: []};
            distric_problem.forEach((item)=>{
                total.data.push(item.data[index]);
            });
            data.series.push(total);
        })
        console.log(data);
        return data;
    }
    getDistrictNormalData() {
        var xAxis = ["2019-05-02", "2019-05-03", "2019-05-04", "2019-05-05", "2019-05-06", "2019-05-07", "2019-05-08"];
        var data = { xAxis: xAxis, legend: { data: statecontent.map((item, index) => { return item.title }) }, series: [], tableData: {} };
        var tableData = [];
        xAxis.forEach((item) => {
            var tb = [item];
            statecontent.forEach((dist) => {
                tb.push(dist.count);
            });
            tableData.push(tb);
        });
        data.tableData = tableData;
        statecontent.forEach((district) => {
            var total = { name: district.title, data: [] };
            xAxis.forEach((item, index) => {
                total.data.push(district.count);
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
        statecontent.forEach((item) => {
            series[0].data.push({ value: item.count, name: item.title });
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
                <h3 style={{ fontSize: "1.5rem", display: "block", fontWeight: "bold" }}>违规统计</h3>

                {/* tabs start */}
                <div className="tabs" style={{ height: "auto", marginTop: "20px" }}>
                    {/* tabs title */}
                    <div className="content" style={{ border: "1px solid silver", height: "40px", alignItems: "flex-end" }}>
                        <div
                            style={{ alignItems: "flex-end" }}
                            className={this.state.activeForm === 0 ? "active" : ""}
                            onClick={this.changeTab.bind(this, 0)}>
                            常见违规统计
                         </div>
                        <div
                            className={this.state.activeForm === 1 ? "active" : ""}
                            style={{ alignItems: "flex-end" }}
                            onClick={this.changeTab.bind(this, 1)}>
                            辖区违规统计
                         </div>
                    </div>
                    {/* tabs title end */}

                    {/* tab content */}

                    {
                        this.state.activeForm === 0 ?
                            <div className="tab" style={{ display: this.state.activeForm === 0 ? "block" : "none" }}>
                                <ChartBoxWide title="常见违规统计" url="getPlatformDataWeek" chartData={this.getDistrictNormalData()} pieData={this.getPlatformPieData()} chartType="line" showTable={true} />
                            </div>
                            :
                            <div className="tab" style={{ display: this.state.activeForm === 1 ? "block" : "none" }}>
                                <ChartBoxWide title="辖区违规统计" url="getPlatformDataWeek" chartData={this.getDistrictData()} pieData={this.getDistrictPieData()} chartType="line" showTable={true} />
                            </div>
                    }

                    {/* tab content end */}


                </div>
            </div>


        );
    }
}

export default ViolationTotal;