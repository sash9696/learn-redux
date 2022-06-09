import React from "react";
import { useSelector } from "react-redux";
import { selectUser } from "../features/userSlice";

function UsersList() {
  const user = useSelector(selectUser);
  console.log(user);
  return (
    <div>
      {user.map((item, index) => (
        <>
          <h1>Name:{item.name} </h1>
          <h1>Email: {item.email} </h1>
        </>
      ))}
    </div>
  );
}

export default UsersList;
