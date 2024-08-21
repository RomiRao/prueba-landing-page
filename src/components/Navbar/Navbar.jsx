import {
  AppBar,
  Toolbar,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import LocalPizzaIcon from "@mui/icons-material/LocalPizza";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";
import NavListDrawer from "./NavListDrawer";
import { NavLink } from "react-router-dom";
import styles from "./Navbar.module.css";

const navLinks = ["Home", "Products", "Contact"];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <AppBar
        sx={{ bgcolor: "black", boxShadow: "none" }}
        position="static"
        elevation={0}
      >
        <Toolbar
          sx={{
            justifyContent: {
              xs: "space-between",
              sm: "flex-start",
            },
          }}
        >
          <LocalPizzaIcon fontSize="2em" style={{ marginRight: "20px" }} />
          <List
            sx={{
              display: { xs: "none", sm: "flex" },
              padding: "0px",
            }}
            id="sidebar"
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
