import React from 'react';
import ReactDOM from 'react-dom';
import SeasonChange from './SeasonChange'
import Loader from './Loader';
// created a class component 
class App extends React.Component
{
    
    state = {lat:null, errormessage:''}
    componentDidMount() {
         window.navigator.geolocation.getCurrentPosition(
        (position) => this.setState({lat: position.coords.latitude }) ,//call back function 
        (error) => this.setState({errormessage:error.message})              
        )
        console.log("my component was rendered to the screen");
    }
    componentDidUpdate() {
        console.log("it rerendered")
    }
    renderContent(){
            if (this.state.lat && !this.state.errormessage)
            return <div><SeasonChange lat={this.state.lat}/></div>
        if (!this.state.lat && this.state.errormessage)
            return <div>Error:{this.state.errormessage}{this.state.lat}</div>
        if (!this.state.lat && !this.state.errormessage)
            return <div><Loader message="Please accept location request"/></div>
    }
    render() { 
        return (
        <div className="border red">
        {this.renderContent()}
        </div>
        )
}
}
ReactDOM.render(<App/>,document.querySelector('#root'))