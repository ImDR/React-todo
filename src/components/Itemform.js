import React from 'react';

const Itemform = (props)=>{
	return (
		<form className="todo-form" onSubmit={props.addItemHandler}>
			<input 
			value={props.tempTitle}  
			onChange={props.changeTempTitle}
			type="text" placeholder="Enter text..."/>
			<button type="submit" >Add</button>
		</form>
		);
}

export default Itemform;