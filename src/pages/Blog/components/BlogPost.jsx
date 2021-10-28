import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet";

import Typography from "@mui/material/Typography";

import PageNotFound from "../../404";
import usePost from "../../../hooks/usePost";

function BlogPost() {
  const { postId } = useParams();
  const post = usePost(postId);

  if (!post) return <PageNotFound />;

  const { title, preview, post: content, postedOn } = post;

  return (
    <>
      <Helmet>
        <meta name="title" content={title} />
        <meta name="description" content={preview} />
        <script className="structured-data-list" type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            datePublished: postedOn,
            text: preview,
            headline: title,
          })}
        </script>
      </Helmet>
      <Typography>{title}</Typography>
      {content}
    </>
  );
}

export default BlogPost;
