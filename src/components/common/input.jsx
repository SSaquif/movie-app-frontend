import React from 'react';

//EXTRACTING A REUSABLE INPUT
//A resusable comnponent for our Input fields (using bootstrap forms)
//Use git diff to see what was changed

//Without using object destructuring we would do something like this
//:::const Input = (props) => {}:::AND then use props.name, props.value, props.onChange instead directly pass this via object destructuring
//easier and cleaner

//Object destrcturing to replace prop with its properties
const Input = ({ name, label, value, onChange, type }) => {
	return (
		<div className="form-group">
			<label htmlFor={name}>{label}</label>
			<input
				autoFocus
				//ref={this.username}//Needed if not using autofocus
				value={value}
				onChange={onChange}
				name={name}
				id={name}
				type={type}
				className="form-control"
			/>
		</div>
	);
};

export default Input;
