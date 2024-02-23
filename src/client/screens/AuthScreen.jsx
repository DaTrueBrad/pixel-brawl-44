import axios from "axios";
import React, { useState, useContext } from "react";
import AuthContext from "../state/AuthContext";

const AuthScreen = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [action, setAction] = useState("");
  const {dispatch} = useContext(AuthContext)

  const handleSubmit = (e) => {
    console.log(e);
    e.preventDefault();
    const body = {
      username,
      password,
    };
    console.log(body);
    if (action === "Register") {
      axios
        .post("/api/register", body)
        .then((res) => {
          //TODO dispatch a login action, with the user info as payload.
          dispatch({type: "LOGIN", payload: res.data})
          console.log(res);
        })
        .catch((err) => {
          console.error(err);
        });
    } else if (action === "Login") {
      axios
        .post("/api/login", body)
        .then((res) => {
          dispatch({type: "LOGIN", payload: res.data})
          console.log(res);
        })
        .catch((err) => {
          console.error(err);
        });
    }
  };

  return (
    <form
      className="bg-gray-700 h-screen flex flex-col items-center justify-center gap-6"
      onSubmit={handleSubmit}
    >
      <h1>Logo</h1>
      <input
        type="text"
        placeholder="Username"
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="text"
        placeholder="Password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <div className="flex w-64 justify-between">
        <button
          className="bg-orange-600 p-2 rounded"
          onClick={() => setAction("Login")}
        >
          Login
        </button>
        <button
          className="bg-orange-600 p-2 rounded"
          onClick={() => setAction("Register")}
        >
          Register
        </button>
      </div>
    </form>
  );
};

export default AuthScreen;
