import { useMemo } from "react";
import posts from "../pages/Blog/posts";

const usePost = (id) =>
  useMemo(() => posts.find((post) => post.id === id), [id]);

export default usePost;
