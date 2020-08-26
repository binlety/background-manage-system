import React from "react";
import {Link} from "react-router-dom";

import MUtil from "util/mm.jsx";
import Statistic from 'service/statistic-service.jsx'
const _mm = new MUtil();
const _statistic = new Statistic();

import PageTitle from "component/page-title/index.jsx";

//import './index.css'

class Home extends React.Component{
	constructor(props){
		super(props);
		this.state={
			userCount:"-",
			productCount:"-",
			orderCount:"-"
		}
	}
	componentDidMount(){
		this.loadCount();
	}
	loadCount(){
		_statistic.getHomeCount().then(res=>{
			this.setState(res);
		},err=>{
			_mm.errTips
		})
	}
	render(){
		return (
			<div id="page-wrapper">
           <PageTitle title="首页">
           
           </PageTitle>
           <div className="row">
				<Link className="col-md-4" to="/user">
					<b className="color-box brown" >
						<p className="count">{this.state.userCount}</p>
						<p className="desc">
							<i className="fa fa-user-o"></i>
							<span>用户总数</span>
						</p>
					</b>
				</Link>
				<Link className="col-md-4" to="/product">
					<b className="color-box green">
						<p className="count">{this.state.productCount}</p>
						<p className="desc">
							<i className="fa fa-list"></i>
							<span>商品总数</span>
						</p>
					</b>
				</Link>
				<Link className="col-md-4" to="/order">
					<b className="color-box blue">
						<p className="count">{this.state.orderCount}</p>
						<p className="desc">
							<i className="fa fa-check-square-o"></i>
							<span>订单总数</span>
						</p>
					</b>
				</Link>
			</div>
			</div>
		)
	}
}

export default Home;