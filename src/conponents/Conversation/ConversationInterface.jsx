import React, { useEffect, useState } from 'react'
import "./Conversation.css"
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Data from "../../data/conversations.json"
import { GiBrain } from "react-icons/gi";
import { PiUserFill } from "react-icons/pi";
import { SlDislike } from "react-icons/sl";
import { SlLike } from "react-icons/sl";


const ConversationInterface = ({chat}) => {

  const [messages, setMessages] = useState(chat.history || []);
  const [userInput, setUserInput] = useState('');
  const [likeStatus, setLikeStatus] = useState(null); 
  const [rating, setRating] = useState(0);
  const [subjectiveFeedback, setSubjectiveFeedback] = useState('');
  const [showFeedbackButtons, setShowFeedbackButtons] = useState(false);
  const [feedbackStatus, setFeedbackStatus] = useState({});



  useEffect(() => {
    setMessages(chat.history || []);
  }, [chat]);





  const handleGenerateResponse = () => {
    const input = userInput.trim().toLowerCase();
    const foundResponse = Data.find(item => item.question.toLowerCase() === input);

    if (foundResponse) {
      const newMessage = { text: userInput, type: 'user' };
      const newResponse = { text: foundResponse.response, type: 'AI' };
      setMessages([...messages, newMessage, newResponse]);
    } else {
      const newMessage = { text: userInput, type: 'user' };
      const newResponse = { text: "Sorry, I don't have a response for that.", type: 'AI' };
      setMessages([...messages, newMessage, newResponse]);
    }
    setUserInput('');
    setShowFeedbackButtons(true);
  };
  
  const handleLikeDislike = (messageIndex, isLike) => {
    setFeedbackStatus((prevStatus) => ({
      ...prevStatus,
      [messageIndex]: isLike,
    }));
  };

  const handleRatingChange = (value) => {
    setRating(value);
  };

  const handleFeedbackChange = (event) => {
    setSubjectiveFeedback(event.target.value);
  };

  return (
    <div className='converation-wrapper'>
 <div>botAI</div>

      <div className='response-wrapper'>
      
      {messages.map((message, index) => (
         <div className='box'>
         <div key={index} className={`message ${message.type} `} >
            
            {message.type === 'user'  &&
              <div className='user-box'>
                <div className='user-img'> <PiUserFill className='user-icon'/></div>
             
                <div className="text">{message.text}</div>
              </div>
            } 
            {message.type === "AI" &&   <div className='ai-box'>
              <div className='ai-box'>
             <div className='ai-img'>  <GiBrain className='ai-icon' /></div> 
                <div className="text">{message.text}</div>
                {message.type === 'AI' && (
                  <div className="feedback-buttons" style={{ visibility: showFeedbackButtons ? 'visible' : 'hidden' }}>
                    <button
                      style={{
                        color: feedbackStatus[message.text] ? (feedbackStatus[message.text] === true ? 'green' : 'red') : 'black',
                        fontWeight: feedbackStatus[message.text] ? 'bold' : 'normal',
                      }}
                      onClick={() => handleLikeDislike(message.text, true)}
                    >
                      <SlLike/>
                    </button>
                    <button
                       style={{
                        color: feedbackStatus[message.text] === false ? 'red' : 'black',
                        fontWeight: feedbackStatus[message.text] === false ? 'bold' : 'normal',
                      }}
                      onClick={() => handleLikeDislike(message.text, false)}
                    >
                      <SlDislike/>
                    </button>
                  </div>
                )}
                </div>
              </div>}
             
            
          </div>
          </div>
        ))}
      </div>
      
      <div className='input-wrapper'>
<TextField id="outlined-basic" variant="outlined" className='user-input'  value={userInput}
          onChange={(e) => setUserInput(e.target.value)}/>
<button class="button" onClick={handleGenerateResponse}>
  <div class="dots_border"></div>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    class="sparkle"
  >
    <path
      class="path"
      stroke-linejoin="round"
      stroke-linecap="round"
      stroke="black"
      fill="black"
      d="M14.187 8.096L15 5.25L15.813 8.096C16.0231 8.83114 16.4171 9.50062 16.9577 10.0413C17.4984 10.5819 18.1679 10.9759 18.903 11.186L21.75 12L18.904 12.813C18.1689 13.0231 17.4994 13.4171 16.9587 13.9577C16.4181 14.4984 16.0241 15.1679 15.814 15.903L15 18.75L14.187 15.904C13.9769 15.1689 13.5829 14.4994 13.0423 13.9587C12.5016 13.4181 11.8321 13.0241 11.097 12.814L8.25 12L11.096 11.187C11.8311 10.9769 12.5006 10.5829 13.0413 10.0423C13.5819 9.50162 13.9759 8.83214 14.186 8.097L14.187 8.096Z"
    ></path>
    <path
      class="path"
      stroke-linejoin="round"
      stroke-linecap="round"
      stroke="black"
      fill="black"
      d="M6 14.25L5.741 15.285C5.59267 15.8785 5.28579 16.4206 4.85319 16.8532C4.42059 17.2858 3.87853 17.5927 3.285 17.741L2.25 18L3.285 18.259C3.87853 18.4073 4.42059 18.7142 4.85319 19.1468C5.28579 19.5794 5.59267 20.1215 5.741 20.715L6 21.75L6.259 20.715C6.40725 20.1216 6.71398 19.5796 7.14639 19.147C7.5788 18.7144 8.12065 18.4075 8.714 18.259L9.75 18L8.714 17.741C8.12065 17.5925 7.5788 17.2856 7.14639 16.853C6.71398 16.4204 6.40725 15.8784 6.259 15.285L6 14.25Z"
    ></path>
    <path
      class="path"
      stroke-linejoin="round"
      stroke-linecap="round"
      stroke="black"
      fill="black"
      d="M6.5 4L6.303 4.5915C6.24777 4.75718 6.15472 4.90774 6.03123 5.03123C5.90774 5.15472 5.75718 5.24777 5.5915 5.303L5 5.5L5.5915 5.697C5.75718 5.75223 5.90774 5.84528 6.03123 5.96877C6.15472 6.09226 6.24777 6.24282 6.303 6.4085L6.5 7L6.697 6.4085C6.75223 6.24282 6.84528 6.09226 6.96877 5.96877C7.09226 5.84528 7.24282 5.75223 7.4085 5.697L8 5.5L7.4085 5.303C7.24282 5.24777 7.09226 5.15472 6.96877 5.03123C6.84528 4.90774 6.75223 4.75718 6.697 4.5915L6.5 4Z"
    ></path>
  </svg>
  <span class="text_button">Generate</span>
</button>

<button className='save-img'>
  <div class="svg-wrapper-1">
    <div class="svg-wrapper">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width="30"
        height="30"
        class="icon"
      >
        <path
          d="M22,15.04C22,17.23 20.24,19 18.07,19H5.93C3.76,19 2,17.23 2,15.04C2,13.07 3.43,11.44 5.31,11.14C5.28,11 5.27,10.86 5.27,10.71C5.27,9.33 6.38,8.2 7.76,8.2C8.37,8.2 8.94,8.43 9.37,8.8C10.14,7.05 11.13,5.44 13.91,5.44C17.28,5.44 18.87,8.06 18.87,10.83C18.87,10.94 18.87,11.06 18.86,11.17C20.65,11.54 22,13.13 22,15.04Z"
        ></path>
      </svg>
    </div>
  </div>
  <span>Save</span>
</button>
      </div>
    </div>
  )
}

export default ConversationInterface