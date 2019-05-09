import React from "react";
import "./issus.css";
import Banner from "./banner";
import SearchBox from "./searchbox";
import { list } from "./district.json";
import Pager from "../pager";


class Issus extends React.Component {
    
   constructor(){
       super();
       this.state={
         pageNo:1,
         pageCount:10,
         total:5677
       };
   }

    getDetail(id){
            this.props.getDetail(id);

    }

    pagerClick(pageNo){
        this.setState({pageNo:pageNo});
    }

    render() {
        return (
            <div className="contentBox">
                <h3 style={{ fontSize: "1.5rem", display: "block",fontWeight:"bold" }}>商家具体问题展示</h3>
                <h4>
                    {/* eslint-disable-next-line */}
                    <a>&gt;&gt;所有商家</a>
                    &gt;&gt;
            <span>全部管辖区</span>
                    &gt;&gt;
            <span>全部店家</span>
                    &gt;&gt;
            <span>全部餐饮单位</span>
                </h4>

                <Banner />

                <SearchBox />

                <div className="record">
                    <div className="table">
                        <table>
                            <thead>
                                <tr>
                                    <th style={{ width: "80px" }}>编号</th>
                                    <th style={{ width: "180px" }}>餐饮单位名称</th>
                                    <th style={{ width: "100px" }}>负责人</th>
                                    <th style={{ width: "120px" }}>联系方式</th>
                                    <th style={{ minWidth: "120px" }}>地址</th>
                                    <th style={{ width: "100px" }}>平台</th>
                                    <th style={{ width: "100px" }}>状态</th>
                                </tr>
                            </thead>
                            <tbody id="list">
                                {
                                    list.map((item) => {
                                        return (
                                            <tr key={item.id}>
                                                <td style={{ textAlign: "center" }}>{item.id}</td>
                                                <td>{item.name}</td>
                                                <td>{item.manager}</td>
                                                <td style={{ textAlign: "center" }}>{item.tel}</td>
                                                <td>{item.address}</td>
                                                <td style={{ textAlign: "center" }}>{item.platform}</td>
                                                {/* eslint-disable-next-line */}
                                                <td style={{ textAlign: "center" }}><a onClick={this.getDetail.bind(this,item.id)}>{item.state}</a></td>
                                            </tr>
                                        );
                                    })
                                }
                            </tbody>
                        </table>
                    </div>
                    <Pager pageCount={this.state.pageCount} pageNo={this.state.pageNo} total={this.state.total} onClick={this.pagerClick.bind(this)}/>

                </div>

            </div>
        );
    }
}

export {Issus ,Banner, SearchBox};