import React from 'react'
import style from '../styles/PhoneConf.module.css'
import { Link } from 'react-router-dom'

const AllowNotification = () => {
  return (
    <div className={style.phoneContainer}>
        <div style={{textAlign:'center'}}>
            <h1 className='mb-3'>Last, important step!</h1>
            <h1 className='mb-3'>Enable notifications to know when people are talking</h1>
            <div className={style.notificationContainer} >
                <div className='p-3'>
                    <h3>"Clubhouse" Would Like to Send You Notifications</h3>
                    <p>Notifications may include alerts, sounds, and icon badges</p>
                </div>
                <div className={style.actionBtn}>
                    <Link to='/'>Don't Allow</Link>
                    <Link to='/home'>Allow</Link>
                </div>
                

            </div>
        </div>
      
    </div>
  )
}

export default AllowNotification
