import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import TodoListHook from "./TodoListHook";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <TodoListHook />
  </React.StrictMode>
);
