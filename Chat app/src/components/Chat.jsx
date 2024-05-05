import React from 'react'
import Camera from "../img/Camera.png";
import Add from "../img/Add.png";
import More from "../img/More.png";
import Messages from './Messages';
import Input from "./Input";



const Chat = () => {
  return (
    <div className="chat">
      <div className="chatInfo">
        <span>Shivam</span>
        <div className="chatIcons">
          <img src={Camera} alt="" />
          <img src={Add} alt="" />
          <img src={More} alt="" />
        </div>
      </div>
      <Messages />
      <Input/>
    </div>
  );
}

export default Chat
