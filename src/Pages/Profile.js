import { ChangeProfile } from "../ChangeProfile"

export const Profile = (props) => {
  return (
  <div>
    <h1>This is the Profile Page and the user is {props.username}</h1>
    <ChangeProfile setUsername={props.setUsername}/>
  </div>
  )
}
