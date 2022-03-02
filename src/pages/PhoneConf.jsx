import React, { useState } from 'react'
import PhoneInput from 'react-phone-number-input'
import { Link } from 'react-router-dom'
import style from '../styles/PhoneConf.module.css'
const PhoneConf = () => {
    const [value,setValue]=useState()
  return (
    <div className={style.phoneContainer}>
        <Link to='/'><img className={style.backBtn}src="https://cdn-icons-png.flaticon.com/512/61/61022.png" alt="" /></Link>
      <h1>Enter your phone</h1>
      <PhoneInput international defaultCountry="KG" value={value} onChange={setValue}/>
      <p>By entering your number, you're agreeing to our
          <span> Terms of Service and Privacy Policy. </span> Thanls!
      </p>
      <Link to='/code' className={style.nextBtn}>Next</Link>
    </div>
  )
}

export default PhoneConf