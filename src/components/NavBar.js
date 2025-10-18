import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav style={{ padding: "1rem", background: "#eee" }}>
      <ul style={{ display: "flex", gap: "1rem", listStyle: "none", margin: 0 }}>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
