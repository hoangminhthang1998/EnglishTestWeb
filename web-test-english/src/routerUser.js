import React from 'react'
import Header from './components/header/index'
import TakeTest from './components/main/takeTest/TakeTest'
import Footer from './components/footer/Footer'
import 'antd/dist/antd.css';
import { Provider } from 'react-redux'
import store from './redux/store'
import CreateAccount from './components/main/createAccount/CreateAccount'
import Member from './components/main/member/Member'
import Facebook from './components/main/login/Facebook'
import Homepage from './components/main/homepage/Homepage'
import { BrowserRouter as Router , Route , Switch  } from 'react-router-dom'

const RouterUser = () => {
  return (
    <div>
      <Provider store= {store}>
          <Router>
            <Header/>
            <Switch>
              <Route path='/' component={Homepage} exact></Route>
              <Route path='/taketest' component={ TakeTest } ></Route>
              <Route path='/statistical'></Route>
              <Route path='/setting'></Route>
              <Route path='/user' component={ Member }></Route>
              <Route path='/loginfb' component={ Facebook }></Route>
              {/* <Route path='/user1' component={ InfoMember }></Route> */}
              <Route path='/createaccount' component = { CreateAccount }></Route>
              <Route path='/:somestring'></Route>
            </Switch>
            <Footer/>
          </Router>
      </Provider>
    </div>
  );
}

export default RouterUser;