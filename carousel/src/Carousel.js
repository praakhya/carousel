import { useContext, useEffect } from "react";
import ArrowLeft from "./ArrowLeft";
import ArrowRight from "./ArrowRight";
import "./Carousel.css";
import { scrollContext, ScrollConsumer, ScrollProvider } from './scrollContext';

function Carousel(props)
{
    var scrollDetails = useContext(scrollContext);
    var count = props.countVisible;
    var children = props.children;
    //var first = scrollDetails.first;
    //var last = first+scrollDetails.count;
    var currentSelect=[]
    for (var i=scrollDetails.first; i<scrollDetails.first + props.countVisible; ++i)
    {
        currentSelect.push(children[i]);
    }
    useEffect(() => {

        scrollDetails.setSize(props.children.length);
    })
    return (
        <div className={props.containerClass}>
            {
                [<ArrowLeft class="arrow left" countVisible={props.countVisible}>&lt;</ArrowLeft>,
                <div className="itemContainer">
                    {props.children.slice(scrollDetails.first, scrollDetails.first + props.countVisible)}
                </div>,
                <ArrowRight class="arrow right" countVisible={props.countVisible}>&gt;</ArrowRight>]
            }
        </div>
    )
}
export default Carousel;