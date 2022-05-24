import React, { useState } from "react";
import "./app.css";
import { Users } from "./users";

function App() {
  const [query, setQuery] = useState("");

  console.log(
    Users.filter((user) => user.first_name.toLowerCase().includes("fe"))
  );
  return (
    <div className="app">
      <div>
        <input
          type="text"
          placeholder="Search..."
          className="search"
          onChange={(e) => setQuery(e.target.value)}
        />
        <ul className="list">
          {Users.filter((user) =>
            user.first_name.toLowerCase().includes(query)
          ).map((user) => (
            <li key={user.id} className="listItem">
              {user.first_name}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
