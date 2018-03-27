import React from 'react';
import ReactDOM from 'react-dom';
import Item from './components/Item.js';
import './index.css';

class Hello extends React.Component{
	constructor(){
		super();
		this.deleteName = this.deleteName.bind(this);
		this.state= {
			names: ["Dinesh", "Diksha", "Ketan"]
		};
	}

	deleteName(index){
		let names = this.state.names;
		names.splice(index,1);
		//console.log(this.state.names[index]);
		this.setState({
			names:names
		});
	}
	render(){
		return(
			<ul>
				{
					this.state.names.map((name, index)=>{
						return <Item key={name} deleteHandler={this.deleteName} index={index} firstName={name}/>
					})
				}
				
			</ul>
			
		)
	}
}

ReactDOM.render(<Hello />, document.getElementById('root'));