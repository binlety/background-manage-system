import React from "react";
import MUtil from "util/mm.jsx";
import User from 'service/user-service.jsx'

const _mm = new MUtil();
const _user = new User();
class Login extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			username: "",
			password: "",
			redirect: _mm.getUrlParam("redirect") || "/"
		}
	}
	componentWillMount() {
		document.title = "登陆 - MMALL ADMIN";
	}
//		handleChange(key,val){
//			this.setState({
//				[key]:val
//			})
//			console.log(this.state)
//		}
	handleChange(e) {
		let inputValue = e.target.value,
			inputName = e.target.name;
		this.setState({
			[inputName]: inputValue
		})
	}
	onInputKeyUp(e) {
		if(e.keyCode === 13) {
			this.onSubmit();
		}
	}
	onSubmit() {
		let loginInfo = {
				username: this.state.username,
				password: this.state.password
			},

			checkResult = _user.checkLoginInfo(loginInfo);

		if(checkResult.status) {
			_user.login(loginInfo).then((res) => {
//					console.log(res)
				_mm.setStorage('userInfo',res);
				this.props.history.push(this.state.redirect)
			}), (errMsg) => {
				_mm.errorTips(errMsg)
			}
		} else {
			_mm.errorTips(checkResult.msg);
		}

	}
	render() {
		return(
			<div className="row">
			<div className="col-md-4 col-md-offset-4">
			<div className="login-panel panel panel-default">
			<div className="panel-heading">
			<h3 className="panel-title">欢迎登陆 - MMALL管理系统</h3>
			</div>
			<div className="panel-body">
			<div>
			<div className="form-group">
				<input type="text"
				className="form-control"
				placeholder="User Name" 
				name="username"
				onKeyUp={e=>this.onInputKeyUp(e)}
				onChange={e=>this.handleChange(e)}
				
				/>
			</div>
			<div className="form-group">
			<input type="password" 
			 className="form-control" 
			 placeholder="Password"
			 name="password"  
				onChange={e=>this.handleChange(e)}
				onKeyUp={e=>this.onInputKeyUp(e)}
				
			   
			/>
			
			</div>
			<button 
			onClick={e=>{this.onSubmit(e)}} 
			className="btn btn-lg btn-primary btn-block">登陆</button>
			</div>
			</div>
			</div>
			</div>
			</div>
		)
	}
}

export default Login;