
import { useState } from 'react';
import './App.css';
import ConversationInterface from './conponents/Conversation/ConversationInterface';
import SideBar from './conponents/SideBar/SideBar';
import ChatHistory from './conponents/ChatHistory/ChatHistory';

function App() {
  const [chats, setChats] = useState([]);
  
  const [openHistory , setOpenHistory] = useState(false)
  const [messages, setMessages] = useState([]);

 
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
    <div className="App">
    <div
     className='container flex gap-4 justify-between'>
      <SideBar  handleCreateNewChat ={handleCreateNewChat} viewHistory={viewHistory}/>
      
{openHistory?  <ChatHistory chats={chats}/> : <ConversationInterface setMessages={setMessages} messages={messages} addMessage={addMessageToChat}/>}
     </div>
    </div>
  );
}

export default App;
