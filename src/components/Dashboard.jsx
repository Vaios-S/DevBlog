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
    <div>
      <h1>Welcome, {username}</h1>
      <p>You logged in at {formattedTime}</p>
      <sidebar>
        <Link to="/dashboard" state={location.state}>
          Overview
        </Link>
        <Link to="/dashboard/settings" state={location.state}>
          Settings
        </Link>
        <Link to="/dashboard/new-articles" state={location.state}>
          New Article
        </Link>
      </sidebar>
      <Outlet />
    </div>
  );
}
