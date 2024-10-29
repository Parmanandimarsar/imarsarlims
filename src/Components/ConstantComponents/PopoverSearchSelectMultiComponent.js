



import React, { useState } from "react";
import { Popover, TextField, MenuItem, Checkbox } from "@mui/material";

const PopoverSearchSelectMultiComponent = ({
  anchorEl,
  open,
  handleClose,
  searchQuery,
  setSearchQuery,
  menuOptions,
  selectedMenu,
  handleMenuSelection,
}) => {
  return (
    <Popover
      open={open}
      anchorEl={anchorEl}
      onClose={handleClose}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "left",
      }}
    >
      <div style={{ padding: "10px", minWidth: "300px" }}>
        {/* Search field inside the Popover */}
        <TextField
          placeholder="Search Menu"
          size="small"
          variant="outlined"
          fullWidth
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />

        {/* Filtered Menu options based on search */}
        {menuOptions
          .filter((menu) =>
            menu.toLowerCase().includes(searchQuery.toLowerCase())
          )
          .map((menu, index) => (
            <MenuItem
              key={index}
              value={menu}
              onClick={() => handleMenuSelection(menu)}
            >
              <Checkbox checked={selectedMenu.includes(menu)} />
              {menu}
            </MenuItem>
          ))}
      </div>
    </Popover>
  );
};

export default PopoverSearchSelectMultiComponent;
