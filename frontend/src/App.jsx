// frontend/src/App.jsx
import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get("/api/hello");
        setMessage(response.data.message);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    fetchData();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Simple Fullstack Vercel Project</h1>
        <p>{message}</p>
      </header>
    </div>
  );
}

export default App;
