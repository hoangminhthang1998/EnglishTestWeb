import React, { useEffect, useState } from 'react'
import questionsApi from '../../../api/questionApi'
import Login from '../login/Login'
import InfoMember from './InfoMember'
import * as Str from '../../function/notification/String'
import { showSuccessNotification , showWarnNotification } from '../../function/notification/ShowNotification'
import axios from 'axios'
import Admin from '../../../admin/homepage/Homepage'
import { Redirect } from "react-router-dom"


const Member = ({history}) => {
    const [member, setMember] = useState('');
    const [valueUsername, setValueUsername] = useState('')
    const [Username, setUsername] = useState({text: ''});
    const [Password, setPassword] = useState({text: ''});
    const [RePassword, setRePassword] = useState({text: ''});
    const [stt, setStt] = useState('');
    const [sttForget, setSttForget] = useState('');
    const [DisplayForm, setDisplayForm] = useState(false);
    const [fullname, setFullname] = useState('');
    const [Email, setEmail] = useState('');
    const [valueEmail, setValueEmail] = ('')
    // const [Isuccess, setIsuccess] = ([])
    const fetchAccountApi = async () => {
        const response = await questionsApi.fetchAccountApi()
        setMember(response)
        console.log(response)
      }
    useEffect(() => {
        fetchAccountApi()
    }, [])
    const onCreateAccount = () =>{
        history.push("/createaccount")
    }
    // || email === member[i].email 
    // || (Email === member[i].email && Password  === member[i].password) 
    // && member[i].role === "user" 
    const onSignIn = () =>{
        localStorage.removeItem('display');
        for(let i= 0; i< member.length ; i++){
            if(Username.text === member[i].username && Password.text  === member[i].password && member[i].role === "user"  || Username.text === member[i].email && Password.text  === member[i].password && member[i].role === "user"  ){           
                return(
                setValueUsername(Username.text),
                setStt(i))
            }
        }
        if (stt != ''){
            return history.push("/user")
        }
        else{
            return alert("Tài khoản hoặc mật khẩu sai");
            // return showWarnNotification(Str.TEXT_MESSAGE_LOGIN_FAIL);
        }
            
        
    }
    // || valueEmail != '' 
    // valueUsername !=='' ||  
    if (valueUsername !=''){
        // var fullname = member[id].fullname;
        localStorage.setItem('role',member[stt].role)
        localStorage.setItem('username',member[stt].username)
        localStorage.setItem('fullname',member[stt].fullname)
        localStorage.setItem('email',member[stt].email)
        localStorage.setItem('phonenumber',member[stt].phonenumber)
        localStorage.setItem('birthday',member[stt].birthday)
        localStorage.setItem('old',member[stt].old)
        localStorage.setItem('sex',member[stt].sex)

        // localStorage.setItem('fullname',fullname)
    }
    const onHandleUsername = (valueUsername) => {
        setUsername(valueUsername);
        for(let j= 0; j< member.length ; j++){
            if(Username.text === member[j].username || Username.text === member[j].email){ 
                return( setSttForget(j))
            }
        }
    }
    const onHandlePassword = (valuePassword) => {
        setPassword(valuePassword);
    }
    const onHandleRePassword = (valueRePassword) => {
        setRePassword(valueRePassword);
    }
    // const displayFormCallback = (DisplayForm) => {
    //     setDisplayForm(DisplayForm);
    // }
    const onHandleLogOut = () =>{
        localStorage.removeItem('role');
        localStorage.removeItem('username');
        localStorage.removeItem('fullname');
        localStorage.removeItem('email');
        localStorage.removeItem('phonenumber');
        localStorage.removeItem('birthday');
        localStorage.removeItem('old');
        localStorage.removeItem('sex');
        localStorage.removeItem('picture');
        history.push("/taketest")
    }
    
    const onHandleForget = (e) => {
        if (sttForget != ''){
            const customerForget ={
                role: 'user',
                username: member[sttForget].username,
                password: RePassword.text,
                email: member[sttForget].email,
                fullname: member[sttForget].fullname,
                sex: member[sttForget].sex,
                birthday: member[sttForget].birthday,
                phonenumber: member[sttForget].phonenumber,
                old: member[sttForget].old,
            }
            if (Username.text === member[sttForget].username || Username.text === member[sttForget].email){
                if ( Password.text === RePassword.text){
                    return (axios.put('http://localhost:3004/account/' + member[sttForget].id,customerForget)
                        .then(function (response) {
                            return( 
                                    // console.log('đổi pass thành công:' + RePassword.text),
                                    fetchAccountApi(),
                                    history.push("/user"),
                                    setDisplayForm(true),
                                    alert('Thành công')
                                    )
                            
                        })
                        .catch(function (error) {
                            console.log(error)
                        })
                    )
                }
                else {
                        return(setDisplayForm(false), alert('Mật khẩu không khớp'))
                }
            }
            else{
                return(setDisplayForm(false), alert('Nhập lại tên đăng nhập hoặc email'))
            }
        }
        else{
                return(setDisplayForm(false), alert('Nhập lại tên đăng nhập hoặc email'))
        }
    }
    const showForm = () => {
        var username1 = localStorage.getItem('username')
        var role1 = localStorage.getItem('role')
        var display = DisplayForm
        console.log(display);
        if(username1 !== '' && role1 === "user" || username1 !== null && role1 === "user" ){
            
            return <InfoMember  username={username1} onHandleLogOut={onHandleLogOut}/>
                    
        }
        // else if(username1 !== '' && role1 === "user" || username1 !== null && role1 === "admin" ){
            
        //     return <Redirect to='/admin'/>
        //     // return <Admin render={()=>{
        //     //     return localStorage.getItem("role") === "admin" ? <Redirect to='/admin'/> : <Login/> 
        //     //     }}
        //     //   />
                    
        // }
        else{
            return <Login   
                        onSignIn={onSignIn} 
                        onCreateAccount={onCreateAccount} 
                        usernameCallback={onHandleUsername}
                        passwordCallback={onHandlePassword}
                        rePasswordCallback={onHandleRePassword}
                        onHandleForget={onHandleForget}
                        displayForm={display}
                        // displayFormCallback={displayFormCallback}
                    />
        }
    }
    return (
        <div>
            {showForm()}
        </div>
    );
}
export default Member;

//     return ( 
            //         console.log("ok"),
            //         setValueUsername(Username),
            //         setID(i),
            //         // console.log(member[i].fullname),
            //         // console.log(valueUsername),
            //         // console.log(id),
            //         alert("Đăng nhập thành công"),
            //         history.push("/user")
            //     )
            // } else{
            //     // showWarnNotification(Str.TEXT_MESSAGE_LOGIN_FAIL);
            //     alert("Tài khoản hoặc mật khẩu sai");
            //     console.log('false');
            // }