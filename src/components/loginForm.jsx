import React, { Component } from 'react';
import Input from './common/input';
class LoginForm extends Component {
	//REFERNECING DOM ELEMENT IN REACT::useful with animation,minimise use of this
	//Side Note::How to declare variable inside class,outside its function (dont use const,let or var)
	//Main Note::In react to get an Element we dont direct use Document object
	//ie::Document.getElementById('username')<<<VERY BAD, except for that 1 line in app/index
	//Point of react is to create an abstraction between DOM and user
	//Instead do this
	username = React.createRef(); // will create a ref object, which we give below in input elemnt ref attr

	state = {
		account: {
			username: '',
			password: ''
		}
	};
	componentDidMount() {
		//when our componnt is mount we want our username field to be focused
		//this.username.current.focus(); //DONT FORGET the current, read docs on React.createRef()
		//Need to put in ::ref={this.username}:: in <Input> component for this to work
		//BETTER WAY:: use autoFocus attribute on the input tag
	}

	handleChange = (event) => {
		//read docs on event object and what properties it has
		const account = { ...this.state.account }; //Remember never change state props directly, clone first
		//workswith SINGLE INPUT on form
		//account.username = event.currentTarget.value;

		//For MULTI INPUT on form, 1)set attribute  name on input field
		//2)use bracket[] instead od dot. when u cahnge object prop dynamically(here adding)
		account[event.currentTarget.name] = event.currentTarget.value; //Now this works for multiple inputs

		console.log('Account::', account);
		this.setState({ account });
	};

	handleSubmit = (event) => {
		event.preventDefault(); //makes stuff master see console and network
		//Call the server and do stuff
		const username = this.username.current.value; //see above and below(how we passed refernce) (But theres a better way with forms)
		console.log('submitted username', username);
	};

	render() {
		return (
			<div>
				<h1>Login</h1>
				<form onSubmit={this.handleSubmit}>
					<Input
						name="username"
						value={this.state.account.username}
						onChange={this.handleChange}
						label="Username"
						type="text"
					/>
					<Input
						name="password"
						value={this.state.account.password}
						onChange={this.handleChange}
						label="Password"
						type="password"
					/>
					<button className="btn btn-primary">Submit</button>
				</form>
			</div>
		);
	}
}

export default LoginForm;
