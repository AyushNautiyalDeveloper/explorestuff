import { useState, useEffect } from "react";

import "./App.css";

function App() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    // Replace this with the URL of your WebSocket server from your AsyncAPI spec.
    const serverUrl = "ws://localhost:3000/";

    // Create a WebSocket connection.
    const ws = new WebSocket(serverUrl);

    // Handle WebSocket connection open event.
    ws.onopen = () => {
      console.log("WebSocket connection opened.");

      // Subscribe to a specific channel.
      ws.send(
        JSON.stringify({
          type: "subscribe",
          channel: "/",
        })
      );
    };
  });

  return (
    <div>
      <h1>Hello, Glee!</h1>
      <p>{message}</p>
    </div>
  );
}

export default App;
