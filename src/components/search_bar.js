import React, { Component } from 'react';

// Class based component extends React.Component
class SearchBar extends Component{
    // Render method required on all class based components
    render(){
        // All input elements emit a change event (vanilla html)
        // This line create a new input element and gives it a onChange 'prop'
        return <input onChange={this.onInputChange} />;  // Returns JSX. React specific property, onChange i.e. (on, TheEventName)
    }

    // Event handler. Naming convention on/handleElementEvent I.e. onInputChange
    // Create the event handler and pass it to the input we want to watch the event on i.e. input onChange={this.onInputChange}
    onInputChange(event){
        console.log(event.target.value);
    }
}

// Export only a selected part of the coded
export default SearchBar;
