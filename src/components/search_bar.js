import React, { Component } from 'react';

// Class based component extends React.Component
class SearchBar extends Component{
    // Render method required on all class based components
    render(){
        // All input elements emit a change event (vanilla html)
        // This line create a new input element and gives it a onChange 'prop', with arrow function in the value
        return <input onChange={event => console.log(event.target.value)} />;  // Returns JSX. React specific property, onChange i.e. (on, TheEventName)
    }
}

// Export only a selected part of the coded
export default SearchBar;
