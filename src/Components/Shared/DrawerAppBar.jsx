import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import logo from "../../Assets/logo.svg";
import { AiOutlineShopping } from "react-icons/ai";
import { FiLogIn, FiLogOut } from "react-icons/fi";
import { Link } from "react-scroll";
import Badge from "@mui/material/Badge";
import { styled } from "@mui/material/styles";
import { useAuthState, useSignOut } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import LoginRoute from "./LoginRoute";
import CartRoute from "./CartRoute";
import HomeRoute from "./HomeRoute";
import OrderRoute from "./OrderRoute";

const drawerWidth = 240;
const navItems = [
  { _id: 1, menu: <HomeRoute />, route: "/", url: "/" },
  { _id: 2, menu: "About", route: "/about", url: "about" },
  {
    _id: 3,
    menu: "Popular Dish",
    route: "/popular-dishes",
    url: "popular-dishes",
  },
  { _id: 4, menu: "Our Chief", route: "/chief", url: "chief" },
  { _id: 5, menu: <OrderRoute /> },
  { _id: 6, menu: <CartRoute /> },
];

function DrawerAppBar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      {/* <Typography variant="h6" sx={{ my: 2 }}>
        MUI
      </Typography> */}
      <img className="mr-20 w-40 p-5" src={logo} alt="" />
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item._id} disablePadding>
            <ListItemButton sx={{ textAlign: "center" }}>
              <ListItemText primary={item.menu} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;
  const [user] = useAuthState(auth);
  const [signOut, loading, error] = useSignOut(auth);

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        component="nav"
        sx={{
          fontFamily: "Rubik",
          boxShadow: "none",
          borderBottom: "1px solid #F2F3F5",
          backgroundColor: "#fff",
          color: "#000",
          padding: { lg: "20px 100px" },
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
          {/* <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
          >
            MUI
          </Typography> */}
          <div className="flex justify-between items-center w-full px-5">
            <img className="lg:mr-20 w-20 lg:w-[200px]" src={logo} alt="" />
            <Box sx={{ display: { xs: "none", sm: "block" } }}>
              {navItems.map((item) => (
                <>
                  <Link
                    to={item.url}
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={500}
                    key={item._id}
                  >
                    <Button key={item._id} sx={{ color: "#000" }}>
                      {item.menu}
                    </Button>
                  </Link>
                </>
              ))}
              {/* <CartRoute />
              <OrderRoute /> */}
            </Box>
          </div>
          <div className="flex">
            {/* <Link to="/cart">
              <div className="lg:h-14 h-7 lg:w-14 w-7 bg-[#F2F3F5] flex justify-center items-center rounded-full">
                <AiOutlineShopping className="text-2xl" />
              </div>
            </Link> */}
            {/* <CartRoute />
            <OrderRoute /> */}
            {user ? (
              <button
                onClick={() => {
                  signOut();
                  localStorage.removeItem("accessToken");
                }}
              >
                <div className="lg:h-14 h-7 lg:w-36 w-36 bg-[#F2F3F5] flex justify-center items-center rounded-full mx-5">
                  Sign Out <FiLogOut className="text-2xl ml-2" />
                </div>
              </button>
            ) : (
              <LoginRoute />
            )}
          </div>
        </Toolbar>
      </AppBar>
      <Box component="nav" sx={{ fontFamily: "Rubik" }}>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
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
      </Box>
    </Box>
  );
}

DrawerAppBar.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default DrawerAppBar;
