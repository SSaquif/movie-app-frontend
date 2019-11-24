import React, { Component } from 'react';
//for font-awesome 5
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
//import { faKissWinkHeart } from '@fortawesome/free-solid-svg-icons'; //cant use both together this wey
import { faKissWinkHeart } from '@fortawesome/free-regular-svg-icons';

//Things Needed for this REUSEABLE COMPONENT
//INPUT: liked::boolean
//OUTPUT: onClick event raised (handled by parent)
//So this componenet knows nothing about movies or whatever::A DUMB COMPONENT

//IF we want we can make this into a SFC (Stateless functional component)
//Remeber to remove this and pass props as argument to the SFS instead
//ie:: props.property instead of this.props.property

class Like extends Component {
	render() {
		let iconColor = 'grey';
		//we will pass a liked props which will determine the color of the kissy-wink
		if (this.props.liked) {
			iconColor = 'red';
		}
		return (
			<FontAwesomeIcon
				onClick={this.props.onClick}
				icon={faKissWinkHeart}
				color={iconColor}
				style={{ cursor: 'pointer' }} //gives that prety hand symbol
				size="lg"
			/>
		);
	}
}

export default Like;
