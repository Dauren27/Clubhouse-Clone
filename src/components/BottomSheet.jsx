import React from 'react'
import SwipeableBottomSheet from 'react-swipeable-bottom-sheet';
import style from '../styles/bottomsheet.module.css'
import NewRoom from './bottom_sheets/NewRoom';
import StartRoom from './bottom_sheets/StartRoom';
const BottomSheet = (props) => {
  return (
    <SwipeableBottomSheet
        open={props.sheetVisible}
        onChange={()=>{
            props.setSheetVisible(!props.sheetVisible)
            props.setItemsVisible(true)
        }}
        fullScreen={props.sheetTitle=='room detail'?true:false}>
            <div className={style.BottomSheetContainer}
            style={{backgroundColor: props.sheetTitle=='profile'?'transparent':''}}>
                {props.sheetTitle=='new room'?(
                    <NewRoom
                    cardDetail={props.cardDetail}
                    setSheetVisible={(item)=>{
                        props.setSheetVisible(item)
                        props.setItemsVisible(true)
                    }}
                    />
                ):props.sheetTitle=='start room'?(
                    <StartRoom
                    setSheetCreateRoom={props.setSheetCreateRoom}
                    setSheetVisible={(item)=>{
                        props.setSheetVisible(item)
                        props.setItemsVisible(true)
                    }}
                    />
                ):(
                    ""
                )
                }
                
            </div>
        </SwipeableBottomSheet>
  )
}

export default BottomSheet
