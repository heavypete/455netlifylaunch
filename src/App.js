// import links from "./data/links.json";
import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [links, setLinks] = useState([]);

  useEffect(() => {
    (async () => {
      const response = await fetch(
        "https://raw.githubusercontent.com/edwardtanguay/fbwd01linksedward/main/src/data/links.json"
      );
      const data = await response.json();
      setLinks(data);
    })();
  }, []);
  return (
    <div className="App">
      <h1>Links</h1>
      <ul>
        {links.map((link, index) => {
          return (
            <li key={index}>
              <a target="_blank" href={link.url} rel="noreferrer">
                {link.title}
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default App;
