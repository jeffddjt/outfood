import React,{ Component } from "react";
import "./registration.css";
import level1_unselected from "../../statics/images/unselected_1.png";
import level1_selected from "../../statics/images/selected_1.png";
import level2_unselected from "../../statics/images/unselected_2.png";
import level2_selected from "../../statics/images/selected_2.png";
import level3_unselected from "../../statics/images/unselected_3.png";
import level3_selected from "../../statics/images/selected_3.png";

class Level extends Component {
    constructor(props){
        super(props);
        this.state={
            level:0,
            level2:0,
        };
    }

    render(){
        return(
            <div className="level">
            <div className="center">
                <span>量化等级：</span>
            </div>
            <div className="right">
                <div>
                    <span className={`point ${this.state.level === 1 ? "active" : ""}`} onClick={() => { this.setState({ level: 1 }) }}>优</span>
                    <span className={`point ${this.state.level === 2 ? "active" : ""}`} onClick={() => { this.setState({ level: 2 }) }}>良</span>
                    <span className={`point ${this.state.level === 3 ? "active" : ""}`} onClick={() => { this.setState({ level: 3 }) }}>一般</span>
                </div>
                <div>
                    <img alt="level1" id="img1" src={this.state.level === 1 ? level1_selected : level1_unselected} />
                    <img alt="level1" id="img2" src={this.state.level === 2 ? level2_selected : level2_unselected} />
                    <img alt="level1" id="img3" src={this.state.level === 3 ? level3_selected : level3_unselected} />
                </div>
                <div>
                    <span className={`point ${this.state.level2 === 1 ? "active" : ""}`} onClick={() => { this.setState({ level2: 1 }) }}>A</span>
                    <span className={`point ${this.state.level2 === 2 ? "active" : ""}`} onClick={() => { this.setState({ level2: 2 }) }}>B</span>
                    <span className={`point ${this.state.level2 === 3 ? "active" : ""}`} onClick={() => { this.setState({ level2: 3 }) }}>C</span>
                </div>
            </div>
            <div className="left">
                <span>动态评级</span>
                <span>年度评级</span>
            </div>
        </div>
        );
    }
}

export default Level;