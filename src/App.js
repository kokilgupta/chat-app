import React from 'react';
import './App.css';
import {ChatEngine} from "react-chat-engine";
import LoginForm from './components/LoginForm';
import ChatFeed from './components/ChatFeed';

const App=()=>{
  if (!localStorage.getItem('username')) return <LoginForm />;
  return(
     <ChatEngine
         height="100vh"
         projectID="642d8fd9-bf05-4729-a8a5-511b77599019"
         userName={localStorage.getItem('username')}
         userSecret={localStorage.getItem('password')}
         renderChatFeed={(chatAppProps)=><ChatFeed {...chatAppProps}/>}
     />
  );
}

export default App;