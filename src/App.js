
import { useState } from 'react';
import './App.css';
import ConversationInterface from './conponents/Conversation/ConversationInterface';
import SideBar from './conponents/SideBar/SideBar';
import ChatHistory from './conponents/ChatHistory/ChatHistory';

function App() {
  const [chats, setChats] = useState([]);
  const [mode, setMode] = useState('light');


  const [openHistory , setOpenHistory] = useState(false)
  const [messages, setMessages] = useState([]);




  const toggleMode = () => {
    setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
  };
 
  const handleCreateNewChat = () => {
    setMessages(  []); 
    setOpenHistory(false)
  };


  const viewHistory =() => {
    setOpenHistory(true)

  }

  const addMessageToChat = (message) => {
    setChats((prevChats) => {
      const existingMessageIndex = prevChats.findIndex((msg) => msg.id === message.id);
      if (existingMessageIndex !== -1) {
        const updatedChats = [...prevChats];
        updatedChats[existingMessageIndex] = {
          ...updatedChats[existingMessageIndex],
          rating: message.rating,
          subjectiveFeedback: message.subjectiveFeedback,
        };
        return updatedChats;
      } else {
        // If the message doesn't exist in the chats array, add it
        return [...prevChats, message];
      }
    });
  };
  
  
  

console.log(chats)

  return (
    <div className={`App ${mode}`}>
    <div
     className='container flex gap-4 justify-between'>
      <SideBar  handleCreateNewChat ={handleCreateNewChat} viewHistory={viewHistory} mode={mode}/>
      
{openHistory?  <ChatHistory chats={chats} mode={mode}/> : <ConversationInterface setMessages={setMessages} messages={messages} addMessage={addMessageToChat} mode={mode}/>}
     </div>
    </div>
  );
}

export default App;
