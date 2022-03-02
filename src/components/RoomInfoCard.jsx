import React, { useEffect, useState } from 'react'
import data from '../data/roomCard.json'
import style from '../styles/roomInfo.module.css'
import  {BsChatDots,BsChatDotsFill,BsFillPersonFill} from 'react-icons/bs'
const RoomInfoCard = () => {
    //react-icons 
  return (
    <div style={{marginTop:"15px"}}>
      {
          data.map(item=>(
            <div className={style.container}>
                <h6>{item.title}</h6>
                <h2>{item.sub_title}</h2>
                <div className={style.content}>
                    <div className={style.images}>
                        <img src="/images/user-img.jpg" alt="" />
                        <img src="/images/user-img2.jpg" alt="" />
                    </div>
                    <div className={style.names}>
                        {item.members.map(person=>(
                            <p>{person.first_name} {person.last_name} <BsChatDots/></p>

                        ))}
                        <p>
                            <span>1.8</span>
                            <BsFillPersonFill/>
                            <span style={{marginLeft:"10px"}}>5</span><BsChatDotsFill/>

                        </p>
                    </div>
                </div>
            </div>
          ))
      }
    </div>
  )
}

export default RoomInfoCard
