import React from 'react'
import style from '../styles/dailyInfo.module.css'
import data from '../data/dailyCard.json'
const DailyInfo = () => {
  return (
      
    <div className={style.cardInfo}>
      {
          data.map((item)=>(
              <div>
                  <span>{item.time}</span>
                  <div>
                      <span>{item.title}</span>
                      <p>{item.description}</p>
                      
                  </div>
              </div>
              
          ))
      }
    </div>
  )
}

export default DailyInfo
