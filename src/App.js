
import { useState } from 'react';
import './App.css';
import ConversationInterface from './conponents/Conversation/ConversationInterface';
import PastChat from './conponents/PastChats/PastChat';

function App() {
  const [chats, setChats] = useState([]);
  const [selectedChat, setSelectedChat] = useState(null);

  const handleSelectChat = (chat) => {
    setSelectedChat(chat);
  };

const handleCreateNewChat = () => {
  // Check if any chat with non-empty history exists
  const hasNonEmptyChat = chats.some(chat => chat.history.length > 0);

  // If there's no chat with non-empty history, add a new blank chat
  if (!hasNonEmptyChat) {
    const newChat = { history: [] }; // Initialize with empty history
    setChats([...chats, newChat]);
    setSelectedChat(newChat); // Set the newly created chat as selectedChat
  }
};


  return (
    <div className="App">
    <div
     className='container flex gap-4 justify-between'>
      <PastChat chats={chats} onSelectChat={handleSelectChat} onCreateNewChat={handleCreateNewChat}/>
      <ConversationInterface chat={selectedChat}/>

     </div>
    </div>
  );
}

export default App;
