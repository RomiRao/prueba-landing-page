import {
  AppBar,
  Toolbar,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Box,
  Typography,
} from "@mui/material";
import RamenDiningIcon from "@mui/icons-material/RamenDining";
import MenuIcon from "@mui/icons-material/Menu";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import InstagramIcon from "@mui/icons-material/Instagram";
import { useState } from "react";
import NavListDrawer from "./NavListDrawer";
import { NavLink } from "react-router-dom";
import styles from "./Navbar.module.css";

const navLinks = ["Home", "Menu", "Contact"];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <AppBar sx={{ bgcolor: "transparent" }} position="static" elevation={0}>
        <Toolbar
          sx={{
            justifyContent: "space-between",
          }}
        >
          <Box display="flex" alignItems="center" color="black">
            <RamenDiningIcon sx={{ marginRight: "20px", fontSize: "2em" }} />
            <Typography>Mugiwaras</Typography>
          </Box>
          <List
            sx={{
              display: { xs: "none", sm: "flex" },
              padding: "0px",
            }}
          >
            {navLinks.map((link) => (
              <NavLink
                key={link}
                to={`/${link !== "Home" ? link.toLowerCase() : ""}`}
                className={({ isActive, isTransitioning }) =>
                  isTransitioning
                    ? `${styles.transition}`
                    : isActive
                    ? `${styles.active}`
                    : `${styles.inactive}`
                }
              >
                <ListItem disablePadding>
                  <ListItemButton sx={{ height: "70px" }}>
                    <ListItemText primary={link} />
                  </ListItemButton>
                </ListItem>
              </NavLink>
            ))}
            <IconButton>
              <InstagramIcon />
            </IconButton>
            <IconButton>
              <FacebookRoundedIcon />
            </IconButton>
          </List>

          <IconButton
            onClick={() => setOpen(true)}
            sx={{
              display: { xs: "flex", sm: "none" },
            }}
          >
            <MenuIcon color="white" />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Drawer
        anchor="right"
        open={open}
        onClick={() => setOpen(false)}
        sx={{ display: { xs: "flex", sm: "none" } }}
      >
        <NavListDrawer setOpen={setOpen} navLinks={navLinks} />
      </Drawer>
    </>
  );
}
