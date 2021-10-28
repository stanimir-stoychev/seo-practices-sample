import { Link } from "react-router-dom";

import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Divider from "@mui/material/Divider";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

import usePosts from "../../../hooks/usePosts";

function PreviewCard(props) {
  const { id, preview, title, img } = props;

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia component="img" height="140" image={img} alt={title} />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="subtitle2">{preview}</Typography>
      </CardContent>
      <CardActions>
        <Button component={Link} to={`/blog/${id}`} size="small">
          Continue reading
        </Button>
      </CardActions>
    </Card>
  );
}

function Preview() {
  const posts = usePosts();
  return (
    <>
      <Typography variant="h5" color="primary" fontWeight="bolder">
        Our latest
      </Typography>
      <Typography variant="subtitle2" color="secondary" fontWeight="bolder">
        Here's a quick intro to our <b>library</b> of content. We assume that
        you'd like your usual, the latest we have to offer? Check it out ;)
      </Typography>
      <Divider sx={{ my: 2 }} />
      <Grid container justifyContent="center" spacing={2}>
        {posts.map((post) => (
          <Grid key={post.id} item>
            <PreviewCard {...post} />
          </Grid>
        ))}
      </Grid>
    </>
  );
}

export default Preview;
