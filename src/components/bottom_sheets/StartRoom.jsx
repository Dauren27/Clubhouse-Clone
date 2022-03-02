import React, { useState } from 'react'
import style from'../../styles/bottomsheet.module.css'
import { FcGlobe } from 'react-icons/fc'
const StartRoom = (props) => {
    let [room,setRoom]=useState('open')
  return (
    <div>
        <div className={style.switch_Line}>

        </div>
        <div style={{textAlign:'right'}}>
            <button className={style.addTopicBtn}>
                + Add a topic
            </button>
        </div>
        <div className={style.selectRoom}>
            <button className={room=='open' ? style.active:""}
                onClick={()=>setRoom("open")}>
                    <div>
                        <FcGlobe/>
                    </div>
                    Open
            </button>
            <button className={room=='social'?style.active:""}
            onClick={()=>setRoom('social')}>
                <div>
                    <FcGlobe/>
                </div>
                Social
            </button>
            <button className={room=='closed'?style.active:""}
            onClick={()=>setRoom('closed')}>
                <div>
                    <FcGlobe/>
                </div>
                Closed
            </button>
        </div>
        <p>Start a room <span>{room=='closed'?'for people i choose':
        room=='social'?'with people i follow':
        'open to everyone'}</span></p>
        <div className='text-center'>
            <button className={style.letGoBtn}
            onClick={()=>{
                props.setSheetCreateRoom(true);
                props.setSheetVisible(true)
            }}>
                Let's go
            </button>
        </div>
    </div>
  )
}

export default StartRoom
