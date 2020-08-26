import React from "react";
import MUtil from "util/mm.jsx";
import User from 'service/user-service.jsx'

const _mm = new MUtil();
const _user = new User();
import './index.css'
class NavTop extends React.Component{
	constructor(props){
		super(props)
		this.state={
			username:_mm.getStorage('userInfo').username || ""
		}
		
	}
	onLogout(){
		_user.logout().then(res=>{
			_mm.removeStorage("userInfo");
			window.location.href='/login'
		},errMsg=>{
			_mm.errMsgTips(errMsg)
		})
	}
	render(){
		return (
			<div>
			<div className="navbar navbar-default top-navbar" role="navigation">
			<div className="navbar-header">
				<a href="#" className="navbar-brand">
					<b>HAPPY</b>
					&nbsp;MMALL
				</a>
			</div>
			<ul className="nav navbar-top-links navbar-right">
				<li className="dropdown" >
					<a className="dropdown-toggle" data-toggle="dropdown" href="#">
						<i className="fa fa-user fa-fw"></i>
						{
							this.state.username
						     ? (<span>欢迎 ,{this.state.username}</span>)
							 :   (<span>欢迎您</span>)
						}

						<i className="fa fa-caret-down"></i>
					</a>
					<ul className="dropdown-menu dropdown-user">
						<li className="dropdown-item"
						onClick={this.onLogout}
						>
							<a>
								<i className="fa fa-sign-out fa-fw"></i>
								&nbsp;退出登录
							</a>
						</li>
					</ul>
				</li>
			</ul>
		</div>
			</div>
		)
	}
}

export default NavTop;