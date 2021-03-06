import React from 'react'
import './App.scss'
import 'antd/dist/antd.css';
import { Provider } from 'react-redux'
import store from './redux/store'
import { BrowserRouter as Router , Route , Switch  } from 'react-router-dom'
import RouterUser from './routerUser'
import RouterAdmin from './routerAdmin'
import Login from './admin/login/Login'
import { Redirect } from "react-router-dom"



const App = () => {
  return (
      <Provider store= {store}>
          <Router>
            <Route path='/admin/login' component={Login}></Route>
            <Route path='/admin'render={()=>{
               return localStorage.getItem("role") === "admin" ? <RouterAdmin/> : <Redirect to='/admin/login'/>
                    }} >
            </Route>
            <Route path='/' component={ RouterUser } exact></Route>
          </Router>
      </Provider>
  );
}

export default App;
// render={()=>{
//   return localStorage.getItem("role") === "admin" ? <Admin/> : <Redirect to='/'/>
// }}
// render={()=>{
//   return localStorage.getItem("role") === null ? <Login/> : <Redirect to='/admin'/>
// }}
