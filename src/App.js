
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
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import EmojiObjectsTwoToneIcon from '@mui/icons-material/EmojiObjectsTwoTone';

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

const Progress = ({ done }) => {
  const [style, setStyle] = useState({});

  setTimeout(() => {
    const newStyle = {
      opacity: 1,
      width: `${done}%`
    }

    setStyle(newStyle);
  }, 200);

  return (

    <div className="progress-done" style={style}>
      {done}%
    </div>

  )
}

// voting div 


function Poll({ question, options }) {
  const [votes, setVotes] = useState(new Array(options.length).fill(0));
  const [selectedOption, setSelectedOption] = useState(-1);

  const handleVote = () => {
    if (selectedOption >= 0 && selectedOption < options.length) {
      const newVotes = [...votes];
      newVotes[selectedOption]++;
      setVotes(newVotes);
      setSelectedOption(-1);
    }
  };

  const totalVotes = votes.reduce((sum, count) => sum + count);

  return (
    <div>
      <h3>{question}</h3>
      {options.map((option, index) => (
        <div key={index}>
          <label>
            <input
              type="radio"
              name="option"
              value={index}
              checked={selectedOption === index}
              onChange={() => setSelectedOption(index)}
            />
            {option}
          </label>
          <div>{votes[index]} votes ({((votes[index] / totalVotes) * 100).toFixed(1)}%)</div>
        </div>
      ))}
      <button onClick={handleVote}>Vote</button>
    </div>
  );
}

// voting div 

function App() {
  const [count, setCount] = useState(500)

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
              <Progress done="60" />
              <div className="progress_left">
                <span><BoltIcon /></span>
                <span>181.35</span>
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
            <Progress done="75" />
              <div className="progress_left">
                <span><BoltIcon /></span>
                <span>181.35</span>
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
            <Progress done="55" />
              <div className="progress_left">
                <span><BoltIcon /></span>
                <span>181.35</span>
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
                  src: Bigorange,
                  width: 600,
                  height: 900
                }
              }} />
            </span>
            <span>ORANGE DRESS</span>
          </div>
          <div className="card_bottom">
            <div className="progress">
            <Progress done="88" />
              <div className="progress_left">
                <span><BoltIcon /></span>
                <span>181.35</span>
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
                  src: pink
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
            <Progress done="91" />
              <div className="progress_left">
                <span><BoltIcon /></span>
                <span>181.35</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Voting pollBox  */}
      <div className="box">
        <h3>RED DRESS</h3>
        <div className="box_div">
          <div className="box_counter">
            <div className="box_counter_minus"><RemoveIcon onClick={() => { setCount(count - 500) }} /></div>
            <div className="box_counter_mid">
              <span>Vote Amount</span>
              <span><BoltIcon />{count}</span>
            </div>
            <div className="box_counter_add"><AddIcon onClick={() => { setCount(count + 500) }} /></div>
          </div>
          <button className="btn btn-dark">Vote</button>
        </div>
        <div className="box_tips">
          <span><EmojiObjectsTwoToneIcon style={{ color: "#61510f" }} />Tips:</span>
          <span> Use your Enery to boost your opinion</span>
        </div>
      </div>
      {/* Voting pollBox  */}

    <Poll  question="What is your favorite color?"
  options={["Red", "Blue", "Green"]}/>

    </div>
  );
}

export default App;
