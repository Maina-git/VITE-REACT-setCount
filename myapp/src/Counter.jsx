import "./App.css";
import React, {useState} from  "react"


function Counter(){

const [count, setCount]=useState(0);

function firstClick(){
  setCount(prevCount=>prevCount+1);
}
function secondClick(){
  setCount(prevCount=>prevCount-1);
}
function reset(){
  setCount(0);
}



return(
  <>
  <h1 className="header">MY COUNTER 2024</h1>

  <div   className="counter">
 
<p className="text">{count}</p>

<button className="add"
onClick={firstClick}
>INCREASE</button>
<button className="reset"
onClick={reset}
>RESET</button>
<button className="minus"
onClick={secondClick}
>DECREASE</button>

  </div>
  </>
)

}
export default Counter;