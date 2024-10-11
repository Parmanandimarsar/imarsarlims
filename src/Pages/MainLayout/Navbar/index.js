import React, { useState } from "react";
import Toolbar from "@mui/material/Toolbar";
import AppBar from "@mui/material/AppBar";
import IconButton from "@mui/material/IconButton";
import AccountCircle from "@mui/icons-material/AccountCircle";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import { ExpandLess, ExpandMore, Search } from "@mui/icons-material";
import { menuItems } from "../SideNav/SideNavMenuitems";
import { Link } from "react-router-dom";
import { Divider, Popover, Switch } from "@mui/material";
import logo from "../../../assets/images/G1.png";

const Navbar = ({ setMenuEnabled, menuEnabled }) => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [hoveredMenuIndex, setHoveredMenuIndex] = useState(null);
  const [submenuAnchorEl, setSubmenuAnchorEl] = useState(null);
  

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleSubmenuOpen = (event, index) => {
    if (menuEnabled) { // Only open if menu is enabled
      setHoveredMenuIndex(index);
      setSubmenuAnchorEl(event.currentTarget);
    }
  };

  const handleSubmenuClose = () => {
    setHoveredMenuIndex(null);
    setSubmenuAnchorEl(null);
  };

  const handleSwitchToggle = (event) => {
    setMenuEnabled(event.target.checked); // Update state based on switch toggle
  };
  
  return (
    <>
      <AppBar className="headerNav project-thim " position="sticky">
        <Toolbar>
          <div className="w-full my-auto">
            <div className="flex justify-around sm:justify-between ml-auto w-[97%] items-center">
              <div className="flex items-center gap-5">
                <div className="w-[200px] h-[50px]">
                  <img src={logo} alt="img" className="w-[170px] h-[45px]" />
                </div>
                <div className="relative hidden sm:block">
                  <input
                    className="p-2 px-16 justify-start rounded-lg outline-none text-gray-500"
                    placeholder="Search"
                  />
                  <Search className="absolute top-2 right-3 z-[1500] text-gray-500" />
                </div>
              </div>

              <div className="flex items-center">
                <Switch
                  checked={menuEnabled} // Switch state controls the menu
                  onChange={handleSwitchToggle}
                  color="primary"
                />
                <IconButton
                  size="large"
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  onClick={handleMenu}
                  color="inherit"
                >
                  <AccountCircle />
                </IconButton>
                <Menu
                  id="menu-appbar"
                  anchorEl={anchorEl}
                  anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "right",
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  open={Boolean(anchorEl)}
                  onClose={handleClose}
                >
                  <MenuItem onClick={handleClose}>Profile</MenuItem>
                  <MenuItem onClick={handleClose}>LogOut</MenuItem>
                </Menu>
                <p className="text-[14px] hidden sm:block">Parmanand Maurya</p>
              </div>
            </div>

            {menuEnabled ?<div className="flex w-[90%] justify-around ml-auto">
              {menuItems.map((items, index) => (
                <div
                  key={index}
                  className="relative flex flex-col top-[-6px] items-center"
                  onMouseEnter={(e) => handleSubmenuOpen(e, index)}
                  onMouseLeave={handleSubmenuClose}
                >
                  <button
                    className="text-white pl-2 font-bold flex items-center"
                    
                  >
                    {items.text}
                    {items.subItems.length > 0 &&
                      (hoveredMenuIndex === index ? (
                        <ExpandLess />
                      ) : (
                        <ExpandMore />
                      ))}
                  </button>

                  {items.subItems.length > 0 && (
                    <Popover
                      open={hoveredMenuIndex === index && menuEnabled} 
                      anchorEl={submenuAnchorEl}
                      onClose={handleSubmenuClose}
                      anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
                      transformOrigin={{ vertical: "top", horizontal: "left" }}
                    >
                      <div className="submenu p-2 rounded-lg shadow-lg grid grid-cols-3 gap-2">
                        {items.subItems.map((submenu, subIndex) => (
                          <Link
                            to={submenu.link}
                            key={subIndex}
                            className="block text-white hover:text-green-600"
                          >
                            <p className="text-[11px]">{submenu.text}</p>
                            <Divider className="bg-gray-300" />
                          </Link>
                        ))}
                      </div>
                    </Popover>
                  )}
                </div>
              ))}
            </div>:<div className="relative flex flex-col top-[-6px] p-2 items-center"></div>}
          </div>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Navbar;
