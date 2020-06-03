import React, {Component} from 'react'

class Greetings extends Component{
  constructor(props){
    super(props)
    this.state = {
      user: this.props.name || "User"
    }
  }
  render(){
    return(
      <>
        Hi {this.state.user}, Welcome to our Website!
      </>
    )
  }
}

export default Greetings