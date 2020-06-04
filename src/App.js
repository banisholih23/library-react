import React, {Component} from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Login from './pages/Login'
import Register from './pages/Register'
import Details from './pages/Details'

// class App extends Component{
//   render(){
//     return(
//       <>
//         <Login />
//       </>
//     )
//   }
// }

function App() {
  return (
    <>
    
      <BrowserRouter>
        <Switch>
          <Route path="/login" exact component={Login}/>
          <Route path="/register" exact component={Register}/>
          <Route path="/details" exact component={Details}/>
        </Switch>
      </BrowserRouter>

    </>
  );
}

export default App
// export default Regist
// export default Detail