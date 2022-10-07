import React from 'react'

function ChildComponent(props) {
  return (
    <div>
        {/* <button onClick={props.greetHandler}>Greet Parents</button> */}
        <button onClick={()=>props.greetHandler("child")}>Greet Parents</button>
    </div>
  )
}

export default ChildComponent