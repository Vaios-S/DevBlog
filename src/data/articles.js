export const articles = [
  {
    id: 1,
    title: "Getting Started with React Router",
    body: "React Router is the most popular routing library for React applications. It allows you to create single-page applications with multiple views and navigation, all without reloading the browser. In this article, we explore the basics of setting up your first routes.",
    authorId: 101,
    authorName: "Alice Johnson",
  },
  {
    id: 2,
    title: "Understanding Nested Routes and Outlet",
    body: "Nested routes are a powerful feature that lets you share layouts across multiple pages. By using the Outlet component, you can render child routes inside a parent layout, perfect for dashboards with persistent sidebars and headers.",
    authorId: 102,
    authorName: "Bob Smith",
  },
  {
    id: 3,
    title: "Lazy Loading for Better Performance",
    body: "Lazy loading routes can dramatically improve your app's initial load time. Instead of bundling all components together, React.lazy and Suspense let you split your code so that pages are only downloaded when the user actually visits them.",
    authorId: 101,
    authorName: "Alice Johnson",
  },
  {
    id: 4,
    title: "TanStack Router vs React Router",
    body: "TanStack Router brings 100% type-safe navigation to React applications. Unlike React Router, where types are bolted on, TanStack Router is designed from the ground up with TypeScript in mind, offering inferred types and validated search params.",
    authorId: 103,
    authorName: "Carla Mendez",
  },
  {
    id: 5,
    title: "Programmatic Navigation with useNavigate",
    body: "Sometimes you need to redirect users based on actions, like after a successful form submission or login. The useNavigate hook gives you a function to navigate anywhere in your app, and you can even pass state along with the navigation.",
    authorId: 102,
    authorName: "Bob Smith",
  },
];
