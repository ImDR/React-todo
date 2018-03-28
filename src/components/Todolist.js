import React from 'react';
import Item from './Item';
import Itemform from './Itemform';

class Todolist extends React.Component{
	constructor(){
		super();
		this.deleteItem = this.deleteItem.bind(this);
		this.addItem = this.addItem.bind(this);
		this.changeTempTitle = this.changeTempTitle.bind(this);
		this.doneHandler = this.doneHandler.bind(this);
		this.state= {
			items: [{
				title: "hello",
				done: false
			},
			{
				title: "hello1",
				done: false
			}
			],
			tempTitle: ''
		};
	}

	deleteItem(index){
		let items = this.state.items;
		items.splice(index,1);
		
		this.setState({
			items:items
		});
		
		
	}

	addItem(evt){
		evt.preventDefault();

		if(this.state.tempTitle!==''){
			let items = this.state.items;
			items.push({
				title: this.state.tempTitle,
				done: false
			});
			this.setState({
				items:items,
				tempTitle:''
			});
		}

		
	}

	changeTempTitle(evt){
		this.setState({
			tempTitle: evt.target.value
		});
	}

	doneHandler(index){
		let items = this.state.items;
		
		items[index].done = !items[index].done;

		this.setState({
			items:items
		});
	}


	render(){
		return(
			<div className="todo">
				<h2>To-Do</h2>
				<ul className="todo-list">
					{
						this.state.items.map((item, index)=>{
							return <Item key={index} doneHandler={this.doneHandler} deleteHandler={this.deleteItem} index={index} item={item}/>
						})
					}
					
				</ul>
				<Itemform 
				changeTempTitle={this.changeTempTitle} 
				tempTitle={this.state.tempTitle} 
				addItemHandler={this.addItem}/>
			</div>
		)
	}
}

export default Todolist;