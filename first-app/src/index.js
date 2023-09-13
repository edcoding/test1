import React from "react";
import ReactDOM  from "react-dom";

const App=()=>{

    const buttonText='click me'

    return (
        <div>
            <label className="label" htmlFor="name">enter email</label>
            <input id='name' type='text'></input>
            <button style={{backgroundColor:'red', color:'white'}}>{buttonText}</button>
        </div>
    )
}

ReactDOM.render(<App/>,document.querySelector('#root'))