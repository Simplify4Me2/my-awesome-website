import { AppBar, Box, Toolbar, Typography } from "@mui/material";
import Link from "next/link";
import Image from "next/image";

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
            <Link href="/" className="flex flex-row items-center">
              <Image src="/logo.svg" className="h-12 pr-4" alt="Logo" width={50} height={50} />
              <span>Simon Vereecke</span>
            </Link>
          </Typography>
          <Typography variant="h6">
            <Link href={"/contact"} color="inherit">Contact</Link>
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
