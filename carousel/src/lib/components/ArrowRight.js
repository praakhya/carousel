import { scrollContext, ScrollConsumer, ScrollProvider } from './scrollContext';
import {useContext, useState} from 'react'
import Button from '@mui/material/Button';
import React from "react";


function ArrowRight(props)
{
    var showBtnStyle = props.showStyle;
    var hideBtnStyle = props.hideStyle;
    if ((showBtnStyle==undefined)||(hideBtnStyle==undefined))
    {
        hideBtnStyle = {
            color: "transparent",
            backgroundColor: "transparent",
            zIndex: "50"
        }
        showBtnStyle = {
            color: "antiquewhite",
            backgroundColor: "black",
            zIndex: "50"
        }

    }
    const [btnStyle, setBtnStyle] = useState(hideBtnStyle)
    function showButton()
    {
        setBtnStyle(
            showBtnStyle
        )
    }
    function hideButton()
    {
        setBtnStyle(
            hideBtnStyle
        )
    }
    var scrollDetails = useContext(scrollContext);
    function goRight()
    {
        if (scrollDetails.first + props.countVisible < scrollDetails.size)
        {
            scrollDetails.setFirst(scrollDetails.first+props.shiftAmount); 
        }
    }
    console.log("btnStyle: ",btnStyle);
    return <Button style={btnStyle} className="right" onMouseEnter={showButton} onMouseLeave={hideButton} onClick={() =>goRight()}>{props.children}</Button>
}
export default ArrowRight;