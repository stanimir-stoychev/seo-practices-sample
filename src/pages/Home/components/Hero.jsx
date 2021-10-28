import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

function Hero() {
  return (
    <Box sx={{ mb: 2 }}>
      <Typography component="h1" variant="h6" textAlign="center">
        Welcome to our humble blog
      </Typography>
      <Typography component="p" variant="subtitle2" textAlign="center">
        Here we try to help others on their quest to mastering the mystical arts
        of SEO...
      </Typography>
    </Box>
  );
}

export default Hero;
