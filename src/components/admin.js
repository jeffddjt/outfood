import React from "react";
import "../statics/css/admin.css";
import logo from "../statics/images/logo.png";
import accountImg from "../statics/images/account.png";
import userImg from "../statics/images/user.png";
import exitImg from "../statics/images/exit.png";
import Sider from "../components/sider";
import MainContent from "./maincontent";

class Admin extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            menuItem: {
                id: 1
            }
        }
    }

    nav(menuItem) {
        this.setState({ menuItem: menuItem });
    }
    mainContentCallback(obj) {
        console.log(obj)
    }

    render() {

        return (
            <div className="main">
                <div className="leftcontent">
                    <div className="adminlogo">
                        <img alt="logo" src={logo} />
                        <span>XXX食品和市场监督管理局</span>
                    </div>
                    <span className="identity">系统管理人员</span>
                    <Sider nav={this.nav.bind(this)} />
                    {/* <LeftMenu onNav={this.nav.bind(this)}/> */}
                </div>
                <div className="maincontent">
                    <div className="header">
                        <div className="name">
                            <h3 style={{ letterSpacing: "2px", fontSize: "1.3rem", display: "block" }} >XXX食品和市场监督管理局网络餐饮监管现场处置平台</h3>
                        </div>
                        <div className="admin">
                            <img alt="account" src={accountImg} />
                            <span>qhd</span>
                            <img alt="user" style={{ height: "1.5rem", width: "1.5rem", marginRight: "1rem" }} src={userImg} />
                            <img alt="exit" style={{ height: "1.5rem", width: "1.5rem" }} src={exitImg} />
                        </div>
                    </div>
                    <div className="centercontent">
                        <MainContent content={this.state.menuItem.id} param={0} callback={this.mainContentCallback.bind(this)} />
                    </div>
                </div>
            </div>
        );
    }
}


export default Admin;