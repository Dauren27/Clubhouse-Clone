import React from 'react'
import style from '../styles/explore.module.css'
import data from '../data/Explore.json'
import { DownOutlined, FireOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom'

const Explore = () => {
    const {people,conversation}=data;
  return (
    <div className={style.exploreContainer}>
      <div>
        <div className={style.exploreHeader}>
            <div className={style.exploreName}>
                <Link to='/home'>
                    <DownOutlined />
                </Link>
                <h2 className='text-center'>EXPLORE</h2>
            </div>
            <div className='text-center'>
                <div className={style.exploreInput}>
                    <img src="/images/search.png"/>
                    <input type="text" placeholder="Find People and Clubs"></input>
                </div>
            </div>
        </div>
        <div className={style.exploreContent}>
            <h6>PEOPLE TO FOLLOW</h6>
            <div className={style.explorePeople}>
                {people.map((item)=>(
                    <div className={style.exploreItem}>
                        <div style={{display:'flex',alignItems:'center'}}>
                            <img src="/images/user-img.jpg" alt="" />
                            <div>
                                <h5>{item.title}</h5>
                                <p>{item.description}</p>
                            </div>
                        </div>
                        <button>Follow</button>
                    </div>
                ))}
                
                <button className={style.showMore}>
                    Show more people<DownOutlined/>
                </button>
            </div>
            <h6>FIND CONVERSATION ABOUT...</h6>
            <div className={style.conversationContainer}>
                {
                    conversation.map((item)=>(
                        <div className={style.conversationCard}>
                            <h5>
                                <FireOutlined/>{item.title}
                            </h5>
                            <p>{item.discription}</p>
                        </div>
                    )
                )}
            </div>
        </div>
      </div>
    </div>
  )
}

export default Explore
