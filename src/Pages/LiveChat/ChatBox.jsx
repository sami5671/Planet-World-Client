import { useEffect, useState } from "react";
import { GiPsychicWaves } from "react-icons/gi";
import { FiSend } from "react-icons/fi";

import ScrollToBottom from "react-scroll-to-bottom";
import "./LiveChat.css";

const ChatBox = ({ socket, userName, room }) => {
  // =================================================================

  const [currentMessage, setCurrentMessage] = useState("");
  const [messageList, setMessageList] = useState([]);

  const sendMessage = async () => {
    if (currentMessage !== "") {
      const messageData = {
        room: room,
        author: userName,
        message: currentMessage,
        time:
          new Date(Date.now()).getHours() +
          ":" +
          new Date(Date.now()).getMinutes(),
      };

      await socket.emit("send_message", messageData);
      setMessageList((list) => [...list, messageData]);
      setCurrentMessage("");
    }
  };

  useEffect(() => {
    socket.on("receive_message", (data) => {
      setMessageList((list) => [...list, data]);
      //   console.log(data);
    });
  }, [socket]);

  console.log(messageList);
  //   =================================================================
  return (
    <>
      <div className="chat-window mt-32 lg:w-[800px] h-[450px]">
        <div className="h-[40px] bg-lime-500 font-bold rounded-sm ">
          <p>
            <span className="flex items-center gap-2 justify-center py-2 text-xl text-white">
              Live Chatting
              <GiPsychicWaves />
            </span>
          </p>
        </div>
        <div className="chat-body">
          <ScrollToBottom className="message-container">
            {messageList.map((messageContent) => {
              return (
                <div
                  className="message"
                  id={userName === messageContent.author ? "other" : "you"}
                >
                  <div>
                    <div className="message-content">
                      <p>{messageContent.message}</p>
                    </div>
                    <div className="message-meta">
                      <p id="time">{messageContent.time}</p>
                      <p id="author">{messageContent.author}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </ScrollToBottom>
        </div>
        <div className="chat-footer">
          <input
            type="text"
            value={currentMessage}
            placeholder="Type your Query here.........."
            onChange={(event) => {
              setCurrentMessage(event.target.value);
            }}
            onKeyPress={(event) => {
              event.key === "Enter" && sendMessage();
            }}
          />
          <button
            onClick={sendMessage}
            className="bg-lime-500 text-white hover:bg-white hover:text-black"
          >
            <span className="flex items-center gap-2 text-sm">
              Send <FiSend />
            </span>
          </button>
        </div>
      </div>
    </>
  );
};

export default ChatBox;
