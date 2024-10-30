
import React from "react";
import { Popover, TextField, MenuItem, Box } from "@mui/material";

const CustomDropdowSearchPopover = ({ anchorEl, onClose, searchQuery, setSearchQuery, options, onSelect }) => {
  return (
    <Popover
      open={Boolean(anchorEl)}  
      anchorEl={anchorEl}
      onClose={onClose}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "left",
      }}
    >
      <Box sx={{ padding: "10px", minWidth: "200px" }}>
        <TextField
          placeholder="Search"
          size="small"
          variant="outlined"
          fullWidth
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        {options.map((option) => (
          <MenuItem
            key={option.id}
            onClick={() => {
              onSelect(option.name);
              onClose();
            }}
          >
            {option.name}
          </MenuItem>
        ))}
      </Box>
    </Popover>
  );
};

export default CustomDropdowSearchPopover;





// import React from "react";
// import { Popover, TextField, MenuItem, Box } from "@mui/material";

// const PopoverSearchSelectSingalDropComp = ({
//   anchorEl,
//   onClose,
//   searchQuery,
//   setSearchQuery,
//   options,
//   onSelect,
//   multiple = false,
// }) => {
//   const handleOptionSelect = (option) => {
//     if (multiple) {
//       onSelect((prev) => [...prev, option.name]); // Multi-select handling
//     } else {
//       onSelect(option.name);
//     }
//     onClose();
//   };

//   return (
//     <Popover
//       open={Boolean(anchorEl)}
//       anchorEl={anchorEl}
//       onClose={onClose}
//       anchorOrigin={{
//         vertical: "bottom",
//         horizontal: "left",
//       }}
//     >
//       <Box sx={{ padding: "10px", minWidth: "200px" }}>
//         <TextField
//           placeholder="Search"
//           size="small"
//           variant="outlined"
//           fullWidth
//           value={searchQuery}
//           onChange={(e) => setSearchQuery(e.target.value)}
//         />
//         {options.map((option) => (
//           <MenuItem
//             key={option.id}
//             onClick={() => handleOptionSelect(option)}
//           >
//             {option.name}
//           </MenuItem>
//         ))}
//       </Box>
//     </Popover>
//   );
// };

// export default PopoverSearchSelectSingalDropComp;
