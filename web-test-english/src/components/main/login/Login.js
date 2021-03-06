import React, {useState, useEffect} from 'react'
import './Login.scss'
import questionsApi from '../../../api/questionApi'
import { Link } from 'react-router-dom';
import Facebook from './Facebook'


// Login.propTypes = {
//     mem : PropTypes.object.isRequired,
//   }
  
function Login(props){
    const [DisplayForm, setDisplayForm] = useState(false);
    const [title, setTitle] = useState('Thành viên đăng nhập')
    const [valueUsername, setValueUsername] = useState({text: ''});
    const [valuePassword, setValuePassword] = useState({text: ''});
    const [valueRePassword, setReValuePassword] = useState({text: ''});
    const onHandleUsername = (e) => {
        setValueUsername({text:e.target.value});
    }
    props.usernameCallback(valueUsername);
    const onHandlePassword = (e)=> {
        setValuePassword({text:e.target.value});
    }
    props.passwordCallback(valuePassword);
    const onHandleRePassword = (e) =>{
        setReValuePassword({...valueRePassword,text:e.target.value});
    }
    props.rePasswordCallback(valueRePassword);
    const onSignIn = () => {
        props.onSignIn();
    }
    const onCreateAccount = () => {
        props.onCreateAccount();
    }
    const reset = () =>{
        setValueUsername({text:''})
        setValuePassword({text: ''})
        setReValuePassword({text: ''})
    }
    const onForget = () =>{
        setTitle('Tạo lại mật khẩu')
        setDisplayForm(true)
        reset()
        
    }
    const onHandleCancel = () => {
        setDisplayForm(false)
        setTitle('Thành viên đăng nhập')
        reset()
    }
    const onHandleForget = () => {
        setTitle('Tạo lại mật khẩu')
        reset()
        props.onHandleForget();
        var display = props.displayForm
        // console.log(props.displayForm);
        setDisplayForm(display)
        
    }
    
    // props.displayFormCallback(DisplayForm);
    const showFormForget = DisplayForm ? (  <div className="login__box__form__detail__userpass">
                                                <i class="fas fa-key-skeleton" style={{padding: '5px 9px'}}></i>
                                                <input  className="password" 
                                                        placeholder="Nhập lại mật khẩu"
                                                        value ={valueRePassword.text} 
                                                        onChange={onHandleRePassword}/>
                                            </div>) : '';
    const showFormLog = DisplayForm ? (     <div><button className="login__box__form__detail__action--save" 
                                                    onClick = {onHandleForget}>Tạo</button>
                                                <button className="login__box__form__detail__action--save" 
                                                    onClick = {onHandleCancel}>Hủy</button>
                                            </div>) : <div><button className="login__box__form__detail__action--save" 
                                                    onClick = {onSignIn}>Đăng nhập</button>
                                                <button className="login__box__form__detail__action--start" 
                                                    onClick = {onCreateAccount}>Đăng kí</button>
                                                <span className="login__box__form__detail__action--forget" onClick = {onForget}>Quên mật khẩu</span>
                                            </div>;
    return (
        <div className="login">
            <div className="login__box">
                <div className="login__box__form">
                    <h2>{title}</h2>
                    <div className="login__box__form__title">Hãy đăng nhập thành viên để trải nghiệm đầy đủ các tiện ích trên site</div>
                    <div className="login__box__form__detail">
                        <div className="login__box__form__detail__userpass">
                            <i class="fas fa-user" style={{padding: '5px 10px'}}></i>
                            <input  className="username"  
                                    type="text"
                                    placeholder='Nhập tên đăng nhập hoặc email'
                                    // name = "valueUsername"
                                    value ={valueUsername.text} 
                                    onChange={onHandleUsername}></input>
                        </div>
                        <div className="login__box__form__detail__userpass">
                            <i class="fas fa-key-skeleton" style={{padding: '5px 9px'}}></i>
                            <input  className="password" 
                                    type="text"
                                    placeholder="Nhập mật khẩu"
                                    // name = "valuePassword"
                                    value ={valuePassword.text}
                                    onChange={onHandlePassword}></input>
                        </div>
                        {showFormForget}
                        <div className="login__box__form__detail__action">
                            {/* <button className="login__box__form__detail__action--save" onClick = {onSignIn}>Đăng nhập</button>
                            <button className="login__box__form__detail__action--start" onClick = {onCreateAccount}>Đăng kí</button> */}
                            {showFormLog}
                            
                        </div>
                        <Link to="/loginfb">Đăng nhập facebook</Link>
                            {/* <Facebook/> */}
                        
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Login;

 // account.forEach(item => {
        //     if(valueUsername === item.username  && valuePassword  === item.password){
        //         return console.log("ok")
        //     } else{
        //         console.log('false');
        //     }
        // });
        // for(let i= 0; i< account.length ; i++){
        //     if(valueUsername === account[i].username  && valuePassword  === account[i].password){
        //             return ( 
        //                 console.log("ok"),
        //                 history.push("/user")
        //             )
        //         } else{
        //             console.log('false');
        //         }
        //     }
        
