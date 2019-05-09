
import React, { Component } from "react";
import { SearchBox } from "../issus";
import "./record.css";
import Pager from "../pager";

class Record extends Component {

    render() {
        return (
            <div className="contentBox">
                <h3 style={{fontSize:"1.5rem",display:"block",fontWeight:"bold"}}>现场处置记录</h3>
                <h4>
                    {/* eslint-disable-next-line */}
                    <a>>>所有商家</a>
                    >>
            <span>全部管辖区</span>
                    >>
            <span>全部店家</span>
                    >>
            <span>全部餐饮单位</span>
                </h4>
                <SearchBox />
            <div className="record">
            <div className="table">
                <table>
                    <thead>
                        <tr>
                            <th style={{width:"80px"}}>序号</th>
                            <th style={{width:"180px"}}>餐饮单位名称</th>
                            <th style={{minWidth: "120px"}}>疑似问题</th>
                            <th style={{width:"100px"}}>处理人</th>
                            <th style={{width:"120px"}}>处理结果</th>
                            <th style={{width:"100px"}}>确认审核</th>
                        </tr>
                    </thead>
                    <tbody id="list">

                    </tbody>
                </table>
            </div>
           <Pager/>
        </div>

            </div>
        );
    }
}


export default Record;