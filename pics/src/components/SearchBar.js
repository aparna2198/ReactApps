import React from 'react';

// this onInputChange callback will be ran with one argument being passed to it automatically referred as event object
// it is normal javascript object being passed it contains information about the event which just occured
// if user typing something there is generally one property we care about that is event.target.value

class SearchBar extends React.Component{
    state = { term: '' }
    // arrow function 
    // it ensures that value of this  is alqays equal to our SearchBar or instance of search bar
    onFormSubmit=(event)=>
    {
        event.preventDefault();
        // this is class based components we have to use props here then we use a this keyword
        // run is a function(onSearchSubmit) function which is defined in App.js file and we passing in term as argument
        // and later collecting it and showing it in thus passing info from child to parent 
        this.props.run(this.state.term)
        // any time we pass a prop down ainto a component that we are creating we refer to that prop with onSubmit name
    }
    render() {
       
    return (
        <div className="ui segment">
            <form onSubmit={this.onFormSubmit} className="ui form">
                <div className='field'>
                <label>Image Search</label>
                    <input type="text" onChange={(e)=>this.setState({term:e.target.value})} />
                    {/* note that we not putting () because if we did put that that means onInputHCnage will call itself evrytime the 
                    component is rendered instead we passing a reference 
                     of it to the input element so that input can call it later sometime */}
                </div>
               
            </form>
        </div>
    )
    }
}

export default SearchBar;