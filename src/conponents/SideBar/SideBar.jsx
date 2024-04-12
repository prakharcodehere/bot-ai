import React, { useState } from 'react';
import Button from '@mui/material/Button';
import "./SideBar.css";
import { RiChatNewFill } from "react-icons/ri";
import { BiSolidConversation } from "react-icons/bi";
import IconButton from '@mui/material/IconButton';
import { CiLight } from "react-icons/ci";
import { MdDarkMode } from "react-icons/md";



const PastChats = ({  viewHistory, handleCreateNewChat, mode,toggleMode}) => {

 
  return (
    <div className={`wrapper ${mode === 'dark' ? 'dark-mode' : 'light-mode'}`}>
      <div>
        <button variant="contained" onClick={handleCreateNewChat} className='newchat-btn'>
          <RiChatNewFill/>
          <span>Create New Chat</span> {/* Wrap text in a span */}
        </button>
      </div>
     
     <div className='pastBtn-container'>
      <button className='past-btn' onClick={viewHistory}>
      <BiSolidConversation />
      <span>Past conversations</span>
      </button>
     </div>

     <IconButton onClick={toggleMode} className="toggle-mode-btn">
        {mode === 'dark' ? <CiLight /> : <MdDarkMode />}
      </IconButton>
    </div>
  );
};

export default PastChats;
