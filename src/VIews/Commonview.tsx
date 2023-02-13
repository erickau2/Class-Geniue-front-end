import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Link, Route, Routes } from "react-router-dom";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import SchoolOutlinedIcon from "@mui/icons-material/SchoolOutlined";
import HomePage from "./Pages/HomePage";
import ContainerPage from "./Templates/ContainerPage";
import ResponsiveSplitScreen from "./Templates/ResponsiveSplitScreen";
import Fab from "@mui/material/Fab";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import GridViewOutlinedIcon from "@mui/icons-material/GridViewOutlined";
import AssignmentOutlinedIcon from "@mui/icons-material/AssignmentOutlined";
import OverviewPage from "./Pages/OverviewPage";

const drawerWidth = 240;
const floatingButtonStyle = {
  margin: 0,
  top: "auto",
  right: 20,
  bottom: 20,
  left: "auto",
  position: "fixed",
};

const title = "ClassGenie";
const navbarItems = [
  { name: "Home", icon: <HomeOutlinedIcon />, link: "/" },
  { name: "Overview", icon: <GridViewOutlinedIcon />, link: "/overview" },
  { name: "Students", icon: <SchoolOutlinedIcon />, link: "/page3" },
  { name: "Homeworks", icon: <AssignmentOutlinedIcon />, link: "/page4" },
];
const routes = [
  { path: "/*", element: <HomePage /> },
  { path: "overview", element: <OverviewPage /> },
  { path: "page3", element: <ResponsiveSplitScreen /> },
];

export default function ResponsiveDrawer() {
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <Toolbar />
      <Divider />
      <List>
        {navbarItems.map((navbarItem) => (
          <ListItem
            key={navbarItem.name}
            disablePadding
            component={Link}
            to={navbarItem.link}
            sx={{ "&:link": { color: "black" } }}
          >
            <ListItemButton>
              <ListItemIcon>{navbarItem.icon}</ListItemIcon>
              <ListItemText primary={navbarItem.name} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </div>
  );

  return (
    <Box sx={{ display: "flex" }}>
      <Fab variant="extended" sx={floatingButtonStyle}>
        <HelpOutlineIcon sx={{ mr: 1 }} />
        Ask Genie
      </Fab>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            {title}
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <Toolbar />
        <Routes>
          {routes.map((route) => (
            <Route key={route.path} path={route.path} element={route.element} />
          ))}
        </Routes>
      </Box>
    </Box>
  );
}
