import React, { useEffect, useState } from "react";
import Sidebar from "./Sidebar";
import Chat from "./Chat";
import Pusher from "pusher-js";
import axios from "../axios";
import Login from "./Login";
import AutorenewOutlinedIcon from "@material-ui/icons/AutorenewOutlined";
function App() {
  const [messages, updateMessages] = useState([]);
  const [user, HandleLoggedInUser] = useState(null);
  useEffect(() => {
    axios.get("/messages/sync").then((response) => {
      updateMessages(response.data);
    });
  }, []);
  useEffect(() => {
    if (localStorage.getItem("user")) {
      HandleLoggedInUser(JSON.parse(localStorage.getItem("user")));
    }
  }, []);
  useEffect(() => {
    const pusher = new Pusher("83fb2c9e4f17bed11c19", {
      cluster: "ap2",
    });
    const channel = pusher.subscribe("messages");
    channel.bind("inserted", function (data) {
      updateMessages([...messages, data]);
    });
    return () => {
      channel.unbind_all();
      channel.unsubscribe();
    };
  }, [messages]);
  if (messages.length === 0) {
    return (
      <div className="App">
        <div className="AppContainer">
          <div className="WaitProfile">
            <div className="loader rotating">
              <AutorenewOutlinedIcon />
            </div>
            <p>Loading...</p>
          </div>
        </div>
      </div>
    );
  }
  if (!user) {
    return (
      <div className="App">
        <Login HandleLoggedInUser={HandleLoggedInUser} />
      </div>
    );
  }
  return (
    <div className="App">
      <div className="AppContainer">
        <Sidebar lastmessage={messages[messages.length - 1]} user={user} />
        <Chat messages={messages} user={user} />
      </div>
    </div>
  );
}

export default App;
