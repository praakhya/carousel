import { urlencoded } from "express";
import { useContext, useEffect } from "react";
import ArrowLeft from "./ArrowLeft";
import ArrowRight from "./ArrowRight";
import "./Carousel.css";
import { scrollContext, ScrollConsumer, ScrollProvider } from './scrollContext';
function Carousel(props)
{
    if (props.children==undefined)
    {
        var children=[
        <div className={props.itemClass}>
            Please Provide Items
        </div>]
    }
    else
    {
        var children = props.children;
    }
    var scrollDetails = useContext(scrollContext);
    var count = props.countVisible;
    //var first = scrollDetails.first;
    //var last = first+scrollDetails.count;
    var currentSelect=[]
    for (var i=scrollDetails.first; i<scrollDetails.first + props.countVisible; ++i)
    {
        currentSelect.push(children[i]);
    }
    useEffect(() => {

        scrollDetails.setSize(children.length);
    })
    return (
        <div className={props.containerClass}>
            <div className={props.arrowContainerClass}>
                <ArrowLeft showStyle={props.arrowLShowStyle} arrowsAlwaysVisible={props.arrowsAlwaysVisible} hideStyle={props.arrowLHideStyle} countVisible={props.countVisible} shiftAmount={props.shiftAmount}>&lt;</ArrowLeft>
                <ArrowRight showStyle={props.arrowRShowStyle} arrowsAlwaysVisible={props.arrowsAlwaysVisible} hideStyle={props.arrowRHideStyle} countVisible={props.countVisible} shiftAmount={props.shiftAmount}>&gt;</ArrowRight>
            </div>
            <div className="itemContainer">
                {children.slice(scrollDetails.first, scrollDetails.first + props.countVisible)}
            </div>
        </div>
    )
}
export default Carousel;