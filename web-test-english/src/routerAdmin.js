import React from 'react'
import Homepage from './admin/homepage/Homepage'
import TakeTest from './components/main/takeTest/TakeTest'
import 'antd/dist/antd.css';
import { BrowserRouter as Router , Route , Switch  } from 'react-router-dom'
import QuestionManage from "./admin/questionManage/QuestionManage"
import Header from './components/header/index'


const RouterAdmin = () => {
  return (
    <div  style={{height: '100%'}}>
        <Router>
            <Homepage>
            {/* <Header/> */}
                <Switch>
                    {/* <Route path='/admin' render={()=>{
                        return localStorage.getItem("role") === "admin" ? <Homepage/> : <Redirect to='/admin/login'/>
                        }} exact >
                    </Route> */}
                    <Route path='/questionmanage' component={QuestionManage}></Route>
                </Switch>
            </Homepage>
        </Router>
    </div>
  );
}

export default RouterAdmin;