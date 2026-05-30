import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Articles from "./components/Articles";
import ArticleDetail from "./components/ArticleDetail";
import Author from "./components/Author";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import NotFound from "./components/NotFound";
import DashboardSettings from "./components/DashboardSettings";
import DashboardNewArticles from "./components/DashboardNewArticles";
import DashboardHome from "./components/DashboardHome";

function App() {
  return (
    <>
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
    </>
  );
}

export default App;
