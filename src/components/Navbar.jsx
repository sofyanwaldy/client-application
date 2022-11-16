import { Link } from "react-router-dom";

import "./Navbar.css";

function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid">
          <ul className="nav-inline">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/users"> Users </Link>
            </li>
            <li>
              <Link to="/about"> About </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
