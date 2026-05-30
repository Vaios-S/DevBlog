import { articles } from "../data/articles.js";
import { Link } from "react-router-dom";

export default function Articles() {
  return (
    <div className="mx-auto max-w-5xl p-6">
      {articles.map((article) => (
        <div
          key={article.id}
          className="mb-4 rounded-xl border border-slate-200 bg-white p-5 shadow-sm transition hover:shadow-md"
        >
          {" "}
          <Link to={`/articles/${article.id}`}>
            <h2 className="mb-2 text-xl font-bold text-slate-800">
              {article.title}
            </h2>
          </Link>
          <p className="text-sm text-slate-500">{article.authorName}</p>
        </div>
      ))}
    </div>
  );
}
