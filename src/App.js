import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Users from "./Users/Users";
import UsersList from "./UsersList/UsersList";
import Nav from "./Nav/Nav";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Nav />
        <div className="app-body">
          <Routes>
            <Route path="/" element={<Users />} />
            <Route path="/users-list" element={<UsersList />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
