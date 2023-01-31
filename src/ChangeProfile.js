import { useState } from "react"
import { useContext } from "react";
import { AppContext } from "./App";

export const ChangeProfile = () => {
  const [newUsername, setNewUsername] = useState("");
  const { setUsername } = useContext(AppContext);

  return (
    <div>
      <input
        value={newUsername}
        onChange={(e) => {
          setNewUsername(e.target.value);
        }}
      />
      <button onClick={ () => {
        setUsername(newUsername);
        setNewUsername('');
        }}>

        Change Username</button>
    </div>
  )
}
