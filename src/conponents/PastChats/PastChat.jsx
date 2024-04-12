import React from 'react';
import Button from '@mui/material/Button';
import "./PastChats.css";
import { RiChatNewFill } from "react-icons/ri";

const PastChats = ({ chats, onSelectChat, onCreateNewChat, selectedChat }) => {
  const handleChatSelect = (chat) => {
    onSelectChat(chat);
  };

  const handleCreateNewChat = () => {
    // Check if there are any chats with non-empty history
    const hasNonEmptyChat = chats.some(chat => chat.history.length > 0);

    // Check if a blank chat is already opened
    const hasBlankChat = chats.some(chat => chat.history.length === 0);

    // If there's no chat with non-empty history and no blank chat opened, create a new blank chat
    if (!hasNonEmptyChat && !hasBlankChat) {
      const newChat = { history: [] };
      onCreateNewChat(newChat);
    }
  };

  return (
    <div className='wrapper'>
      <div>
        <button variant="contained" onClick={handleCreateNewChat} className='newchat-btn'>
          <RiChatNewFill/>
          Create New Chat
        </button>
      </div>
     
     <div className='pastBtn-container'>
      <button className='past-btn'>
        Past conversations
      </button>
     </div>


    </div>
  );
};

export default PastChats;
