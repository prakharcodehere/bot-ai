
import { useState } from 'react';
import './App.css';
import ConversationInterface from './conponents/Conversation/ConversationInterface';
import PastChat from './conponents/SideBar/SideBar';
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
   
      const messageIndex = prevChats.findIndex((msg) => msg.id === message.id);
      if (messageIndex !== -1) {
     
        const updatedChats = [...prevChats];
        updatedChats[messageIndex] = {
          ...updatedChats[messageIndex],
          rating: message.rating,
          subjectiveFeedback: message.subjectiveFeedback,
        };
        return updatedChats;
      } else {
    
        return [...prevChats, message];
      }
    });
  };
  

console.log(chats)

  return (
    <div className="App">
    <div
     className='container flex gap-4 justify-between'>
      <PastChat   handleCreateNewChat ={handleCreateNewChat} viewHistory={viewHistory}/>
      
{openHistory?  <ChatHistory chats={chats}/> : <ConversationInterface setMessages={setMessages} messages={messages} addMessage={addMessageToChat}/>}
     </div>
    </div>
  );
}

export default App;
