import React from 'react'
import style from '../styles/Welcome.module.css'
import cl from '../styles/PhoneConf.module.css'

import { render } from "react-dom";
import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'
const Welcome = () => {
  return (
    <div className={style.WelcomeContainer}>
      <h1>Welcome!</h1>
      <div className={style.WelcomeInfo}>
        <p>
            We're working hard to get Clubhouse ready for everyone! While we grap up the finishing touches, we're adding people gradually to make sure nothing breaks
        </p>
        <p>
            Anyone can join with an invite from an exisiting user - or reserve your username and we'll text you if tou have a friend on the app who can let you in. We are so grateful you're here and can't wait you join! 
        </p>
        <p>Paul,Rohan & the Clubhouse team </p>
      </div>
      <div className={style.btnContainer}>
          <Link to="phone" className={cl.nextBtn}>Get your username</Link>
          <Link to='/'>Have an invite text? Sign in</Link>
      </div>
    </div>
  )
}

export default Welcome
