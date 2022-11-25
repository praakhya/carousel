import { scrollContext, ScrollConsumer, ScrollProvider } from './scrollContext';
import {useContext, useEffect, useState} from 'react';
import Button from '@mui/material/Button';
import React from "react";

function ArrowLeft(props)
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
    
    
    var scrollDetails = useContext(scrollContext);
    function goLeft()
    {
        if (!(scrollDetails.first==0))
        {
            scrollDetails.setFirst(scrollDetails.first-props.shiftAmount); 
        }
    }
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
    return <Button style={btnStyle} className="left" onMouseEnter={showButton} onMouseLeave={hideButton} onClick={() =>goLeft()}>{props.children}</Button>
}
export default ArrowLeft;