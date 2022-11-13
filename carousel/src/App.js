import logo from './logo.svg';
import './App.css';
import Carousel from './Carousel';
import "./Carousel.css";
import { scrollContext, ScrollConsumer, ScrollProvider } from './scrollContext';

function App() {

  return (
    <div className="App">
      <ScrollProvider value={{first:0, count:3}}>
        <Carousel containerClass="container" countVisible={3}>
          {[
            <div className='item'>1</div>,
            <div className='item'>2</div>,
            <div className='item'>3</div>,
            <div className='item'>4</div>,
            <div className='item'>5</div>,
            <div className='item'>6</div>,
            <div className='item'>7</div>,
            <div className='item'>8</div>,
            <div className='item'>9</div>,
            <div className='item'>10</div>,
            <div className='item'>11</div>,
            <div className='item'>12</div>,
            <div className='item'>13</div>,
            <div className='item'>14</div>,
            <div className='item'>15</div>,
            <div className='item'>16</div>,
            <div className='item'>17</div>,
            <div className='item'>18</div>,
            <div className='item'>19</div>,
            <div className='item'>20</div>,
            <div className='item'>21</div>,
            <div className='item'>22</div>,
            <div className='item'>23</div>,
            <div className='item'>24</div>
          ]}
        </Carousel>
      </ScrollProvider>
    </div>
  );
}

export default App;
