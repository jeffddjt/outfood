import React from 'react';
import "../statics/css/css.css";
import logo from '../statics/images/logo.png';
import Toast from './toast';

class Login extends React.Component {
  constructor(props){
    super(props);
    this.state={
      username:"",
      password:""
    };
  }

  login(){
    var data={
      username:this.state.username,
      password:this.state.password
    };
    if(!data.username){
      Toast.error("请输入用户名!",2000);
      return;
    }
    if(!data.password){
      Toast.error("请输入密码!",2000);
      return;
    }
    this.props.history.push("/admin")
  }

  render() {
    return (
      <div className="container">
        <div className="login_box">
          <img alt="logo" className="logo" src={logo} />
          <h1 style={{ fontSize: "1.57rem", color: "#0854b4",fontWeight:"bold", display: "block" }}>xxxx食品和市场监督管理局</h1>
          <h2 style={{ fontSize: "3.15rem", marginBottom: "40px",fontWeight:"bold",  color: "#0854b4" }}>网络餐饮监管现场处置平台</h2>
          <div className="login">
            <div className="content">
              <span>账号:</span>
              <input type="text" placeholder="请输入账号" id="username" onChange={(e)=>this.setState({username:e.target.value})} />
            </div>
            <div className="content">
              <span>密码:</span>
              <input type="password" placeholder="请输入密码" id="password" onChange={(e)=>this.setState({password:e.target.value})} />
            </div>
            <div className="button_container">
              <button type="button" onClick={this.login.bind(this)}>登录</button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}


export default Login;
