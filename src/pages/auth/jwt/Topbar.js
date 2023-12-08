import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import WebbeeLogo from "./Webbee";
import Link from "@mui/material/Link";

const Navbar = () => {
  return (
    <AppBar
      position="static"
      sx={{
        paddingX: { xs: "16px", md: "9vw" },
        backgroundColor: "white",
        boxShadow: "none",
        color: "black",
      }}
    >
      <Toolbar
        sx={{
          justifyContent: "space-between",
          paddingX: { xs: "16px", md: "5vw" },
        }}
      >
        <Box display={{ xs: "flex", md: "flex" }} alignItems="center">
          <Box
            display="flex"
            component="a"
            underline="none"
            href="/"
            title="webbee"
                      height={{ xs: 28, md: 32 }}
          >
            <WebbeeLogo height='60px' width={"100%"} />
          </Box>

          {/* Description */}
          {/* <Typography
            variant="body2"
            sx={{
              paddingX: { xs: "16px", md: "1vw" },
              color: "black",
              maxWidth: { xs: "none", md: "200px" },
              fontSize: { xs: "0.8rem", md: "1rem" },
            }}
          >
            Some description of 20 words goes here.
          </Typography> */}
        </Box>

        <Box sx={{ display: { xs: "none", md: "flex" } }} alignItems={"center"}>
          <Box>
            <Link underline="none" component="a" href="/" color="black" fontWeight="500">
              Investor
            </Link>
          </Box>
          <Box marginX={2}>
            <Link underline="none" component="a" href="/" color="black" fontWeight="500">
              Menus
            </Link>
          </Box>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
