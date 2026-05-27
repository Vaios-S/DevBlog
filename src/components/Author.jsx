import { articles } from "../data/articles.js";
import { useParams, Link } from "react-router-dom";
import NotFound from "./NotFound.jsx";

export default function Author() {
  const { authorId, articleId } = useParams();

  const authorArticles = articles.filter(
    (a) => a.authorId === parseInt(authorId),
  );

  if (!authorArticles.length) {
    return <NotFound />;
  }

  return (
    <div>
      <h2>{authorArticles[0].authorName}</h2>
      <ul>
        {authorArticles.map((a) => (
          <li key={a.id}>
            {" "}
            <Link to={`/articles/${a.id}`}>{a.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
