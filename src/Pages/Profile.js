import { ChangeProfile } from "../ChangeProfile"
import { useContext } from "react"
import { AppContext } from "../App"

export const Profile = () => {
  const { username } = useContext(AppContext);
  return (
  <div>
    <h1>This is the Profile Page and the user is {username}</h1>
    <ChangeProfile />
  </div>
  )
}
