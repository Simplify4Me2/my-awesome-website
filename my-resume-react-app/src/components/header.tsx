import { AppBar, Box, Toolbar, Typography } from "@mui/material";
import { Link } from "react-router-dom";

export function Header() {
  return (
    <Box
      sx={{
        flexGrow: 1,
        background: "primary",
      }}
      className="sticky top-0 z-50"
    >
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Link to="/" className="flex flex-row items-center">
              <img src="/logo.svg" className="h-12 pr-4" />
              <span>Simon Vereecke</span>
            </Link>
          </Typography>
          <Typography variant="h6">
            <Link to="/contact" color="inherit">
              Contact
            </Link>
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
