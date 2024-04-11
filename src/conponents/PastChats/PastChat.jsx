import React from 'react';
import Button from '@mui/material/Button';
import "./PastChats.css";
import { RiChatNewFill } from "react-icons/ri";

const PastChats = ({ chats, onSelectChat, onCreateNewChat, selectedChat }) => {
  const handleChatSelect = (chat) => {
    onSelectChat(chat);
  };

  const handleCreateNewChat = () => {
    // Clear the selected chat to reset the conversation interface
    onSelectChat(null);
  };

  return (
    <div className='wrapper'>
      <div>
        <button variant="contained" onClick={handleCreateNewChat} className='newchat-btn'>
          <RiChatNewFill/>
          Create New Chat
        </button>
      </div>
     
    </div>
  );
};

export default PastChats;
