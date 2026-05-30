import { articles } from "../data/articles.js";
import { useParams, Link } from "react-router-dom";
import NotFound from "./NotFound.jsx";

export default function Author() {
  const { authorId } = useParams();

  const authorArticles = articles.filter(
    (a) => a.authorId === parseInt(authorId),
  );

  if (!authorArticles.length) {
    return <NotFound />;
  }

  return (
    <div className="mx-auto max-w-4xl p-6">
      <h2 className="mb-6 text-3xl font-bold">
        {authorArticles[0].authorName}
      </h2>
      <ul className="space-y-3">
        {authorArticles.map((a) => (
          <li key={a.id}>
            {" "}
            <Link
              className="text-cyan-600 hover:underline"
              to={`/articles/${a.id}`}
            >
              {a.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
