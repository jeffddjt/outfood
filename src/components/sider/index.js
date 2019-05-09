import React from 'react';
import arrow from '../../statics/images/arrow_right.png';


class Sider extends React.Component {

    constructor(props){
        super(props);
        this.state={
            active:1,
            parent:0
        }
    }


    handleClick(item){
        this.setState({active:item.id,parent:item.parent});
        this.props.nav(item);
    }

    rendemenu(menu){
        var m = menu.map((item)=>{
            var active=this.state.active===item.id||this.state.parent===item.id?"menuitem item-active":"menuitem";
            var child;
            if(item.child.length>0){
                    var height=this.state.active===item.id||this.state.parent===item.id?"112px":"0px";
                    child=<ul className="menubar submenu" style={{height: height}}>
                            {this.rendemenu(item.child)}
                        </ul>
                }                      
            return(
            <li key={item.id} className={active} data="admin/problem.html">
            {item.iconfont}
            <span style={{marginLeft:"2px"}}  onClick={this.handleClick.bind(this,item)}>{item.title}</span>
            <img alt="arrow" src={arrow} />   
            {child}         
        </li>)
        });

        return m;

    }

    render() {
        const menutar = [
            {
                id:1,
                parent:0,            
                title:"商家具体问题展示",
                iconfont:<i className="iconfont">&#xe625;</i>,
                child:[]
            },
            {
                id:2,
                parent:0,            
                title:"商家位置展示",
                iconfont:<i className="iconfont">&#xe66c;</i>,
                child:[]
            },
            {
                id:3,
                parent:0,            
                title:"登记机关注册信息",
                iconfont:<i className="iconfont">&#xe601;</i>,
                child:[]
            },
            {
                id:4,
                parent:0,            
                title:"现场处置记录",
                iconfont:<i className="iconfont">&#xe680;</i>,
                child:[]
            },
            {
                id:5,
                parent:0,            
                title:"销售统计",
                iconfont:<i className="iconfont">&#xe65f;</i>,
                child:[]
            },
            {
                id:6,
                parent:0,            
                title:"数据统计",
                iconfont:<i className="iconfont">&#xe63e;</i>,
                child:[
                    {
                        id:7,
                        parent:6,                    
                        title:"执法统计",
                        iconfont:<i className="iconfont">&#xe63e;</i>,
                        child:[]
                    },
                    {
                        id:8,
                        parent:6,                    
                        title:"违规统计",
                        iconfont:<i className="iconfont">&#xe63e;</i>,
                        child:[]
                    },
                ]
            },
        ];



        return (
            <ul className="menubar">
                {this.rendemenu(menutar)}
            </ul>
        );
    }
}

export default Sider