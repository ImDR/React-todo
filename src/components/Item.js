import React from 'react';

const Item = (props)=>{
	return (
		<li className={props.item.done?'done':''}>
			<input type="checkbox" defaultChecked={props.item.done} onChange={()=>{
				props.doneHandler(props.index);
			}}/>
			<p className="item-title">{props.item.title}</p>
			<div className="buttons">
				<button onClick={()=>{
						props.deleteHandler(props.index);
					}}>Delete
				</button>
			</div>
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