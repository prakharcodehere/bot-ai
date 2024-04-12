
import { useState } from 'react';
import './App.css';
import ConversationInterface from './conponents/Conversation/ConversationInterface';
import PastChat from './conponents/PastChats/PastChat';

function App() {
  const [chats, setChats] = useState([]);
  const [selectedChat, setSelectedChat] = useState(null);

  // Function to handle selecting a chat
  const handleSelectChat = (chat) => {
    setSelectedChat(chat);
  };

  // Function to handle creating a new chat
  const handleCreateNewChat = () => {
    setSelectedChat(  []); // Create a new chat with empty history
  };

  const addMessageToChat = (message) => {
    setChats((prevChats) => {
      // Find the index of the message in the chats array
      const messageIndex = prevChats.findIndex((msg) => msg.id === message.id);
      if (messageIndex !== -1) {
        // If the message exists in the array, update it
        const updatedChats = [...prevChats];
        updatedChats[messageIndex] = {
          ...updatedChats[messageIndex],
          rating: message.rating,
          subjectiveFeedback: message.subjectiveFeedback,
        };
        return updatedChats;
      } else {
        // If the message doesn't exist, add it to the array
        return [...prevChats, message];
      }
    });
  };
  

console.log(chats)

  return (
    <div className="App">
    <div
     className='container flex gap-4 justify-between'>
      <PastChat chats={chats} onSelectChat={handleSelectChat} onCreateNewChat={handleCreateNewChat}/>
      <ConversationInterface chat={selectedChat} addMessage={addMessageToChat}/>

     </div>
    </div>
  );
}

export default App;
