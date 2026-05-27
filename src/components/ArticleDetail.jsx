import { useParams } from "react-router";
import { articles } from "../data/articles.js";
import { Link } from "react-router-dom";
import NotFound from "./NotFound.jsx";

export default function ArticleDetail() {
  const { articleId } = useParams();

  const article = articles.find((a) => a.id === parseInt(articleId));

  if (!article) {
    return <NotFound />;
  }

  return (
    <div>
      <h2>{article.title}</h2>
      <Link to={`/author/${article.authorId}`}>
        <h2>{article.authorName}</h2>
      </Link>
      <p>{article.body}</p>
    </div>
  );
}
