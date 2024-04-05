//import { useState } from "react";
import { Link } from "react-scroll";

export default function Navbar() {
  //const [isactive, SetIsActive] = useState(false);
  return (
    <>
      <NavbarSegment target="home">{"About"}</NavbarSegment>
      <NavbarSegment target="music">{"Music"}</NavbarSegment>
      <NavbarSegment target="video">{"Video"}</NavbarSegment>
    </>
  );
}

function NavbarSegment({ target, children }) {
  return (
    <nav className="navbar">
      <div>
        <Link to={target} smooth={true} duration={500} className="navbar-links">
          {children}
        </Link>
      </div>
    </nav>
  );
}
