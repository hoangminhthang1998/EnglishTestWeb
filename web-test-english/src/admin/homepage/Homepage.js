import React, { useState } from 'react';
import { Drawer, Button } from 'antd';
import ListNavbar from '../listvarbar/ListVarBar'
import './Homepage.scss'
import {useHistory} from 'react-router-dom'
import { Link } from 'react-router-dom';


export default function Homepage({children}) {
  let history = useHistory()
  const [drawerWidth,setDrawerWidth] = useState('300') 
  const [visible, setVisible] = useState(true);
  const [open, setOpen] = useState('none');
  const showDrawer = () => {
    setVisible(true);
    setOpen('none')
    setDrawerWidth(300)
  };
  const onClose = () => {
    setVisible(false);
    setOpen('flex')
    setDrawerWidth(0)
  };
  console.log(history)
  const logOut = () =>{
    return (
        localStorage.removeItem('role'),
        localStorage.removeItem('username'),
        localStorage.removeItem('email')
        // console.log(history),
        // history.replace("/admin")
    )
  }
  var username = localStorage.getItem('username')
  return (
    <>
      <div className="topnav" 
        style={{
                  width: `calc(100% - ${drawerWidth}px)`, 
                  marginLeft: `${drawerWidth}px`, 
                  height: "55px"
              }}
      >
        <a onClick={showDrawer} style={{display: `${open}`}}>
          ||||
        </a>
        <a>Quản lý thi tiếng anh online</a>
        <div style={{marginLeft: 'auto', marginTop: '15px'}}>
          <a>{username}</a>
          <a href='./admin' onClick={logOut}>Thoát</a>
        </div>
        
      </div>
      <Drawer
        // width={`${drawerWidth}px`}
        style = {{width: `${drawerWidth}px`, padding: '0px'}}
        title="Basic Drawer"
        placement="left"
        closable={true}
        mask={false}
        onClose={onClose}
        // closeIcon
        visible={visible}
      >
        <ListNavbar/>
      </Drawer>
      <div  
        className="children"  
        style={{
          width: `calc(100% - ${drawerWidth}px)`, 
          marginLeft: `${drawerWidth}px`,
          height: '100%',
          backgroundColor: '#FAFAFA'
        }} 
      >
          {children}
      </div>
    </>
  );
};