import React from 'react';

/*
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
*/


class Item extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			editing: false
		};

		this.editHandler = this.editHandler.bind(this);
		this.submitHandler = this.submitHandler.bind(this);
	}

	editHandler(){
		this.setState({
			editing: !this.state.editing
		});
	}

	submitHandler(evt){
		evt.preventDefault();
		//console.log(this.edit.value);
		if(this.edit.value!==''){
			this.props.editHandler(this.edit.value, this.props.index);
			this.editHandler();
		}
	}
	render(){
		return(
			<div>
			{(this.state.editing)?
				<li>
					<form onSubmit={this.submitHandler}>
						<input 
						ref={(node)=>{ this.edit = node}}
						defaultValue={this.props.item.title}  
						type="text"/>
						<button type="submit">Save</button>
					</form>
				</li>
			:

				<li className={this.props.item.done?'done':''}>
					<input type="checkbox" defaultChecked={this.props.item.done} onChange={()=>{
						this.props.doneHandler(this.props.index);
					}}/>
					<p className="item-title">{this.props.item.title}</p>
					<div className="buttons">
						<button onClick={this.editHandler}>Edit
						</button>
						<button onClick={()=>{
								this.props.deleteHandler(this.props.index);
							}}>Delete
						</button>
					</div>
				</li>
			}
			</div>
		)
	}
}


export default Item;