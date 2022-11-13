import { scrollContext, ScrollConsumer, ScrollProvider } from './scrollContext';
import {useContext, useEffect} from 'react';
import Button from '@mui/material/Button';
function ArrowLeft(props)
{
    var scrollDetails = useContext(scrollContext);
    function goLeft()
    {
        console.log("Called goLeft", scrollDetails.first)
        if (!(scrollDetails.first==0))
        {
            scrollDetails.setFirst(scrollDetails.first-1); 
        }
    }
    return <Button className={props.class} onClick={() =>goLeft()}>{props.children}</Button>
}
export default ArrowLeft;