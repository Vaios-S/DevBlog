import { BrowserRouter, Routes, Route } from "react-router-dom";
import { suspense } from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Login from "./components/Login";
import LoadingSpinner from "./components/LoadingSpinner";

const Articles = React.lazy(() => import("./components/Articles"));
const ArticleDetail = React.lazy(() => import("./components/ArticleDetail"));
const Author = React.lazy(() => import("./components/Author"));
const Dashboard = React.lazy(() => import("./components/Dashboard"));
const NotFound = React.lazy(() => import("./components/NotFound"));
const DashboardSettings = React.lazy(
  () => import("./components/DashboardSettings"),
);
const DashboardNewArticles = React.lazy(
  () => import("./components/DashboardNewArticles"),
);
const DashboardHome = React.lazy(() => import("./components/DashboardHome"));

function App() {
  return (
    <>
      <Suspense fallback={<LoadingSpinner />}>
        <BrowserRouter>
          <Navbar />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/articles" element={<Articles />} />
            <Route path="/articles/:articleId" element={<ArticleDetail />} />
            <Route path="/author/:authorId" element={<Author />} />
            <Route path="/login" element={<Login />} />
            <Route path="/dashboard" element={<Dashboard />}>
              <Route index element={<DashboardHome />} />
              <Route path="settings" element={<DashboardSettings />} />
              <Route path="new-articles" element={<DashboardNewArticles />} />
            </Route>
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </Suspense>
    </>
  );
}

export default App;
