import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Hello extends React.Component{
	constructor(){
		super();

		this.state= {
			names: ["Dinesh", "Diksha", "Ketan"]
		};
	}
	render(){
		return(
			<div>
				{
					this.state.names.map(function(name){
						return <Item key={name} firstName={name}/>
					})
				}
				
			</div>
			
		)
	}
}

class Item extends React.Component{
	render(){
		return(
			<h2>{this.props.firstName}</h2>
		)
	}
}

ReactDOM.render(<Hello />, document.getElementById('root'));