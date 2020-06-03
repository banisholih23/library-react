import React, {Component} from 'react'

import logo from '../assets/bookshelf.png'

class Register extends Component{
  constructor(props){
    super(props)
    this.state = {
      username: '',
      fullname: '',
      email: '',
      password: ''
    }
  }

  register = (e) => {
    e.preventDefault()

    console.log('username: ', this.state.email)
    console.log('fullname: ', this.state.email)
    console.log('email: ', this.state.email)
    console.log('password: ', this.state.password)
  }

  render(){
    return(
      <>
        <div className="register">
          <div className="cover">
            <div className="text">
              <div className="quote">
                Book is a Window to the World
              </div>
              <div className="watermark">
                Photo by Mark Pan4ratte on Unsplash
              </div>
            </div>
          </div>
          <div className="form">
            <div className="brand">
              <div className="logo"> 
                <img src={logo} alt="logo" />
              </div>
            </div>
            <div className="form-register">
              <div className="greetings">
                <div className="title">Register</div>
                <div className="subtitle">Welcome back, <br/> Please Login to Your Account</div>
                <form onSubmit={this.register} className="input">
                  <label class="username">
                    <div>User Name</div>
                    <input onChange={e => this.setState({username: e.target.value})} type="username" />
                  </label>
                  <label class="fullname">
                    <div>Full Name</div>
                    <input onChange={e => this.setState({fullname: e.target.value})} type="fullname" />
                  </label>
                  <label className="email">
                    <div>Email Address</div>
                    <input onChange={e => this.setState({email: e.target.value})} type="email" />
                  </label>
                  <label className="password">
                    <div>Password</div>
                    <input onChange={e => this.setState({password: e.target.value})} type="password" />
                  </label>
                  <div className="submit">
                    <button type="submit" className="login">Login</button>
                    <button type="submit" class="signup">SignUp</button>
                  </div>
                </form>
              </div>
            </div>
            <div className="tnc">
              <div className="agreement">By signing up, you agree to Book’s</div>
              <div className="link">
                <a href="#tnc">Terms and Conditions </a>
                <a>&</a>
                <a href="#p"> Privacy Policy</a>
              </div>
            </div>
          </div>
        </div>   
      </>
    )
  }
}

export default Register