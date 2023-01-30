import { Link } from "react-router-dom"

export const Navbar = () => {
  return (
    <div>
      <div><Link to="/">Home</Link></div>
      <div><Link to="/profile">Profile</Link></div>
      <div><Link to="/contact">Contact</Link></div>
    </div>
  )
}
