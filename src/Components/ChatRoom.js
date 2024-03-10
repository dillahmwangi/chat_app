import React from 'react';
import React, { useState, useEffect } from 'react';
import { io } from "socket.io-client";

const socket = io('<http://localhost:3000>');

function ChatRoom() {

  const [messages, setMessages] = useState(
    
      JSON.parse(localStorage.getItem('messages')) || []
    );
    
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState(null);
  const [messageText, setMessageText] = useState('');

  //Send a Message
  const sendMessage = () => {
    socket.emit('message', messageText);
    setMessageText('');
  };

  //Receive Message
  useEffect(() =>{
    socket.on("message", (message) => {
      setMessages(message => [...messages, message]);
  });
}, []);

//Join a chat room
const joinChatRoom = (userDetails) =>{
  setUser(userDetails);
  socket.emit('join', userDetails);
};

//Leave a chat room
const leaveChatRoom = () =>{
  socket.emit('leave', user);
  setUser(null);
}

useEffect(() => {
  localStorage.setItem('messages', JSON.stringify(messages));
}, [messages]);


  return (
    <div className="chat-room">
      // The chat room components will go here
    </div>
  );
}

export default ChatRoom;