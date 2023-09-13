import React from "react";
import ReactDOM from "react-dom";
import profile from './img/img.jpeg'
import profile1 from './img/img1.png'
import profile2 from './img/img2.jpeg'
import SingleComment from "./SingleComment";
import UserCard from "./UserCard";

const App = () => {
    return (
        <div className="ui comment">
        <UserCard>
        <SingleComment picture={profile} name='sarah' text='wow' date='5:30' />
        </UserCard>
        <SingleComment picture={profile1} name='john' text='wsdf' date='2:30' />
        <SingleComment picture={profile2} name='ed' text='tfg' date='1:30' />
        </div>

    )
}

ReactDOM.render(<App />, document.querySelector('#root'))