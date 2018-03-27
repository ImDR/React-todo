import React from 'react';

const Item = (props)=>{
	return (
		<li>
			{props.firstName} 	 
			<button onClick={()=>{
					props.deleteHandler(props.index);
				}}>Delete
			</button>
		</li>
		);
}

/*
class Item extends React.Component{
	render(){
		return(
			<li>
				{this.props.firstName} 
				 
				<button onClick={()=>{
					this.props.deleteHandler(this.props.index);
				}}>Delete</button>
			</li>
		)
	}
}

*/

export default Item;