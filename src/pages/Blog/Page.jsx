import { Route, Switch, useRouteMatch } from "react-router-dom";
import { Helmet } from "react-helmet";

import useCompanyInfoSchema from "../../hooks/useCompanyInfoSchema";

import BlogPost from "./components/BlogPost";
import Preview from "./components/Preview";

function Page() {
  const { path } = useRouteMatch();
  const { name } = useCompanyInfoSchema();
  return (
    <>
      <Helmet>
        <meta name="title" content={`${name} | Blog`} />
        <meta
          name="description"
          content="Our blog is basically our library of knowledge. Please check out how we can help with SEO practices"
        />
      </Helmet>
      <Switch>
        <Route exact path={path} component={Preview} />
        <Route path={`${path}/:postId`} component={BlogPost} />
      </Switch>
    </>
  );
}

Page.displayName = "Blog";

export default Page;
