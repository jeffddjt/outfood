import React, { Component } from "react";
import { SearchBox } from "../issus";
import "./sales.css";
import { DatePicker, LocaleProvider } from "antd";
import zh_CN from "antd/lib/locale-provider/zh_CN";
import "moment/locale/zh-cn";
import "antd/dist/antd.css";
import Pager from "../pager";

const { RangePicker } = DatePicker;

class SalesTotal extends Component {
    render() {
        return (
            <div className="contentBox">
                <h3 style={{ fontSize: "1.5rem", display: "block",fontWeight:"bold" }}>销售统计</h3>
                <h4>
                    {/* eslint-disable-next-line */}
                    <a>>>所有商家</a>
                    >>
            <span>全部管辖区</span>
                    >>
            <span>全部店家</span>
                </h4>

                <SearchBox hideState={true} />

                <div className="title">
                    <div className="total">
                        <span>全部销售记录</span>
                        {/* eslint-disable-next-line */}
                        <span>共<a>0</a>条商家</span>
                    </div>
                    <div className="searchbar">
                        <span style={{paddingLeft: "5px", width: "60px", height: "20px",lineHeight:"20px", fontSize: "1rem"}}>日期选择</span>
                        <span className="selector data_active">全部</span>
                        <span className="selector">本月</span>
                        <LocaleProvider locale={zh_CN}>
                            <RangePicker className="dateSelector" />
                        </LocaleProvider>
                    </div>
                </div>

                <div className="record">
            <div className="table">
                <table>
                    <thead>
                        <tr>
                            <th style={{width:"80px"}}>序号</th>
                            <th style={{width:"180px"}}>餐饮单位名称</th>
                            <th style={{width:"100px"}}>负责人</th>
                            <th style={{width: "120px"}}>联系方式</th>
                            <th style={{minWidth: "120px"}}>月销售单数(参考值)</th>
                            <th style={{minWidth: "120px"}}>月销售额(参考值)</th>
                            <th style={{width:"180px"}}>归属平台</th>

                        </tr>
                    </thead>
                    <tbody id="list">
                        <tr>
                            <td colSpan="7" style={{fontSize:"1.35rem",color:"#888",background:"#fff",textAlign: "center"}}>
                                暂无数据
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <Pager pageNo={1} pageCount={10} total={100}  />
            </div>
            </div>
        );
    }
}


export default SalesTotal;