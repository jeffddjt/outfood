import React,{ Component } from "react";
import "./pager.css";


class Pager extends Component{

    constructor(props){
        super(props);
        this.state={
            pageNo:this.props.pageNo
        }
    }

    pageNoRender(){
        var result=[];
        var { pageCount,pageNo }=this.props;
        if(pageCount){
            for(var i=1;i<=pageCount;i++){
                result.push(i);
            }
        }
        return result.map((item,index)=>{
            return (
                <li key={item} className={`number ${pageNo&&pageNo===item?"active":""}`} onClick={this.pagerClick.bind(this,item)}>{item}</li>
            );
        });
    }

    pagerClick(pageNo){
        this.setState({pageNo:pageNo});
        try{
        this.props.onClick(pageNo);
        }catch{}
    }

    render(){
        var { pageNo,pageCount, total } = this.props;
        return(
            <div className="pager">
            <span>共{total}条</span>
            <div className="pagination">

                <button onClick={this.pagerClick.bind(this,this.state.pageNo-1)} disabled={pageNo<=1}>&lt;</button>

                 <ul>
                     {this.pageNoRender()}
                   </ul>

                <button onClick={this.pagerClick.bind(this,this.state.pageNo+1)} disabled={pageNo>=pageCount}>&gt;</button>
            </div>
        </div> 
        );
    }
}

export default Pager;