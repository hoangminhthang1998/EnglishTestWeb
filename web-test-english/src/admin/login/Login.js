import React, {useState, useEffect} from 'react'
import './Login.scss'
import questionsApi from '../../api/questionApi'
import { Link } from 'react-router-dom';


 
// Login.propTypes = {
//     mem : PropTypes.object.isRequired,
//   }
  
function Login({history}){
    const [member, setMember] = useState('');
    const [Username, setUsername] = useState({text: ''});
    const [Password, setPassword] = useState({text: ''});
    const fetchAccountApi = async () => {
        const response = await questionsApi.fetchAccountApi()
        setMember(response)
      }
    useEffect(() => {
        fetchAccountApi()
    }, [])
    const onHandleUsername = (e) => {
        setUsername({text:e.target.value});
    }
    const onHandlePassword = (e)=> {
        setPassword({text:e.target.value});
    }
    console.log(history);
    //  && member[i].role === "admin" 
    const onSignIn = () => {
        for(let i= 0; i< member.length ; i++){
            if(Username.text === member[i].username && Password.text  === member[i].password && member[i].role === "admin"  || Username.text === member[i].email && Password.text  === member[i].password && member[i].role === "admin"  ){           
                return(
                    localStorage.setItem('role',member[i].role),
                    localStorage.setItem('username',member[i].username),
                    localStorage.setItem('email',member[i].email), 
                    history.push("/admin"))
            }
            else{
                return alert("Tài khoản hoặc mật khẩu sai");
            }
        }
    }
    const showForm = () =>{
        if (localStorage.getItem('role') === "admin"){
            return history.push("/admin")
        }
        else{
            return(
                <div className="login">
                    <div className="login__box">
                        <div className="login__box__form">
                            <h2>Quản trị viên đăng nhập</h2>
                            <div className="login__box__form__detail">
                                <div className="login__box__form__detail__userpass">
                                    <i class="fas fa-user" style={{padding: '5px 10px'}}></i>
                                    <input  className="username"  
                                            type="text"
                                            placeholder='Nhập tên đăng nhập hoặc email'
                                            value ={Username.text} 
                                            onChange={onHandleUsername}></input>
                                </div>
                                <div className="login__box__form__detail__userpass">
                                    <i class="fas fa-key-skeleton" style={{padding: '5px 9px'}}></i>
                                    <input  className="password" 
                                            type="text"
                                            placeholder="Nhập mật khẩu"
                                            value ={Password.text}
                                            onChange={onHandlePassword}></input>
                                </div>
                                <div className="login__box__form__detail__action">
                                    <button className="login__box__form__detail__action--login" onClick = {onSignIn}>
                                        Đăng nhập
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )
        }
    }
    return (
        <>
        {showForm()}
        </>
    );
}
export default Login;
        
