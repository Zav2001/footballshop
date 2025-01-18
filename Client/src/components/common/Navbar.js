import * as React from "react";
import { Link, NavLink } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import SportsSoccerIcon from "@mui/icons-material/SportsSoccer";

function Navbar({ loggedIn, isAdmin, logout }) {
  const pages = (
    <div>
      <NavLink className="nav-link" activeClassName="active" exact to="/">
        Գլխավոր
      </NavLink>
      <NavLink className="nav-link" to="/products">
        Ապրանքներ
      </NavLink>
      {loggedIn && !isAdmin && (
        <NavLink className="nav-link" to="/orders">
          Իմ Պատվերները
        </NavLink>
      )}
      {isAdmin && (
        <NavLink className="nav-link" to="/admin/create">
          Ստեղծել Նոր Ապրանք
        </NavLink>
      )}
      {isAdmin && (
        <NavLink className="nav-link" to="/admin/orders/all">
          Պատվերներ
        </NavLink>
      )}
      {loggedIn && !isAdmin && (
        <NavLink className="nav-link" to="/cart">
          Զամբյուղ
        </NavLink>
      )}
      {!loggedIn && (
        <NavLink className="nav-link" to="/login">
          Մուտք
        </NavLink>
      )}
      {!loggedIn && (
        <NavLink className="nav-link" to="/register">
          Գրանցվել
        </NavLink>
      )}
    </div>
  );

  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar style={{ backgroundColor: "black" }} position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <SportsSoccerIcon />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            FOOTBALLSHOP
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {/* {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))} */}
              {pages}
            </Menu>
          </Box>
          <AdbIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            FOOTBALLSHOP
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages}
          </Box>

          {loggedIn && (
            <Box sx={{ flexGrow: 0 }}>
              {/* <Tooltip title="Open settings"> */}
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar
                  alt="Remy Sharp"
                  src="https://cdn.vectorstock.com/i/preview-1x/34/82/neutral-profile-picture-vector-23443482.jpg"
                />
              </IconButton>
              {/* </Tooltip> */}
              <Menu
                sx={{ mt: "45px" }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                {/* {settings.map((setting) => ( */}
                <MenuItem onClick={handleCloseUserMenu}>
                  <Typography onClick={logout} textAlign="center">
                    Դուրս գալ
                  </Typography>
                </MenuItem>
                {/* ))} */}
              </Menu>
            </Box>
          )}
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Navbar;
