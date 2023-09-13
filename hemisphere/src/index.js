import React from "react";
import ReactDOM from "react-dom";
import HemisphereDisplay from "./HemisphereDisplay";


class App extends React.Component{

    constructor(props){
        super(props)
        this.state={latitude:null ,errMessage:''}
        window.navigator.geolocation.getCurrentPosition(
            (position)=>{
                this.setState({latitude:position.coords.latitude})
            },
            (error)=>{
                this.setState({errMessage:error.message})
            }
        )
    }

    render(){

        if(this.state.errMessage && !this.state.latitude){
            return <div>{this.state.errMessage}</div>
        }
        if(!this.state.errMessage && this.state.latitude){
            return <div><HemisphereDisplay latitude={this.state.latitude}/></div>
        }
        else{
            return <div>Loading .. </div>
        }
    } 
}

ReactDOM.render(<App />, document.querySelector('#root'))