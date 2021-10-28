import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Helmet } from "react-helmet";

import { createTheme, ThemeProvider } from "@mui/material/styles";
import { blue, pink } from "@mui/material/colors";

import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";
import GlobalStyles from "@mui/material/GlobalStyles";

import useCompanyInfoSchema from "./hooks/useCompanyInfoSchema";
import AppNav from "./components/Header";

import Blog from "./pages/Blog";
import Home from "./pages/Home";
import PageNotFound from "./pages/404";

const theme = createTheme({
  palette: {
    primary: pink,
    secondary: blue,
  },
});

const globalStyles = (
  <GlobalStyles
    styles={{
      "html, body, #root": {
        height: "100%",
        width: "100%",
      },
      "#root": {
        display: "flex",
        flexDirection: "column",
      },
    }}
  />
);

function App() {
  const { description } = useCompanyInfoSchema();

  return (
    <>
      <Helmet>
        <meta name="description" content={description} />
      </Helmet>
      <Router>
        <ThemeProvider theme={theme}>
          {globalStyles}
          <CssBaseline />
          <AppNav />
          <Container sx={{ flex: 1, overflow: "auto", py: 2 }}>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/blog" component={Blog} />
              <Route path="*" component={PageNotFound} />
            </Switch>
          </Container>
        </ThemeProvider>
      </Router>
    </>
  );
}

export default App;
