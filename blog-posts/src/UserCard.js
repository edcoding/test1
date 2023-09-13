import React from "react"

const UserCard=(props)=>{
    console.log(props)
    return (
  
        <div className="ui card">
            <div href="/" className="content">
                <div className="header"></div>
                <div className="description">
                    {props.children}
                </div>
            </div>
            <div className="ui bottom button">
                <i className="add icon">Add friend</i>
            </div>
        </div>
    
    )

}

export default UserCard