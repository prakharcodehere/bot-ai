import React, { useState } from 'react';
import Button from '@mui/material/Button';
import "./SideBar.css";
import { RiChatNewFill } from "react-icons/ri";
import { BiSolidConversation } from "react-icons/bi";



const PastChats = ({  viewHistory, handleCreateNewChat}) => {

 
  return (
    <div className='wrapper'>
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


    </div>
  );
};

export default PastChats;
