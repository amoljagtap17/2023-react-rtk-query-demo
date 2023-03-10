import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import ErrorPage from "./Error";
import HomePage from "./Home";
import PostPage from "./Post";
import Root from "./Root";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />} errorElement={<ErrorPage />}>
      <Route errorElement={<ErrorPage />}>
        <Route index element={<HomePage />} />
        <Route path="posts" element={<PostPage />} />
        <Route path="*" element={<ErrorPage />} />
      </Route>
    </Route>
  )
);
