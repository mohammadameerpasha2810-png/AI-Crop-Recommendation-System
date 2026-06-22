import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav
  style={{
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    background: "#1b5e20",
    padding: "15px 30px",
  }}
>
      <Link
        to="/"
        style={{ color: "white", marginRight: "20px" }}
      >
        Home
      </Link>

      <Link
        to="/dashboard"
        style={{ color: "white", marginRight: "20px" }}
      >
        Dashboard
      </Link>

      <Link
  to="/about"
  style={{
    color: "white",
    marginRight: "20px",
  }}
>
  About
</Link>

<Link
  to="/prediction"
  style={{
    color: "white",
    marginRight: "20px",
  }}
>
  Prediction
</Link>
    </nav>
    
  );
}

export default Navbar;