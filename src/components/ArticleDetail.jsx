import { articles } from "../data/articles.js";
import { useParams, Link } from "react-router-dom";
import NotFound from "./NotFound.jsx";

export default function ArticleDetail() {
  const { articleId } = useParams();

  const article = articles.find((a) => a.id === parseInt(articleId));

  if (!article) {
    return <NotFound />;
  }

  return (
    <div className="mx-auto max-w-3xl p-6">
      <h2 className="mb-2 text-4xl font-bold">{article.title}</h2>
      <Link
        className="mb-6 inline-block text-cyan-600 hover:underline"
        to={`/author/${article.authorId}`}
      >
        <h2 className="text-lg font-semibold text-slate-800">
          {article.authorName}
        </h2>
      </Link>
      <p className="leading-8 text-slate-700">{article.body}</p>
    </div>
  );
}
