import { useLocation, useNavigate, Link } from "react-router-dom";
import { useEffect } from "react";
import { Outlet } from "react-router-dom";

export default function Dashboard() {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (!location.state) {
      navigate("/login");
    }
  }, [location.state, navigate]);

  if (!location.state) {
    return null;
  }

  const { username, loginTime } = location.state;

  const formattedTime = new Date(loginTime).toLocaleString("el-GR");

  return (
    <div className="flex min-h-screen">
      <aside className="sticky top-0 h-screen w-64 bg-slate-900 p-6 text-white">
        <div className="flex flex-col gap-3">
          <Link
            className="rounded-lg px-3 py-2 transition hover:bg-slate-800"
            to="/dashboard"
            state={location.state}
          >
            Overview
          </Link>
          <Link
            className="rounded-lg px-3 py-2 transition hover:bg-slate-800"
            to="/dashboard/settings"
            state={location.state}
          >
            Settings
          </Link>
          <Link
            className="rounded-lg px-3 py-2 transition hover:bg-slate-800"
            to="/dashboard/new-articles"
            state={location.state}
          >
            New Article
          </Link>
        </div>
      </aside>
      <main className="flex-1 p-8">
        <div className="mb-8 rounded-2xl bg-white p-6 shadow">
          <h1 className="text-3xl font-bold">Welcome, {username}</h1>

          <p className="mt-2 text-slate-500">Logged in at {formattedTime}</p>
        </div>

        <div className="rounded-2xl bg-white p-6 shadow">
          <Outlet />
        </div>
      </main>
    </div>
  );
}
