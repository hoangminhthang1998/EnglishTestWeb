import React from 'react';
import { Link } from 'react-router-dom';
import './ListVarBar.scss'
const listItem = [
  {
    title : "Quản lý câu hỏi",
    link : "/questionmanage",
  },
  {
    title : "Quản lý người dùng",
    link : "/member",
  },
  {
    title : "Thống kê",
    link : "/",
  },
  {
    title : "Hệ thống",
    link : "/setting",
  },
  {
    title : "Lời cảm ơn",
    link : "/thank",
  },
]

function ListNavbar({onHandleLink}) { 
  return (
    <div className='listvarbar'>
        { listItem.map((item, index) => (
            <Link  key={index} to={ item.link } onClick={ onHandleLink }>
                <span>{item.title}</span>
            </Link>
        ))}
    </div>
  );
}

export default ListNavbar;