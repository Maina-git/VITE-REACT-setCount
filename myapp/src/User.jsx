import React from 'react'
import "./App.css"


const User = (props) => {
  return (
    <div className="card">
        <nav className="nav">
        <p className="userPicture">U</p>
        <h1 className="name">NAME:{props.name}</h1> 
        </nav>
        <p className="info">Occupation:{props.info}</p> 
        <p className="location">Location:{props.location}</p>   
        <button className="btn"  
        onClick={props.data}
        >My Blog</button>
    </div>
  )
}

export default User;
