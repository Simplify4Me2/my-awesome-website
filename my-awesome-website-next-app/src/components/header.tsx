import { AppBar, Box, Toolbar, Typography } from "@mui/material";

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
          <Typography variant="h6" component="div" sx={{ flexGrow: 1, display: "flex", flexDirection: "row", alignItems: "center" }}>
            <img src="/logo.svg" className="h-12 pr-4" />
            <span>Simon Vereecke</span>
            {/* <Link to="/" className="flex flex-row items-center">
            </Link> */}
          </Typography>
          <Typography variant="h6">
            {/* <Link to="/contact" color="inherit">
              Contact
            </Link> */}
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
