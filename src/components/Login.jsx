import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Login() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="flex min-h-[80vh] items-center justify-center">
      <form
        className="w-full max-w-md rounded-2xl bg-white p-8 shadow-lg"
        onSubmit={(e) => {
          e.preventDefault();
          navigate("/dashboard", {
            state: { username, loginTime: new Date().toISOString() },
          });
        }}
      >
        <input
          className="mb-4 w-full rounded-lg border p-3"
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Username"
        />
        <input
          className="mb-4 w-full rounded-lg border p-3"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        />
        <div className="flex justify-between">
          <button
            className="rounded-lg bg-slate-200 px-4 py-2"
            type="button"
            onClick={() => navigate(-1)}
          >
            Cancel
          </button>
          <button
            className="rounded-lg bg-cyan-600 px-4 py-2 text-white hover:bg-cyan-700"
            type="submit"
          >
            Login
          </button>
        </div>
      </form>
    </div>
  );
}
