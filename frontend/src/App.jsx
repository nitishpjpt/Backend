import React, { useEffect, useState } from "react";
import axios from "axios";

const App = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const data = {
    email,
    password,
  };

  const fetchlogin = async (e) => {
    e.preventDefault();

    const response = await axios.post(
      "https://backend-ieua.onrender.com/api/v1/login",
      data,
      {
        withCredentials: true,
      }
    );
    console.log(response.data);
  };

  return (
    <div>
      <form onSubmit={fetchlogin}>
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter your password"
        />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default App;
