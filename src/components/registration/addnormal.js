import React, { Component } from "react";
import "./registration.css";
import Level from "./level";


import { district } from "./data.json";


class AddNormal extends Component {
    constructor(props){
        super(props);
        this.state={
            activeForm:0,
            selectedDistrict:-1
        }
    }

    nav(componentName){
        this.props.onNav(componentName);
    }

    render() {        
        var forms = [
            <div className="form" id="form1">
                <div className="itemgroup">
                    <div className="item">
                        <span className="name">名称</span>
                        <span>：</span>
                        <input type="text" />
                    </div>

                    <div className="item">
                        <span className="name">住所</span>
                        <span>：</span>
                        <input type="text" />
                    </div>

                    <div className="item">
                        <span className="name">法定代表人姓名</span>
                        <span>：</span>
                        <input type="text" />
                    </div>

                    <div className="item">
                        <span className="name">公司类型</span>
                        <span>：</span>
                        <input type="text" />
                    </div>

                    <div className="item" style={{ height: "30%" }}>
                        <span className="name">经营范围</span>
                        <span>：</span>
                        <textarea style={{ resize: "none" }}></textarea>
                    </div>
                </div>
                <div className="itemgroup">
                    <div className="item">
                        <span className="name">成立日期</span>
                        <span>：</span>
                        <input type="text" />
                    </div>

                    <div className="item">
                        <span className="name">营业期限</span>
                        <span>：</span>
                        <input type="text" />
                    </div>

                    <div className="item">
                        <span className="name">编号</span>
                        <span>：</span>
                        <input type="text" />
                    </div>

                    <div className="item">
                        <span className="name">注册号</span>
                        <span>：</span>
                        <input type="text" />
                    </div>

                    <div className="item">
                        <span className="name">注册资本</span>
                        <span>：</span>
                        <input type="text" />
                    </div>

                    <div className="item">
                        <span className="name">实收资本</span>
                        <span>：</span>
                        <input type="text" />
                    </div>


                </div>
            </div>,
            
            <div className="form" id="form2">
            <div className="itemgroup">
                <div className="item second">
                    <span className="name">经营者名称</span>
                    <span>：</span>
                    <input type="text" />
                </div>

                <div className="item second">
                    <span className="name">社会信用代码</span>
                    <span>：</span>
                    <input type="text" />
                </div>

                <div className="item second">
                    <span className="name">法定代表人</span>
                    <span>：</span>
                    <input type="text" />
                </div>

                <div className="item second">
                    <span className="name">住所</span>
                    <span>：</span>
                    <input type="text" />
                </div>

                <div className="item second">
                    <span className="name">经营场所</span>
                    <span>：</span>
                    <input type="text" />
                </div>
                <div className="item second" style={{ height: "26%", alignItems: "flex-start" }}>
                    <span className="name">主体业态</span>
                    <span>：</span>
                    <textarea style={{ resize: "none" }}></textarea>
                </div>
            </div>
            <div className="itemgroup">
                <div className="item second">
                    <span className="name">经营项目</span>
                    <span>：</span>
                    <input type="text" />
                </div>

                <div className="item second">
                    <span className="name">许可证编号</span>
                    <span>：</span>
                    <input type="text" />
                </div>

                <div className="item second">
                    <span className="name">日常监督管理机构</span>
                    <span>：</span>
                    <input type="text" />
                </div>

                <div className="item second">
                    <span className="name">日常监督管理人员</span>
                    <span>：</span>
                    <input type="text" />
                </div>

                <div className="item second">
                    <span className="name">发证机关</span>
                    <span>：</span>
                    <input type="text" />
                </div>

                <div className="item second">
                    <span className="name">签发人</span>
                    <span>：</span>
                    <input type="text" />
                </div>

                <div className="item second">
                    <span className="name">有效期至</span>
                    <span>：</span>
                    <input type="text" />
                </div>

            </div>
        </div>

        ];




        return (
            <div className="contentBox">
                <h4>
                    {/* eslint-disable-next-line */}
                    <a>>>登记机关注册信息</a>
                    {/* eslint-disable-next-line */}
                    <a>>>添加常规餐饮单位</a>
                </h4>
                <div className="add_title">
                    <span style={{ margiLeft: "10px" }}>添加常规餐饮单位</span>
                </div>

                <div className="add_first">
                    <div className="input_box">
                        <span className="label">单位名称：</span>
                        <div className="input_component">
                            <input type="text" placeholder="  请填写餐饮单位名称" />
                        </div>
                    </div>
                    <div className="input_box" style={{ borderLeft: "1px solid silver", borderRight: "1px solid silver" }}>
                        <span className="label">手机号：</span>
                        <div className="input_component">
                            <input type="text" placeholder="  请填写手机号" />
                        </div>
                    </div>
                    <div className="input_box">
                        <span className="label">归属辖区：</span>
                        <div className="input_component" style={{ cursor: "pointer" }}>
                            <select id="district" defaultValue={this.state.selectedDistrict}>
                                <option value="-1" selected="selected">请选择该餐饮单位归属辖区</option>
                                {
                                    district.map((item,index)=>{
                                        return(
                                            <option key={index} value={index}>{item}</option>
                                        );
                                    })
                                }
                            </select>
                        </div>
                    </div>
                </div>


                <div className="tabs">
                    <div className="content">
                        <div className={this.state.activeForm===0?"active":""} onClick={()=>{this.setState({activeForm:0})}}>营业执照</div>
                        <div className={this.state.activeForm===1?"active":""} onClick={()=>{this.setState({activeForm:1})}}>食品经营许可证</div>
                    </div>
                    {forms[this.state.activeForm]}
                </div>
            
            <Level />

            <div style={{display:"flex",justifyContent: "center",alignItems: "center"}}>
                <div class="handel">
                    <div class="point">保存</div>
                    <div class="point" onClick={this.nav.bind(this,"registrationShow")}>取消</div>
                </div>
            </div>
            </div>
        );
    }
}

export default AddNormal;