import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <header>
      <nav>
        <Link to="/">Home</Link> | <Link to="/articles">Articles</Link> |{" "}
        <Link to="/login">Login</Link> | <Link to="/dashboard">Dashboard</Link>
      </nav>
    </header>
  );
}
