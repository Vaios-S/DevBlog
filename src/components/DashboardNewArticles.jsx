import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function DashboardNewArticles() {
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    console.log({
      title,
      body,
    });

    navigate("/dashboard");
  }

  return (
    <div>
      <h2 className="mb-3 text-3xl font-bold">New Article</h2>

      <form className="space-y-4" onSubmit={handleSubmit}>
        <input
          className="w-full rounded-lg border p-3"
          type="text"
          placeholder="Article Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <br />

        <textarea
          className="h-40 w-full rounded-lg border p-3"
          placeholder="Article Body"
          value={body}
          onChange={(e) => setBody(e.target.value)}
        />

        <br />

        <button
          className="rounded-lg bg-cyan-600 px-5 py-2 text-white hover:bg-cyan-700"
          type="submit"
        >
          Create Article
        </button>
      </form>
    </div>
  );
}
