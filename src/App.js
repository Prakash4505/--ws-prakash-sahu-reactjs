
import React, { useState } from "react";
import './App.css';
import red from './images/red.jpg'
import Bigred from './images/Bigred.jpg'
import yellow from './images/yellow.jpg'
import Bigyellow from './images/Bigyellow.jpg'
import black from './images/black.jpg'
import Bigblack from './images/Bigblack.jpg'
import orange from './images/orange.jpg'
import Bigorange from './images/Bigorange.jpg'
import Bigpink from './images/Bigpink.jpg' 
import pink from './images/pink.jpg' 
import BoltIcon from '@mui/icons-material/Bolt';
import ReactImageMagnify from 'react-image-magnify';

const ReadMore = ({ children }) => {
  const text = children;
  const [isReadMore, setIsReadMore] = useState(true);
  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };
  return (
    <p className="text">
      {isReadMore ? text.slice(0, 91) : text}
      <span onClick={toggleReadMore} className="read-or-hide">
        {isReadMore ? "...read more" : " show less"}
      </span>
    </p>
  );
};

function App() {

  return (
    <div className="App">
      <div className="wrapper">
        <h1>Which outfit shall i wear next?</h1>
        <ReadMore>My next concert berlin is totally sold out! You have now the chance to win 2 of those super rare concer. we are so excited to announce this!! </ReadMore>
      </div>
      <div className="card_box">
        <div className="card">
          <div className="card_top">
            <span>

              <ReactImageMagnify className="image" {...{
                smallImage: {
                  alt: 'RED dress zoom over hover',
                  isFluidWidth: true,
                  src: red
                },
                largeImage: {
                  src: Bigred,
                  width: 600,
                  height: 900
                }
              }} />
            </span>
            <span>RED DRESS</span>
          </div>
          <div className="card_bottom">
            <div className="progress">
              <div className="progress_left">
                <span><BoltIcon /></span>
                <span>181.35</span>
              </div>
              <div className="progress_right">
                33%
              </div>
            </div>
          </div>
        </div>

        <div className="card">
          <div className="card_top">
            <span>

              <ReactImageMagnify className="image" {...{
                smallImage: {
                  alt: 'yellow dress zoom over hover',
                  isFluidWidth: true,
                  src: yellow
                },
                largeImage: {
                  src: Bigyellow,
                  width: 600,
                  height: 900
                }
              }} />
            </span>
            <span>YELLOW DRESS</span>
          </div>
          <div className="card_bottom">
            <div className="progress">
              <div className="progress_left">
                <span><BoltIcon /></span>
                <span>181.35</span>
              </div>
              <div className="progress_right">
                33%
              </div>
            </div>
          </div>
        </div>

        <div className="card">
        <div className="card_top">
            <span>

              <ReactImageMagnify className="image" {...{
                smallImage: {
                  alt: 'Black dress zoom over hover',
                  isFluidWidth: true,
                  src: black
                },
                largeImage: {
                  src: Bigblack,
                  width: 600,
                  height: 900
                }
              }} />
            </span>
            <span>BLACK DRESS</span>
          </div>
          <div className="card_bottom">
            <div className="progress">
              <div className="progress_left">
                <span><BoltIcon /></span>
                <span>181.35</span>
              </div>
              <div className="progress_right">
                33%
              </div>
            </div>
          </div>
        </div>



       <div className="card">
       <div className="card_top">
            <span>

              <ReactImageMagnify className="image" {...{
                smallImage: {
                  alt: 'Orange dress zoom over hover',
                  isFluidWidth: true,
                  src: orange
                },
                largeImage: {
                  src:Bigorange,
                  width: 600,
                  height: 900
                }
              }} />
            </span>
            <span>ORANGE DRESS</span>
          </div>
          <div className="card_bottom">
            <div className="progress">
              <div className="progress_left">
                <span><BoltIcon /></span>
                <span>181.35</span>
              </div>
              <div className="progress_right">
                33%
              </div>
            </div>
          </div>
       </div>

       <div className="card">
       <div className="card_top">
            <span>

              <ReactImageMagnify className="image" {...{
                smallImage: {
                  alt: 'Pink dress zoom over hover',
                  isFluidWidth: true,
                  src:pink
                },
                largeImage: {
                  src: Bigpink,
                  width: 600,
                  height: 900
                }
              }} />
            </span>
            <span>PINK DRESS</span>
          </div>
          <div className="card_bottom">
            <div className="progress">
              <div className="progress_left">
                <span><BoltIcon /></span>
                <span>181.35</span>
              </div>
              <div className="progress_right">
                33%
              </div>
            </div>
          </div>
       </div>
      </div>

    </div>
  );
}

export default App;
