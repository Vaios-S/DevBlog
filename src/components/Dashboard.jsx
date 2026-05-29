import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";

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
    </div>
  );
}
