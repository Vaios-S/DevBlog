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
      <h2>New Article</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Article Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <br />

        <textarea
          placeholder="Article Body"
          value={body}
          onChange={(e) => setBody(e.target.value)}
        />

        <br />

        <button type="submit">Create Article</button>
      </form>
    </div>
  );
}
