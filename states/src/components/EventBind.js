import React, { Component } from 'react'

class EventBind extends Component {
    constructor(props) {

        super(props)

        this.state = {
        
            message:'hello'

        }
    
        // this.clickHandler=this.clickHandler.bind(this)
    
    }

        // clickHandler(){

            

        //     this.setState({message:'goodbye'})

        // }

        clickHandler=()=>{
            this.setState({message:'goodbye'})
        }

  render() {
    return (
      <div>
        <div>{this.state.message}</div>
        {/* <button onClick={this.clickHandler.bind(this)}>Clickk</button> */}

        {/* <button onClick={() => this.clickHandler()}>Clickk</button> */}

       <button onClick={this.clickHandler()}>Clickk</button>

      </div>
    )
  }
}

export default EventBind


