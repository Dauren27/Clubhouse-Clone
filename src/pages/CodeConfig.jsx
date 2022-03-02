import React from 'react'
import { Link } from 'react-router-dom'
import style from '../styles/PhoneConf.module.css'

const CodeConfig = () => {
  return (
    <div className={style.phoneContainer}>
        <Link to='/phone'><img className={style.backBtn}src="https://cdn-icons-png.flaticon.com/512/61/61022.png" alt="" /></Link>
      <h1 style={{textAlign:'center'}}>Enter the code we just textted you</h1>
      <input type="text"
      style={{
          border:'none',
          textAlign: 'center'
      }}/>
      <p>Didn't receive it?
          <span> Tab to resend.</span>
      </p>
      <Link to='/allow_notification' className={style.nextBtn}>
          Next
      </Link>
    </div>
  )
}

export default CodeConfig
