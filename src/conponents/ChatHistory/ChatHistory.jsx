import React from 'react'
import "./ChatHistory.css"

const ChatHistory = ({chats}) => {
  return (
    <div className='chatHistory-wrapper'>
        <h3>Converastion History</h3>
        <div>
            {chats.map((item, index) => (
                <div key={index} className='prevChat-box'>  

                </div>
            ))}
        </div>
    </div>
  )
}

export default ChatHistory;