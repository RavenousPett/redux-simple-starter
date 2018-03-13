import React, { Component } from 'react';

// Class based component extends React.Component
class SearchBar extends Component{
    // Call the construtor method
    constructor(props){
        super(props); // Call the parent construtor

        // Create a state prop and set to an object with properties of what
        // we want to record, in this case term, i.e. search term
        this.state = { term: '' }; // This is the only place we should set state like this, always use setState elsewhere
    }
    // Render method required on all class based components
    render(){
        // All input elements emit a change event (vanilla html)
        // This line create a new input element and gives it a onChange 'prop', with arrow function in the value
        // use setState setter to change the state object
        return (
            <div>
                <input
                value={this.state.term}
                onChange={event => this.setState({ term: event.target.value})} />
            </div>
        );

    }
}

// Export only a selected part of the coded
export default SearchBar;
