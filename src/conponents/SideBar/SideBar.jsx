import React from 'react';
import Button from '@mui/material/Button';
import "./SideBar.css";
import { RiChatNewFill } from "react-icons/ri";

const PastChats = ({  viewHistory, handleCreateNewChat}) => {



  return (
    <div className='wrapper'>
      <div>
        <button variant="contained" onClick={handleCreateNewChat} className='newchat-btn'>
          <RiChatNewFill/>
          Create New Chat
        </button>
      </div>
     
     <div className='pastBtn-container'>
      <button className='past-btn' onClick={viewHistory}>
        Past conversations
      </button>
     </div>


    </div>
  );
};

export default PastChats;
