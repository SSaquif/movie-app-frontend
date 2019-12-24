import React, { Component } from 'react';

//Using SFC
const ListGroup = (props) => {
	//still need textProperty, uniqueKeyProperty from props. even when using default props instead
	const {
		items,
		textProperty,
		uniqueKeyProperty,
		selectedItem,
		onItemSelect
	} = props; //obj destructuring
	//const { items, onItemSelect } = props; //obj destructuring
	return (
		<React.Fragment>
			{' '}
			<ul className="list-group">
				{items.map((item) => {
					return (
						//using bracket notation to access properties dynamically
						<li
							key={item[uniqueKeyProperty]}
							onClick={() => onItemSelect(item)}
							className={
								item === selectedItem
									? 'list-group-item active'
									: 'list-group-item'
							}
						>
							{item[textProperty]}
						</li>
					);
				})}
			</ul>{' '}
		</React.Fragment>
	);
};
//default props::new property and we set it to an object
//https://reactjs.org/docs/react-component.html::See Class Properties section
//Make sure to spell it properly defaultProps
ListGroup.defaultProps = {
	//will put this in props
	textProperty: 'name', //adding this to property props
	uniqueKeyProperty: '_id' // to make the list component more reusable in other apps
};
export default ListGroup;
