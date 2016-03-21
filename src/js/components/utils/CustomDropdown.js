import React from "react"

export default class CustomDropdown extends React.Component{
	render(){
		let nameName = this.props.nameName
		let optionNodes = this.props.data.map(function(item){
			return(
			 <option key={item._id} value={item._id}>{item[nameName]}</option>
			 	)
		})

	return(
		<select onChange={this.props.onchange2} defaultValue="choose one" className="form-control">
			{optionNodes}
		</select>
		)

	}

}
/*
	<div className="input-group">
			Neighborhood:
			<CustomDropdown setValueTo={this.state.neighborhood} 
			onChange={this.handleNeighborhoodChange.bind(this)} 
			data={this.props.allNeighborhoods} 
			nameName="neighborhood_name" />
		</div>
*/