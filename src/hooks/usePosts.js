import { useMemo } from "react";
import posts from "../pages/Blog/posts";

const usePosts = () => useMemo(() => posts, []);

export default usePosts;
