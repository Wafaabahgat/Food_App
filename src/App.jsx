import "./App.css";
import { createBrowserRouter } from "react-router-dom";
import Root from "./root";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [],
  },
]);

export default router;
