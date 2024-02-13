
import React from 'react'
import User from './User';
import "./App.css";

const App = () => {
function getData(){
alert("Hello nice to meet you User");
}


  return (
    <div>
      <h1 className="header">For the Developers</h1>
      <User  name="Francis" info="Front End Developer"  location="Embu" data={getData}/>
      <User  name="Josh" info="Software Engineer"  location="Lisbon" data={getData}/>
      <User  name="Harnain" info="Data analyst"  location="Pakistani" data={getData}/>
      <User  name="Lucy" info="Full stuck"  location="London" data={getData}/>
      <User  name="GodsPower Maurice" info="Web Developer"  location="Abuja" data={getData}/>

    </div>
  )
}

export default App;









/*
const App = () => {

function getData(){
alert("Hello from App Component");
}
  return (
    <div>
    <User data={getData}/>
    <User data={getData}/>
    <User data={getData}/>
    <User data={getData}/>
    <User data={getData}/>
    <User data={getData}/>
    </div>
  )
}

export default App;
*/









