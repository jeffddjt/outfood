import React,{Component} from "react"
import { district, statecontent } from "./district.json";

class SearchBox extends Component{
    constructor(props){
        super(props);
        this.state={
            selectedDistrict:["全部辖区"],
            selectedPlatform:["全部店家"],
            selectedState:"全部餐饮单位"
        };

    }


    districtSelected(selected,e) {        
        var arr=this.state.selectedDistrict;
        if(e.target.checked){
            if(selected==="全部辖区")
                arr=[selected];
            else{
             
                arr=arr.filter((item)=>item!=="全部辖区");
                arr.push(selected);
            }
        }else
        {
            arr=arr.filter((item)=>item!==selected);
        }
        this.setState({ selectedDistrict: arr });

    }

    platformSelected(selected,e) {
        var arr=this.state.selectedPlatform;
        if(e.target.checked){
            if(selected==="全部店家")
                arr=[selected];
            else{
             
                arr=arr.filter((item)=>item!=="全部店家");
                arr.push(selected);
            }
        }else
        {
            arr=arr.filter((item)=>item!==selected);
        }
        this.setState({ selectedPlatform: arr });

    }


    stateSelected(selected,e) {
        if(e.target.checked){
            this.setState({ selectedState: selected });
        }

    }


    contains(array,item) {
        var result = false;
        for (var i = 0; i < array.length; i++) {
            if (array[i] === item) {
                result = true;
            }
        }
        return result;
    } 
    render(){
        return(
            <div>
            <div className="choosetitle">
            <div className="search">
                <div className="left"></div>
                <input type="text" />
                <div className="right">检索</div>
            </div>
            <div className="choose">
                <span onClick={()=>{this.setState({boxshow:!this.state.boxshow})}}>{this.state.boxshow?"收起筛选":"展开筛选"}</span>
                <span>
                    <i className={`iconfont ${this.state.boxshow?"rotate":""}`}>&#xe57d;</i>
                </span>
            </div>
        </div> 
        <div className="box" style={{display:this.state.boxshow?"block":"none"}}>
                    <div className="residency">
                        <span className="residencytitle">管辖区:</span>
                        <div id="district" className="choosecon">
                            <div className="chooseitem">
                                <input type="checkbox" checked={this.contains(this.state.selectedDistrict,"全部辖区")}  onChange={this.districtSelected.bind(this,"全部辖区")} />
                                <label>全部辖区</label>
                            </div>
                            {
                                district.map((item) => {
                                    return (
                                        <div key={item} className="chooseitem">
                                            <input type="checkbox" onChange={this.districtSelected.bind(this,item)} checked={this.contains(this.state.selectedDistrict,item)}/>
                                            <label>{item}</label>
                                        </div>

                                    );
                                })
                            }
                        </div>
                        <div className="headle">

                        </div>
                    </div>
                    <div className="platform">
                        <span className="platformtitle">外卖平台：</span>
                        <div className="choosecon">
                            <div className="chooseitem">
                                <input type="checkbox" checked={this.contains(this.state.selectedPlatform,"全部店家")}  onChange={this.platformSelected.bind(this,"全部店家")}  />
                                <label>
                                    <span>全部店家</span>
                                    <span>(5677)</span>
                                </label>
                            </div>
                            <div className="chooseitem">
                                <input type="checkbox"  checked={this.contains(this.state.selectedPlatform,"美团")}  onChange={this.platformSelected.bind(this,"美团")}  />
                                <label>
                                    <span>美团</span>
                                    <span>(4535)</span>
                                </label>
                            </div>
                            <div className="chooseitem">
                                <input type="checkbox"  checked={this.contains(this.state.selectedPlatform,"饿了么")}  onChange={this.platformSelected.bind(this,"饿了么")}  />
                                <label>
                                    <span>饿了么</span>
                                    <span>(389)</span>
                                </label>
                            </div>
                            <div className="chooseitem">
                                <input type="checkbox"  checked={this.contains(this.state.selectedPlatform,"百度外卖")}  onChange={this.platformSelected.bind(this,"百度外卖")}  />
                                <label>
                                    <span>百度外卖</span>
                                    <span>(753)</span>
                                </label>
                            </div>

                        </div>
                        <div className="headle" style={{ justifyContent: "flex-end" }}>

                        </div>
                    </div>

                    {
                    this.props.hideState?null:
                    <div className="state">
                        <span className="statetitle">状态：</span>
                        <div id="statecontent" className="choosecon">
                            <div className="chooseitem">
                                <input type="checkbox"  checked={this.state.selectedState==="全部餐饮单位"}  onChange={this.stateSelected.bind(this,"全部餐饮单位")}   />
                                <label>
                                    <span>全部餐饮单位</span>
                                    <span>(5677)</span>
                                </label>
                            </div>
                            {
                                statecontent.map((item) => {
                                    return (
                                        <div key={item.title} className="chooseitem">
                                            <input type="checkbox"  checked={this.state.selectedState===item} onChange={this.stateSelected.bind(this,item)}   />
                                            <label>
                                                <span>{item.title}</span>
                                                <span>({item.count})</span>
                                            </label>
                                        </div>
                                    );
                                })
                            }
                        </div>
                        <div className="headle">

                        </div>
                    </div>
                    }
                    <div className="chooseend">
                        <button style={{ marginRight: "20px" }}>
                            <span>确&nbsp;认</span>
                        </button>
                        <button style={{ marginLeft: "10px" }}>
                            <span>导出报表</span>
                        </button>
                    </div>
                </div>
                </div>
        );
    }
}

export default SearchBox;