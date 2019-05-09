import React,{ Component } from "react";
import { DatePicker, LocaleProvider } from "antd";
import zh_CN from "antd/lib/locale-provider/zh_CN";
import "moment/locale/zh-cn";
import "antd/dist/antd.css";
import echarts from "echarts/lib/echarts";
import "echarts/lib/chart/line";
import "echarts/lib/chart/pie";
import "echarts/lib/chart/bar";
import "echarts/lib/component/tooltip";
import "echarts/lib/component/title";
import "echarts/lib/component/legend";

const { RangePicker } = DatePicker;


class ChartBox extends Component{

    // componentDidMount(){
    //     const { url }= this.props;

    // }

    componentDidMount(){
        var { chartData,pieData,chartType} = this.props;
        this.getchart(this.refs.chart,chartType,chartData);
        this.pie(this.refs.pie,pieData);
    }

    UNSAFE_componentWillReceiveProps(nextProps){
        var { chartData,pieData,chartType} = nextProps;
        this.getchart(this.refs.chart,chartType,chartData);
        this.pie(this.refs.pie,pieData);
    }


    pie(target,data) {
        var myChart = echarts.init(target);
        var option = {
            title: {
                text: "总数",
                x: "center",
                y: "center"
            },
            tooltip: {
                trigger: 'item',
                formatter: "{a} <br/>{b} : {c} ({d}%)"
            },

            calculable: true,
            series: data
        };


        myChart.setOption(option);
    }

    getchart(target,type,data){
        var myChart = echarts.init(target);
        var option = {
            tooltip: {
                trigger: 'axis',
                show: true
            },
            legend: data.legend,
            calculable : true,
            xAxis: {
                type: "category",
                boundaryGap : true,
                data: data.xAxis
            },
            yAxis: [
                {
                    type: "value"
                }
            ],
            series: data.series.map((item)=>{return {name:item.name,type:type,data:item.data,itemStyle: {normal: {areaStyle: {type: 'default'}}}}})
        };
        myChart.setOption(option);
    }
    render(){
        var table=!this.props.showTable?null:
        <div style={{display:"flex",justifyContent:"center",alignItems: "center",width:"100%",height:"100%"}}>
                            <div style={{width:"80%",border:"1px solid #c0c0c0",marginBottom: "10px",height:"248px",overflow: "auto"}}>
                            <table className="chartTable">
                                <thead>
                                    <tr>
                                        <th>日期</th>
                                        {
                                            this.props.chartData.legend.data.map((item)=>{
                                              return(
                                                  <th>
                                                      {item}
                                                  </th>
                                              );  
                                            })
                                        }
                                    </tr>
                                </thead>
                                <tbody>
                                        {
                                            this.props.chartData.tableData.map((item)=>{
                                                return(
                                                    <tr>
                                                        {
                                                            item.map((d)=>{
                                                                return(<td>{d}</td>);
                                                            })
                                                        }
                                                    </tr>
                                                );
                                            })
                                        }
                                </tbody>
                            </table>

                        </div>
                    </div>;
        return(
            <div className="chartBox">
            <div className="charttitle">
                <div style={{ fontWeight: "bold" }}>{this.props.title}</div>
                <div className="dateselector">
                    <span>日期：</span>
                    <div className="radiogroup">
                        <span className="date active">近七天</span>
                        <span className="date">本月</span>
                        <span className="date">今年</span>
                        <LocaleProvider locale={zh_CN}>
                            <RangePicker style={{ fontSize: "0.9rem" }} />
                        </LocaleProvider>
                    </div>
                </div>
            </div>

            {/* chart title end */}
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", width: "100%", height: "100%" }}>
                <div className="chart" ref="chart" style={{ minWidth: "750px" }}>

                </div>
                <div className="chart" ref="pie" style={{ width: "400px", marginRight: "100px" }}>

                </div>
            </div>

            {table}

        </div>
        );
    }
}

export default ChartBox;