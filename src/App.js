// import links from "./data/links.json";
import React, { useState, useEffect } from "react";

import feeds from "./data/feeds/json";
import "./App.css";

function App() {
  const [links, setLinks] = useState([]);

  useEffect(() => {
    feeds.forEach((feed) => {
      (async () => {
        const response = await fetch(feed.linksUrl);
        const tempLinks = await response.json();
        tempLinks.forEach((tempLink) => (tempLink.origin = feed.name));
        setLinks((n) => [...n, ...tempLinks]);
      })();
    });
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
