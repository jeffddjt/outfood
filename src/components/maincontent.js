import React from "react";
import {Issus} from "./issus";
import Location from "./location";
import Registration from "./registration";
import Record from "./record";
import SalesTotal from "./salesTotal";
import { EnforcementTotal, ViolationTotal } from "./totals";

class MainContent extends React.Component{

    getDetail(id){
        this.props.callback(id);
    }
    render(){
        var content={
            "1":<Issus param={this.props.param} getDetail={this.getDetail.bind(this)} />,
            "2":<Location param={this.props.param} />,
            "3":<Registration prarm={this.props.param} />,
            "4":<Record param={this.props.param} />,
            "5":<SalesTotal param={this.props.param} />,
            "7":<EnforcementTotal param={this.props.prarm}/>,
            "8":<ViolationTotal param={this.props.param}/>,
            "isussDetail":<Issus param={this.props.param}/>
        };
        return(
             !content[this.props.content]?<div></div>:content[this.props.content]
        );
    }
}

export default MainContent;