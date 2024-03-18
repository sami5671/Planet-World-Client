import io from "socket.io-client";
import { useState } from "react";
import "./LiveChat.css";
import ChatBox from "./ChatBox";
import { FaPersonCirclePlus } from "react-icons/fa6";
import { GiFruitTree } from "react-icons/gi";

// const socket = io.connect("http://localhost:5000");
const JoinChatRoom = () => {
  // =================================================================
  const [userName, setUserName] = useState("");
  const [room, setRoom] = useState("");
  const [showChat, setShowChat] = useState(false);

  const joinRoom = () => {
    if (userName !== "" && room !== "") {
      socket.emit("join_room", room, userName);
      setShowChat(true);
    }
  };
  // =================================================================
  return (
    <section className="bg-slate-950">
      <div className="App">
        {!showChat ? (
          <div className="joinChatContainer">
            <span className="flex justify-center">
              <GiFruitTree className="text-6xl  text-lime-400" />
            </span>
            <h3 className="text-lime-500 font-bold bg-gradient-to-bl from-yellow-200 to-green-700 text-transparent bg-clip-text ">
              Join Live Chat
            </h3>
            <input
              type="text"
              placeholder="Your Name..."
              className="lg:w-[400px] h-[40px] px-4 mb-4 border-2 border-lime-500 rounded-lg"
              onChange={(event) => {
                setUserName(event.target.value);
              }}
            />
            <input
              type="text"
              placeholder="Room ID..."
              className="lg:w-[400px] h-[40px] px-4 mb-4 border-2 border-lime-500 rounded-lg"
              onChange={(event) => {
                setRoom(event.target.value);
              }}
            />
            <button
              onClick={joinRoom}
              className="text-white font-bold bg-lime-800 rounded-md hover:bg-lime-600"
            >
              <span className="flex gap-2 items-center justify-center py-2">
                Join A Room
                <FaPersonCirclePlus />
              </span>
            </button>
          </div>
        ) : (
          <ChatBox socket={socket} userName={userName} room={room} />
        )}
      </div>
    </section>
  );
};

export default JoinChatRoom;
