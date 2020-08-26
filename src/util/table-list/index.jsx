import React from "react";

//通用的列表
class TableList extends React.Component{
	constructor(props){
		super(props);
		this.state={
			isFirstLoading:true
		}
	}
	componentWillReceiveProps(){
//		列表第一次挂载之后执行
		this.setState({
			isFirstLoading:false
		})
	}
	render(){
//		表头信息
//      let tableHeader=this.props.tableHeads.map((tableHead,index)=>{
//      	if(typeof tableHead==='object'){
//      		
//      		return  <th key={index} width={tableHead.width}>{tableHead.name}</th>
//      		
//      	}else if(typeof tableHead==='string'){
//      		
//      		return  <th key={index}>{tableHead.name}</th>
//      	}
//      }
//
//      )
		let tableHeader=this.props.tableHeads.map(
			(tableHead,index)=> <th key={index}>{tableHead}</th>
		)
//      列表内容
        let listBody=this.props.children;
//		列表的信息
		  let listInfo=(
			  	<tr>
			  	   <td colSpan={this.props.tableHeads.length} className="text-center">
			  	    {this.state.isFirstLoading ? '正在加载数据...' : '没有相关数据'}
			  	   </td>
			  	</tr>
			  )
			  let tableBody=listBody.length>0 ? listBody : listInfo
		return (
			<div className="row">
			         <div className="col-md-12">
			              <table className="table table-striped">
			                  <thead>
			                     <tr>
					                 {tableHeader}
			                     </tr>
			                  </thead>
			                  <tbody>
			                  {tableBody}
			                      
			                  </tbody>
			              </table>
			          </div>
			       </div>
		)
	}
}


export default TableList;