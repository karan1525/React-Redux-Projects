import React, {Component} from 'react';

//pull react and also the component part from react as Component

// Convert from functional component to a class based component
// const SearchBar = () => { 
// 	return <input /> //React.createElement()

// };

// Declare a new SearchBar (JS object)
class SearchBar extends Component {

	//State -> plain JS object used to record and react to inputs
	// Each class has it's own state object
	// Component automatically re-renders 
	// Child components automatically re-render too
	// Initialize state 
	// Only class based objects have constructors 
	// constructor called -> whenever a new instance is called of SearchBar
	// constructor function used to set up the searchBar

	constructor(props) {
		super(props); //have to call super always before
		//Creation parameters -> props

		this.state = {term: 'Starting Value' }; // term -> attribute of the state
		// Update everytime the user enters information
		// Only update state like this in the constructor. Otherwise, it's different
		// Look below (this.setState )
	}

	//MUST DEFINE A RENDER METHOD
	render() {

		// onChangeEvent (basically if a user starts typing)
		// Can compact it using => 

		// DO NOT EVER DO THIS! BADD!!
		//this.state.term = this.target.value 

		// Value of state changed every time the user enters input
		// state first defined in the constructor and then updated 
		// in the onChange listener

		//break line <br />

		//Change state only works in render function. Not in any other function

		// <input onChange={(event) => this.setState({term: event.target.value})} />

		//Value check with value = {this.state.term}

		return (
			<div>
				 <input 
				 	value = {this.state.term}
				 	onChange={(event) => this.setState({term: event.target.value})} 
				 />
				<br />
				Value of the input: {this.state.term}
			</div>
			);
		// return <input onChange={this.onInputChangedListener} />;
		// Cannot change this.state in another function
	}

	// onInputChangedListener(event) {
		//real time event printing
	// }

}

// instance of a class
// new SearchBar 

// Event handling
// Event handler -> which element we need to monitor

// Controlled forme element
// State sets the value of the input
// has it's value set by the state
// when the state changes, the value will change

//any file that needs SearchBar can now use it.
export default SearchBar;
