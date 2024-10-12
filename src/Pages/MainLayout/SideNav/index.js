import React from "react";
import {
  Box,
  IconButton,
  Drawer,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Collapse,
} from "@mui/material";

import { useTheme } from "@mui/material/styles";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";
import { ExpandLess, ExpandMore } from "@mui/icons-material";
import { Link } from "react-router-dom";
import { menuItems } from "./SideNavMenuitems";
const drawerWidth = 240;

const SideNave = () => {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const handleDrawerOpen = () => setOpen(!open);

  const handleDropdownClick = (index) => {
    if (openDropdown === index) {
      setOpenDropdown(null);
    } else {
      setOpenDropdown(index);
    }
  };

  const handleSubChild = () => {
    setOpenDropdown(null);
    handleDrawerOpen();
  };
  return (
    <Box sx={{ display: "flex", marginBottom: "50px" }}>
      {/* Drawer */}
      <Drawer
        className="side-nav  "
        variant="permanent"
        open={open}
        sx={{
          width: "50px",
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
            ...(open && { width: drawerWidth }),
            ...(!open && { width: `calc(${theme.spacing(7)} + 1px)` }),
          },
        }}
      >
        <Box
          className="project-thim side-nav-menu-icon"
          sx={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{ marginLeft: "5px",  }}
          
          >
            <MenuIcon  />
          </IconButton>
        </Box>
        <Divider className="divider" />

        {/* Drawer List */}
        <List sx={{ color: "white" }} >
          {menuItems.map((item, index) => (
            <React.Fragment key={index}>
              <ListItem disablePadding >
                <ListItemButton
                  onClick={() => handleDropdownClick(index)}
                  sx={{ justifyContent: open ? "initial" : "center" }}
                >
                  <ListItemIcon
                    sx={{ justifyContent: "center", color: "white" }}
                  >
                    {item.icon}
                  </ListItemIcon>
                  <ListItemText
                    primary={item.text}
                    sx={{ opacity: open ? 1 : 0 }}
                  />

                  {/* Toggle icon based on open/close state */}
                  {item.subItems.length > 0 ? (
                    openDropdown === index ? (
                      <ExpandLess sx={{ opacity: open ? 1 : 0 }} />
                    ) : (
                      <ExpandMore sx={{ opacity: open ? 1 : 0 }} />
                    )
                  ) : null}
                </ListItemButton>
              </ListItem>
              <Divider />

              {/* Dropdown for sub-items */}
              {item.subItems.length > 0 && (
                <Collapse
                  in={openDropdown === index}
                  timeout="auto"
                  unmountOnExit
                  onClick={handleSubChild}
                >
                  <List component="div" disablePadding className="submenu ">
                    {item.subItems.map((subItem, subIndex) => (
                      <ListItemButton
                        key={subItem}
                        component={Link}
                        to={subItem.link}
                        sx={{
                          pl: 3,
                          justifyContent: open ? "initial" : "center",
                        }}
                        className=" border-b"
                      >
                        <ListItemIcon
                          key={subIndex}
                          sx={{ justifyContent: "center", color: "white" }}
                        >
                          {subItem.icon}
                        </ListItemIcon>

                        <ListItemText
                          primary={subItem.text}
                          sx={{ opacity: open ? 1 : 0 }}
                        />
                        <Divider sx={{ bgcolor: "white" }} />
                      </ListItemButton>
                    ))}
                  </List>
                  <Divider />
                </Collapse>
              )}
              <Divider className="divider" />
            </React.Fragment>
          ))}
        </List>
      </Drawer>
    </Box>
  );
};

export default SideNave;
