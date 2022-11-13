import { scrollContext, ScrollConsumer, ScrollProvider } from './scrollContext';
import {useContext} from 'react'
import Button from '@mui/material/Button';

function ArrowRight(props)
{
    var scrollDetails = useContext(scrollContext);
    function goRight()
    {
        console.log("Called goRight", scrollDetails.first)
        if (scrollDetails.first + props.countVisible < scrollDetails.size)
        {
            scrollDetails.setFirst(scrollDetails.first+1); 
        }
        }
        return <Button className={props.class} onClick={() =>goRight()}>{props.children}</Button>
    }
export default ArrowRight;