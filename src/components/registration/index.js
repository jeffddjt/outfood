import React, { Component } from "react";
import RegistrationShow from "./registration-show";
import AddNormal from "./addnormal";
import AddSmall from "./addsmall";


class Registration extends Component {

    constructor(props){
        super(props);
        this.state={
            activeComponent:"registrationShow"
        }
    }

    nav(componentName){
        this.setState({activeComponent:componentName});
    }

    render() {

        var components={
            "registrationShow":<RegistrationShow onNav={this.nav.bind(this)} />,
            "addnormal":<AddNormal onNav={this.nav.bind(this)}/>,
            "addsmall":<AddSmall onNav={this.nav.bind(this)}/>
        }

        return (
            !components[this.state.activeComponent]?null:components[this.state.activeComponent]
        );
    }
}



export default Registration;