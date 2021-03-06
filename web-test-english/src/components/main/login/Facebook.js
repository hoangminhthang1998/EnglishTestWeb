import React, { useState, Component } from 'react'
// import FacebookLogin from 'react-facebook-login';
import './Login.scss'
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props'

const Facebook = ({history}) => {
    const [id, setID] = useState('');
    const [name,setName] = useState('');
    const [email, setEmail] = useState('');
    const [picture, setPicture] = useState('');
    const [birthday, setBirthday] = useState('');
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const componentClicked = () => {
        
    }
    const responseFacebook = (response) => {
            setIsLoggedIn(true)
            setID(response.id)
            setName(response.name)
            setEmail(response.email)
            setBirthday(response.birthday)
            setPicture(response.picture.data.url)
            console.log(response);
            history.push("/user")
    }
    if (name){
        localStorage.setItem('username',id)
        localStorage.setItem('fullname',name)
        localStorage.setItem('email',email)
        localStorage.setItem('birthday', birthday)
        localStorage.setItem('picture',picture)
        localStorage.setItem('role', 'user')
        // localStorage.setItem('phonenumber',phonenumber)
        // localStorage.setItem('birthday',birthday)
        // localStorage.setItem('old',old)
        // localStorage.setItem('sex',sex)

    }
    // props.nameCallback(name);
    // props.userIDCallback(userID);
    // props.emailCallback(email);
    // props.pictureCallback(picture);
    // let fbContent;
        // if (isLoggedIn) {
        //     fbContent = (
        //         <div style={{
        //             width:'400px',
        //             margin: 'auto',
        //             background: '#f4f4f4',
        //             padding: '20px',
        //         }}>
        //              <img src={picture} alt={name}></img>
        //              <h2>Welcome {name}</h2>
        //         </div>

        //     )
        // } else {
        //     fbContent = (<FacebookLogin
        //         appId="943769246365562"
        //         autoLoad={true}
        //         fields="name,email,picture"
        //         onClick={componentClicked}
        //         callback={responseFacebook} />)
        // }
    return (
        // <FacebookLogin
        //         appId="943769246365562"
        //         autoLoad={false}
        //         fields="name,email,picture"
        //         onClick={componentClicked}
        //         callback={responseFacebook}
        //         icon="fa-facebook"
        //         textButton={<span>Đăng nhập bằng Facebook</span>} 
        //         />
        <FacebookLogin
            appId="943769246365562"
            autoLoad
            fields="id,name,email,picture"
            callback={responseFacebook}
            render={renderProps => (
                <div className="login__box__form__detail__facebook">
                    <button onClick={renderProps.onClick}>Xác nhận đăng nhập</button>
                </div>
            )}
        />
        // <div>
        //     {fbContent}
        // </div>
    )
}
export default Facebook;

// export default class Facebook extends Component {
//     state = {
//         isLoggedIn: false,
//         userID: '',
//         name: '',
//         email: '',
//         picture: '',
//     }
//     componentClicked = () => { }
//     responseFacebook = (response) => {
//         this.setState({
//             isLoggedIn: true,
//             userID: response.userID,
//             name: response.name,
//             email: response.email,
//             picture: response.picture.data.url

//         })
//     }
//     render() {
//         // let fbContent;
//         //     fbContent = (<FacebookLogin
//         //         appId="943769246365562"
//         //         autoLoad={true}
//         //         fields="name,email,picture"
//         //         onClick={this.componentClicked}
//         //         callback={this.responseFacebook} />)
//         return (
//             <div className="login__box__form__detail__facebook">
//                 {/* {fbContent} */}
//                 <FacebookLogin
//                 appId="943769246365562"
//                 autoLoad={true}
//                 fields="name,email,picture"
//                 onClick={this.componentClicked}
//                 callback={this.responseFacebook} />
//             </div>
//         )
//     }
// }