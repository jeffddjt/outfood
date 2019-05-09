import React, { Component } from "react";
import "./registration.css";
import registrationData from "./registrationData";
import Pager from "../pager";



class RegistrationShow extends Component {

    constructor(){
        super();
        this.state={
            selectedCategory:1
        }
    }

    selectCategory(num){
        this.setState({selectedCategory:num});
    }

    nav(componentName){
        this.props.onNav(componentName);
    }

    render() {
        return (
            <div className="contentBox">
                <h3 style={{ fontSize: "1.5rem", display: "block" ,fontWeight:"bold"}}>登记机关注册信息</h3>
                <h4>
                 {/* eslint-disable-next-line */}
                    <a>>>登记机关注册信息</a>
                </h4>
                <div className="regis_num">
                    <div className={`regis_num_item ${this.state.selectedCategory===1?"selected":""}`} onClick={this.selectCategory.bind(this,1)}>
                        <span>39715</span>
                        <span>现存有效用户</span>
                    </div>
                    <div  className={`regis_num_item ${this.state.selectedCategory===2?"selected":""}`} style={{ marginLeft: "20px" }} onClick={this.selectCategory.bind(this,2)}>
                        <span>2</span>
                        <span>注销登记户数</span>
                    </div>
                    <div  className={`regis_num_item ${this.state.selectedCategory===3?"selected":""}`} style={{ marginLeft: "20px" }} onClick={this.selectCategory.bind(this,3)}>
                        <span>3</span>
                        <span>取缔登记户数</span>
                    </div>
                </div>


         <div className="title">
            <div className="total">
                <span id="total_label">现存有效用户数</span>
                {/* eslint-disable-next-line */}
                <span>共<a id="total_qyt">39715</a>条记录</span>
            </div>
            <div className="btnbox">
                <div className="search">
                    <div className="left"></div>
                    <input type="text" />
                    <div className="right">搜索</div>
                </div>
                <div className="btn" onClick={this.nav.bind(this,"addnormal")}>+添加常规餐饮单位</div>
                <div className="btn" onClick={this.nav.bind(this,"addsmall")}>+添加小餐饮类单位</div>
            </div>
        </div>   

        <div className="record">
        <div className="table" style={{marginTop:0}}>
            <table>
                <thead>
                    <tr>
                        <th style={{width:"100px"}}>序号</th>
                        <th style={{width:"150px"}}>餐饮单位名称</th>
                        <th style={{width:"100px"}}>餐饮单位类型</th>
                        <th>地址</th>
                        <th style={{width:"150px"}}>编辑</th>
                    </tr>
                </thead>
                <tbody id="list">
                    {
                        registrationData.map((item,index)=>{
                          return(
                              <tr key={item.id}>
                                  <td style={{textAlign:"center"}}>{item.id}</td>
                                  <td>{item.name}</td>
                                  <td style={{textAlign:"center"}}>{item.type}</td>
                                  <td>{item.address}</td>
                                  <td style={{textAlign:"center"}}>编辑</td>
                              </tr>
                          );  
                        })
                    }
                </tbody>
            </table>
        </div>
        </div>
        <Pager />



            </div>
        );
    }
}


export default RegistrationShow;