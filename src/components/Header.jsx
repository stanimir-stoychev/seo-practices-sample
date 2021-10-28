import { Link as RouterLink } from "react-router-dom";

import Link from "@mui/material/Link";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

import useCompanyInfoSchema from "../hooks/useCompanyInfoSchema";

import CompanyInfo from "./schema/CompanyInfo";

function Header() {
  const { name } = useCompanyInfoSchema();
  const links = [
    { title: "Home", url: "/" },
    { title: "Blog", url: "/blog" },
  ];

  return (
    <>
      <CompanyInfo />
      <Toolbar sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Typography
          component="h2"
          variant="h5"
          color="inherit"
          align="center"
          noWrap
          sx={{ flex: 1 }}
        >
          <Typography
            to="/"
            variant="h6"
            component={RouterLink}
            color="primary"
            sx={{ textDecoration: "none" }}
          >
            {name}
          </Typography>
        </Typography>
      </Toolbar>
      <Toolbar
        component="nav"
        variant="dense"
        sx={{
          borderBottom: 1,
          borderColor: "divider",
          justifyContent: "space-evenly",
          overflowX: "auto",
        }}
      >
        {links.map((section) => (
          <Link
            component={RouterLink}
            color="inherit"
            noWrap
            key={section.title}
            variant="body2"
            to={section.url}
            sx={{ p: 1, flexShrink: 0 }}
          >
            {section.title}
          </Link>
        ))}
      </Toolbar>
    </>
  );
}

export default Header;
