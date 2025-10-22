import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <div id="navBar">
      <NavLink to='/'>Home</NavLink>
      <NavLink to='/createplayer'>Create Player</NavLink>
      <NavLink to="/players">All Players</NavLink>
      <NavLink to='/information'>Information</NavLink>
    </div>
  );
}
