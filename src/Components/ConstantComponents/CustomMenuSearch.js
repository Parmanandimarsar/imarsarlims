import React, { useState } from "react";
import {
  TextField,
  Menu,
  MenuItem,
  Checkbox,
  ListItemText,
} from "@mui/material";

const CustomMenuSearch = ({
  options,
  selectedOptions,
  setSelectedOptions,
  placeholder,
  anchorEl,
  onClose,
  isCheckboxMenu = false, // Prop to control checkbox display
}) => {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredOptions = options.filter((option) =>
    option.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleSelectOption = (option) => {
    if (isCheckboxMenu) {
      const currentIndex = selectedOptions.findIndex((o) => o.id === option.id);
      const newSelectedOptions = [...selectedOptions];

      if (currentIndex === -1) {
        newSelectedOptions.push(option);
      } else {
        newSelectedOptions.splice(currentIndex, 1);
      }

      setSelectedOptions(newSelectedOptions);
    } else {
      // For non-checkbox menus (Centre and Item)
      setSelectedOptions([option]); // Allow single selection
      onClose(); // Close menu after selection
    }
  };

  return (
    <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={onClose}>
    
        <TextField
          fullWidth
          placeholder={`Search ${placeholder}...`}
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          autoFocus
        />
   
      {filteredOptions.map((option) => (
        <MenuItem key={option.id} onClick={() => handleSelectOption(option)}>
          {isCheckboxMenu && (
            <Checkbox
              checked={selectedOptions.some((o) => o.id === option.id)}
            />
          )}
          <ListItemText primary={option.name} />
        </MenuItem>
      ))}
    </Menu>
  );
};

export default CustomMenuSearch;
