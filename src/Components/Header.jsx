import { NavLink } from "react-router-dom";
function Header(){
    return(
        <div>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/About">About</NavLink>
          {/* <NavLink to="/"></NavLink>
          <NavLink to="/"></NavLink>
          <NavLink to="/"></NavLink>
          <NavLink to="/"></NavLink>
          <NavLink to="/"></NavLink> */}
          

        </div>
    )
}
export default Header