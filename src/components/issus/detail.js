import React, { Component } from "react";

class Detail extends Component {
    cancel(){
        this.props.cancel();
    }
    render() {
        return (
            <div className="contentBox">
                <h4>
                    {/* eslint-disable-next-line */}
                    <a>&gt;&gt;商家具体问题展示</a>
                    {/* eslint-disable-next-line */}
                    <a>&gt;&gt;暂无问题查看</a>
                </h4>
                <div className="detailTitle">
                    <div className="left bor_g">
                        <div className="top b_g">
                            <div className="txt">
                                <i className="iconfont" style={{ color: "rgb(250,251,252)" }}>&#xe60c;</i>
                                <span>小口福肉饼店盖饭炒菜</span>
                                <span style={{ textDecoration: "underline", marginLeft: "10px", color: "#fff", opacity: 0.6, fontSize: "0.8rem" }}>小餐饮单位</span>
                            </div>
                            <span style={{ marginRight: "2%", fontSize: "0.8rem", color: "#fff", opacity: 0.8 }}>暂无问题</span>
                        </div>
                    </div>
                </div>

                <div className="footer">
                    <div className="label">分配管辖区：</div>
                    <div className="process">
                        <select>
                            <option>请选择辖区</option>
                        </select>
                    </div>
                    <div className="point">
                        保存
                    </div>
                </div>
                <div className="details">
                    <div className="tabs_all">
                        <div className="details_tabs">
                            <div className="tosee">录入信息:</div>
                            <div className="content">
                                <div className="tab_title active">营业执照</div>
                                <div className="tab_title">小餐饮登记证</div>
                            </div>
                        </div>
                        <div className="details_tabs">
                            <div className="tosee">百度外卖:</div>
                            <div className="content">
                                <div className="tab_title active">图片</div>
                                <div className="tab_title">基本信息</div>
                            </div>
                        </div>
                    </div>
                    <div className="tabs_content">
                        <div className="left">
                            <div className="content">
                                <div className="yingye">
                                    <div>
                                        <span className="name">企业名称</span>
                                        <span >:</span>
                                        <span>昌黎县小口福肉饼店</span>
                                    </div>
                                    <div><span className="name">许可证编号</span><span className="fenhao">:</span><span className="result">2130322000479</span></div>
                                    <div><span className="name">法人姓名</span><span className="fenhao">:</span><span className="result">高雷</span></div>
                                    <div><span className="name">企业地址</span><span className="fenhao">:</span><span className="result">河北省秦皇岛市昌黎县 城关分局 四街永兴75号门市房</span></div>
                                    <div><span className="name">发证机关</span><span className="fenhao">:</span><span className="result">昌黎县市场监督管理局</span></div>
                                    <div><span className="name">签发人</span><span className="fenhao">:</span><span className="result">李锐、张惠</span></div>
                                    <div><span className="name">发证日期</span><span className="fenhao">:</span><span className="result">2018-04-13 00:00:00</span></div>
                                    <div><span className="name">有效期至</span><span className="fenhao">:</span><span className="result">2021-04-12 00:00:00</span></div>
                                </div>
                            </div>
                            <span className="content-footer">录入内容</span>
                        </div>
                        <div className="right">
                            <div className="content">
                            <img src="https://fuss10.elemecdn.com/a/3a/8e8a46a5e1f5e4d32446fff1f662bjpeg.jpeg" style={{height: "95%", width: "95%"}}/>
                            <img style={{display:"none"}} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAYAAACtWK6eAAANjklEQVR4Xu2d7X0UOQzGtRUQKoBUcKGCJBVcqABSAUoFJBWsqIBQAaECQgUkFRAqOKhg76fDA3vJbtYvGo/sefwlH2Jb1iP9Rx7P7s6C0KAAFNiqwALaQAEosF0BAILsgAKPKABAkB5QAIAgB6BAngKoIHm6YdRMFAAgMwk03MxTAIDk6YZRM1EAgMwk0HAzTwEAkqcbRs1EAQAyk0DDzTwFAEiebhg1EwXMAGHm54vF4lmvuq1Wq1sR+dGDf8x8sFgsnvTgyyYfLGNVBIhCQURviOg1Ee31KviaX1dEdCYidy36enZ29mq1Wp0Tkcat93azWCxkuVx+KHE0GxBmPiKijzMBY11jrSIKyWWJ8LXHMvP7cCGrbXpqe9dE9DK3+mcBEirH1xnCsR7sFyJyM3X0Y+wzs4RKH9O9xz5XIvIyx7FcQPTq+SrHYEdjrkXk2Ls/odJ/9r7OCus7FhGtJkktGRBm1nuNf5Ks9NvZfRVB9fidfJ9E5CQ1FXMAUSN674H2615Ety9uGzPrVfPQ7QLrLeyHiDxNNZcDiJ6CvE011Gn/CxFRPdw2Ztb7pL/cLrDiwkQkOd+TBzAzAPkT1FPvp1moIH+CBUAqXo2CqX3vz0RwDwJA6mPxy+IXEdFnQa5bOJL/5nqRlRaHClJJaCL6SUQH3qvHIAczMxEt68nj0xIAqRMXheOolYeEa5DM/t4RgIwLyHci0gekerLb5IcWw0NDrSa6Nez2w4rb0qAHQNyfCo3L4LxnDw+h9RnbKPd2PQCiGQJIZshJgEM/EnMwlvu9AAJIxsoQp/PWgENd7wkQQOI0ma2XVQuOHgEBJNbZ6Gy+mnD0CgggcZbUVsupDUfPgAASq6x0Ms8UcPQOCCBxktyly5gKjjkAAkhKs3Pi8VPC0QIgt0bfS8BzkokTPce8MRz6SyXJX/n2fsyr3+bSb7dZfHkHkORk6URjjOE4JSL92aXk79m7BkQXF4QCJBMl6hRmreHQL6jl/hCFe0A0QIBkijSdxuYYcIQc0s9q9VdBhjABkmkStqbVseCYBSCoJDVTtb6tMeGYDSCApH7i1rA4NhyzAgSQ1EjZejZqwDE7QABJvQQe01ItOGYJCCAZM3XHn7smHLMFBJCMn8hjWKgNx6wBASRjpPB4c04Bx+wBASTjJbTlzFPBAUBCFPEw0TKdbeeaEg4AshZLQGKb2BazTQ0HALkXRUBikdY2c3iAA4BsiCUgsUnwklm8wAFAtkQRkJSkd9lYT3AAkEdiCUjKEj1ntDc4AMiOKAKSnDTPG+MRDgASEUtAEiFSYRevcACQyMACkkihMrp5hgOAJAQUkCSIFdnVOxwAJDKQQzdAkijY7kMQq1cQjPbLM13/aINdOP/MBEjKVW2hcqxdFPv+0YbycD6cAZDkq9oSHNhi5ccZPymUoV1rcACQjCCvD0EliRewRTgASHx8t/YEJLtFbBUOALI7tlE9AMl2mVqGA4BEpX9cJ0Cy9TDD/VHuYxHGMW9c/kf1AiQPjsObhgMVJCrt0zoBkt8/Gt48HAAkLfeje88dEmb+SkQH0YJt7zjaE/LYtWGLFatUYj9jSF6IyE3iEibpzszviei1gfHJ4UAFMYjijhu8PaM3Xd2IyIuRl1s8fe7VdoNhF3AAkOKU2D2BYSVxX0WYWYjozW5VHu3hBg4AUhjJ2OFGkLhKnE2+M7O+8u4wVhfPlWNYW25V9PwKtlsRsbhBLIjzw6EGkFyIyLnpoownKwTE5QXAOyAnRPQxMY6fRETHuWuFkByLiF6h3TZmviKivzMW6BKOsMV6TkTfEn36KSJ6/5nUFkm9/7yEU1/D+yRhrFuxg+C5N+5PReRHgg7VuzIzE9Ey0bDreIWYpW4dP4hI8kleMiBhcbqteBsp+ncRUeJdt4xK4n57tQZ/ygXNPRzBr5QvTf3UZ0AiojoktSxAEgjWhR019LwgtpLcBr9cV48hE5hZ7//0QeGu1gQca37FntBl+5UNSIDksQV+0R1ZK3CsZ86Oo9F3RHTufWt1n4QAid6PPNtAyfcQK/1/U42Zddukebhpy1/sVxEgARLdPukNuJa84QqsD9GaE/seJINfw+mbPjW/yinTnjKOmTVW6pPGS/fxuu1Qv5qohpu0DNvjIQc1bhqrIV5FfhUD4in4WAsUsFYAgFgrivm6UgCAdBVOOGOtAACxVhTzdaUAAOkqnHDGWgEAYq0o5utKAQDSVTjhjLUCAMRaUczXlQIApKtwwhlrBQCItaKYrysFAEhX4YQz1goAEGtFMV9XCgCQrsIJZ6wVACDWimK+rhQAIF2FE85YKwBArBXFfF0pAEC6CiecsVYAgFgrivm6UgCAdBVOOGOtAACxVhTzdaUAAOkqnHDGWgEAYq0o5utKAQDSVTjhjLUCAMRaUczXlQIApKtwwhlrBQCItaKYrysFAEhX4YQz1goAEGtFMV9XCgCQrsIJZ6wVACDWimK+rhQAIF2FE85YKwBArBXFfF0pAEC6CiecsVYAgFgrivm6UgCAdBVOOGOtAACxVhTzdaUAAOkqnHDGWgEAYq0o5utKAQDSVTjhjLUCAMRaUczXlQJFgIQXuL8hotdEpC9w16Yvbr8ioncioi9zb65t8euOiC6DX0Uvp59KEGY+IiKNl/7dC+vQWH0QEf3bZDs7O3u1Wq2YiA7WHBhy8LrEqWxAmFkX83lN6AfrWCwWvFwu35UssPbYCL8UjuPW4GfmJRFpEm1rCv+ZiDQDf7iQaQ6ug3HfvyK/sgBhZq0WXx+DY22VKrrUTvQcexFwDNM2BQkznxPR2whNtOIr/O4hiYRjcPlSRE4j/H94kc8ZxMxKrZbp2LYvIrpFcdsS4Bh8uBaRY7cOhYWFi9m3hHU2AUkC9IPrL3O2kckVJENwXaDejzxW3hPiZ981A45hES2Ar9Vb7ztSmntImPmfyB3M4PcnETlJEUH75gCiia772ZT2RURSKk7K3EV9C+BQu6ciontct42Z9Sb1MGOBbiEJMdMtflITkeR8Tx6QUdrUiTsR2U/ypkLnQjh0hRciovt7t60AEPXJJSThNE63+UnNMyCUs7gk7xM7G8ChFrP2tYlLLepeCIhLSABIUUrsHmwEhxp66v3Eh5lztsT3RXRVSQDI7hzP7mEIhz5c0wekrls4DtUTxCeFC3UDCQApjOS24YZw3Ooxt/fqMejAzHp689FAVheQABCDSN6fYq5wrEGi1e69gbSTQwJADKK4PsXc4egNEgBiCAjg+L+YzNx8JQEgRoAAjs1Ctg4JADEABHA8LmLLkACQQkAAR5yArUICQOLiu7EX4EgTr0VIAEhajH/3Bhx5wrUGCQDJiDPgyBBtbUhLkACQxFgDjkTBtnRvBRIAkhBvwJEgVkTXFiABIBGB1C6AI1KoxG7eIQEgEQEFHBEiFXTxDAkA2RFYwFGQ+QlDvUICQB4JIuBIyHCDrh4hASDbT1l2/lhdZE409X2OSJ9G6+YNEgCyIdSoHKPlf9TEniABIPdCBjiicnj0Tl4gASD/f8KLbdXoqR9vwAMkACTEC5UjPnFr9pwaEgCCh4A18z3L1pSQzB4QVI6snK0+aCpIZg0I4Kie50UGp4BktoAAjqJcnWxwbUhmCQjgmCy/TQzXhGR2gAAOkxydfJJakMwKEMAxeV6bLqAGJLMBBHCY5qabycaGZBaAAA43+TzKQsaEpHtAAMcoOelu0rEg6RoQwOEuj0dd0BiQdAsI4Bg1F91Obg0JEQ0fYE3yOec1gLVe4qmOvCAiffHiXpJXDzvjy06FAk4x3BiSi5wXAnkH5AfgmCI1/dg0hCQrl7wDUhopVI5SBR2MN4Qk2ZueAQEcyengd8BUkPQKCODwm+vZK5sCkh4BARzZKeh/YG1IegMEcPjP8eIV1oSkJ0AAR3HqtTNBLUh6AQRwtJPbZiutAUkPgAAOs5Rrb6KxIekBECEifQjksX0SkRuPC0tZEzPvLRaLw9VqpR/X8NhOwkdJzNfWAyDmohhPeEdEZyJyZTzv6NMpGES0JKLXoxtzagCA1AvMhYic1zNXZinAoZ+D81o1yhyMHA1AIoUy6vaylUrCzArHkZHfzU4DQOqG7k5E9uuaTLeW+92JdEv+RwCQ+jE6FpHr+mbjLTLzJRG9ih/Rb08AUj+27u9FmFkBPqwvjT+LtQDhcBriT4H6K2oBED2a/qu+NP4s1gJEb/b0pg+N6FREdAvjtqGC/A7NrYgkn+Ilf+VWzTGzPsx74jYr6i3sqYh4fbD5nwrMjIr/Kx/eiYhqkdRyAdFnAG+TLPXX+YOIuH/oFp6B6APOuV/Q9kVEdUhqWYCEK9Oc97ZNfWaMmfXjGx+TMqOvztlb4RJA9KMLuv/+uy8td3rzhYhOvG+t7nsRINF4zamS/NRdZsl9YjYgQwCY+Xn4fI/evCs0PZ6YaMXQ8nxVIvZO9EbuELZbui3UiqJxezayydrTKxC6s9H7Qj3eviy9kBUDUlsB2IMCNRUAIDXVhq3mFAAgzYUMC66pAACpqTZsNacAAGkuZFhwTQUASE21Yas5BQBIcyHDgmsqAEBqqg1bzSkAQJoLGRZcUwEAUlNt2GpOAQDSXMiw4JoKAJCaasNWcwoAkOZChgXXVOBfW8CAQWJkhXQAAAAASUVORK5CYII=" class="big point"></img>
                            </div>
                            <span className="content-footer">抓取内容</span>
                        </div>
                    </div>
                </div>
                <div className="footer-btn">
                    <div className="point">确认</div>
                    <div className="point cancel" onClick={this.cancel.bind(this)}>取消</div>
                </div>
            </div>
        );
    }
}

export default Detail;