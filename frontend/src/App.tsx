import { useState, useEffect } from "react";

import "./App.css";

function App() {
  const [message, setMessage] = useState("");

  // This useEffect function will make a WebSocket connection to your server and subscribe to the "hello" channel.
  useEffect(() => {
    const socket = new WebSocket("ws://0.0.0.0:3000");
    // socket.onmessage = (event) => {
    //   const data = JSON.parse(event.data);
    //   if (data && data.payload) {
    //     setMessage(`Server says: ${data.payload}`);
    //   }
    // };

    // Subscribe to the "hello" channel
    // socket.send(JSON.stringify({ channel: "hello", action: "subscribe" }));

    return () => {
      socket.close();
    };
  }, []);

  return (
    <div>
      <h1>Hello, Glee!</h1>
      <p>{message}</p>
    </div>
  );
}

export default App;
