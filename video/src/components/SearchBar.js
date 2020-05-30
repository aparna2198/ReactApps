import React from 'react';

class SearchBar extends React.Component{
    state = { term: "" };
//  this is an arrow fucntion becuase it is a call back which m gonna pass to a child function
    // this inside of a call back shouldnt be undefined this is why we use arrow function
    onInputChange = (event) => {
        this.setState({ term: event.target.value });
    }
    onFormSubmit=(event)=>
    {
        event.preventDefault();
        this.props.onFormSubmit(this.state.term)
    }
    // make ssure we call callbasck from parent component
    // so that we can tell the app that the user just submitted the form and 
    // that they probably want to initiate a new search of the utube API
    
    render()
    {
        return ( 
            <div className=" search-bar ui segment">
                <form onSubmit={this.onFormSubmit} className="ui form" >
                <div className="ui field">
                     <label>Video Search</label>  
                        <input type="text" value={this.state.term} onChange={this.onInputChange} />
                </div>
                 </form>
            </div>
        )
    }
}
export default SearchBar;