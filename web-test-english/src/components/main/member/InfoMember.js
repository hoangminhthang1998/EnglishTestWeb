import React, { useEffect, useState } from 'react'
import './InfoMember.scss'


const InfoMember = (props) => {
    // const [member, setMember] = useState('');
    // const fetchAccountApi = async () => {
    //     const response = await questionsApi.fetchAccountApi()
    //     setMember(response)
    //     console.log('hi' + member)
    //   }
    // useEffect(() => {
    //     fetchAccountApi()
    // }, [])
    const onHandleLogOut = () =>{
        props.onHandleLogOut()
    }
    // var role = localStorage.getItem('role')
    var fullname = localStorage.getItem('fullname')
    var email = localStorage.getItem('email')
    var phonenumber = localStorage.getItem('phonenumber')
    var birthday = localStorage.getItem('birthday')
    var old = localStorage.getItem('old')
    var sex1 = localStorage.getItem('sex')
    var avt = localStorage.getItem('picture')
    const TEXT_SEX = {
        FEMALE : "Nữ",
        MALE : "Nam",
        OTHERS : "Khác",
    }
    const showSex = () =>{
        var result = TEXT_SEX.OTHERS;
        const sex = parseInt(sex1);
        switch (sex) {
            case 1:
                result = TEXT_SEX.FEMALE;
                break;
            case 0:
                result = TEXT_SEX.MALE;
                break;
            default:
                break;
        }
        return result;
    }
    return (
        <div className="member">
            <div className="member__left">
                <div className="member__left__box">
                    <div className="member__left__box__info">
                        <h2>Thông tin thành viên</h2>
                        <div className="member__left__box__info__list">
                            <div className="member__left__box__info__list__avatar">
                                <img src={avt} alt={fullname}></img>
                            </div>
                            <div className="member__left__box__info__list__item">
                                <ul>
                                    <li>Tài khoản: {props.username} {' ('}{fullname}{')'}</li>
                                    <li>Tuổi: {old}</li>
                                    <li>Giới tính: {showSex()}</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="member__left__info">
                    <table className="member__left__info__table">
                        <tbody>
                            <tr>
                                <td>Họ tên</td>
                                <td>{fullname}</td>
                            </tr>
                            <tr>
                                <td>Ngày tháng năm sinh</td>
                                <td>{birthday}</td>
                            </tr>
                            <tr>
                                <td>Giới tính</td>
                                <td>{showSex()}</td>
                            </tr>
                            <tr>
                                <td>Email</td>
                                <td>{email}</td>
                            </tr><tr>
                                <td>Số điện thoại</td>
                                <td>{phonenumber}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div className="member__right">
                <div className="member__right__item">
                    <h2>Thành viên</h2>
                    <div className="member__right__item__logout">
                        <button onClick={onHandleLogOut}>Đăng xuất</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default InfoMember;
