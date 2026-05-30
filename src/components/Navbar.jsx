import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <header className="bg-slate-900 text-white shadow-md">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <h1 className="text-xl font-bold">DevBlog</h1>
        <div className="flex gap-6">
          <Link to="/" className="transition hover:text-cyan-400">
            Home
          </Link>{" "}
          |{" "}
          <Link to="/articles" className="transition hover:text-cyan-400">
            Articles
          </Link>{" "}
          |{" "}
          <Link to="/login" className="transition hover:text-cyan-400">
            Login
          </Link>{" "}
          |{" "}
          <Link to="/dashboard" className="transition hover:text-cyan-400">
            Dashboard
          </Link>
        </div>
      </nav>
    </header>
  );
}
