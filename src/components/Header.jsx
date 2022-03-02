import React from 'react'
import { Link } from 'react-router-dom'
import style from '../styles/header.module.css'

const Header = () => {
  return (
      
    <div className={style.headerContainer}>
      <Link to='/explore'>
          <img src="/images/search.png"/>
      </Link>
      <div className={style.nav}>
        <Link to='/'>
            <img src="/images/invite.png"/>
        </Link>
        <Link to='/'>
            <img src="/images/calendar.png"/>
        </Link>
        <Link to='/'>
            <img src="/images/noti.png"/>
        </Link>
        <Link to='/'>
            <img src="/images/b1.png"/>
        </Link>
      </div>
    </div>
  )
}

export default Header
