import React, { useState } from 'react'
import "./ChatHistory.css"
import { GiBrain } from "react-icons/gi";
import { PiUserFill } from "react-icons/pi";

const ChatHistory = ({chats}) => {
    const [sortBy, setSortBy] = useState('None');

    const handleSortChange = (e) => {
        setSortBy(e.target.value);
      };
    
      const sortedChats = [...chats];


      if (sortBy === 'Lowest Rating') {
        sortedChats.sort((a, b) => (a.rating || 0) - (b.rating || 0));
      } else if (sortBy === 'Highest Rating') {
        sortedChats.sort((a, b) => (b.rating || 0) - (a.rating || 0));
      }

  return (
    <div className='chatHistory-wrapper'>
        <div className='title-sort-container'>
            <h2 className='heading'>Conversation History</h2>
        <div className="sort-by">
        <label htmlFor="sort-select">Sort by:</label>
        <select id="sort-select" value={sortBy} onChange={handleSortChange}>
          <option value="None">None</option>
          <option value="Lowest Rating">Lowest Rating</option>
          <option value="Highest Rating">Highest Rating</option>
        </select>
      </div></div>
        
        <div className='prevChat-container'>
            {sortedChats.map((item, index) => (
                <div key={index} className='prevChat-box'>  
                  <div className='user-chatprev'> <PiUserFill className='user-icon'/> <span className='user-text'>{item.userText}</span></div>
                 <hr />
                  <div className='ai-chatprev'><GiBrain className='ai-icon'/><span className='ai-text'>{item.aiText}</span></div>
                 
                 <div className='user-feedback'>
                 {item.subjectiveFeedback && <p>Feedback:{" "} <span className='feedback'>{item.subjectiveFeedback}</span></p>}
                    {item.rating && <div >Rating:{" "} <span className='rating'>{item.rating}</span>  </div>}
                 
                 </div> 

                </div>
            ))}
        </div>
    </div>
  )
}

export default ChatHistory;