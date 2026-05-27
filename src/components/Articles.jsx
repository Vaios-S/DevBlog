import { articles } from "../data/articles.js";
import { Link } from "react-router-dom";

export default function Articles() {
  return (
    <div>
      {articles.map((article) => (
        <div key={article.id}>
          {" "}
          <Link to={`/articles/${article.id}`}>
            <h2>{article.title}</h2>
          </Link>
          <p>{article.authorName}</p>
        </div>
      ))}
    </div>
  );
}
