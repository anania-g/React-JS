import React, { Component } from 'react'

class UserGreeting extends Component {

constructor(props) {
  super(props)

  this.state = {
     isLoggedIn: false
  }
}

  render() {

return this.state.isLoggedIn && <div>Welcome Jhon</div>

// return (
//     this.state.isLoggedIn ?
//     (<div>Welcome Jhon</div>):
//     (<div>Welcome Guest</div>)
// )
    // let message
    // if (this.state.isLoggedIn) {
    //     message = <div>Welcome jhon</div>
    // }
    // else{
    //     message = <div>Welcome guest</div>
    // }
    // return <div>{message}</div>
    
    // if(this.state.isLoggedIn) {

    //     return(
    //         <div>
    //             Welcome Jhon
    //         </div>
    //     )
    // }else{
    //     return(
    //         <div>
    //             Welcome guest
    //         </div>
    //     )
    // }

  }
}

export default UserGreeting