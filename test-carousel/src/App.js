import logo from './logo.svg';
import './App.css';
import {Carousel, ScrollProvider} from 'customizable-horizontal-carousel';
import MyComp from './MyComp';
function App() {
  var testArr = [
    <MyComp img="./images/dining.jpg" text="This is the first picture"></MyComp>,
    <MyComp img="./images/lights.jpg" text="This is the second picture"></MyComp>,
    <MyComp img="./images/flowers.jpg" text="This is the third picture"></MyComp>,
    <MyComp img="./images/dining1.jpg" text="This is the fourth picture"></MyComp>,
    <MyComp img="./images/lights1.jpg" text="This is the fifth picture"></MyComp>,
    <MyComp img="./images/flowers1.jpg" text="This is the sizth picture"></MyComp>
  ]
  return (
    <div className="App">
      <Carousel 
        containerClass="container" 
        itemClass="item"
        itemContainerClass="itemContainer"
        arrowContainerClass="arrows"
        countVisible={3} 
        shiftAmount={1}>
          {testArr}
      </Carousel>
      <p>Some text after carousel</p>
      <p>lorem</p>
      <p>lorem</p>
      <p>lorem</p>
      <p>lorem</p>
      <p>lorem</p>
      <p>lorem</p>
      <p>lorem</p>
      <p>lorem</p>
      <p>lorem</p>
      <p>lorem</p>
      
    </div>
  );
}

export default App;
