import React from 'react';
import './App.css';
import {ChatEngine} from "react-chat-engine";
import ChatFeed from './components/ChatFeed';

const App=()=>{
  return(
     <ChatEngine
         height="100vh"
         projectID="642d8fd9-bf05-4729-a8a5-511b77599019"
         userName="Kokil"
         userSecret="12345"
         renderChatFeed={(chatAppProps)=><ChatFeed {...chatAppProps}/>}
     />
  );
}

export default App;