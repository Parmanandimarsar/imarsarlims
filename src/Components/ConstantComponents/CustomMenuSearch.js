import React, { useState } from "react";
import {
  TextField,
  Menu,
  MenuItem,
  Checkbox,
  ListItemText,
} from "@mui/material";

const CustomMenuSearch = ({
  options = [], selectedOptions = [],
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
    console.log("option", option);

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

// CustomMenu.js
// import React, { useState } from "react"; // React aur useState ko import kar rahe hain.
// import {
//   TextField, // TextField component ko import kar rahe hain.
//   Menu, // Menu component ko import kar rahe hain.
//   MenuItem, // MenuItem component ko import kar rahe hain.
//   Checkbox, // Checkbox component ko import kar rahe hain.
//   ListItemText, // ListItemText component ko import kar rahe hain.
// } from "@mui/material"; // MUI se ye components import ho rahe hain.

// const CustomMenuSearch = ({ // CustomMenuSearch naam ka functional component bana rahe hain.
//   options, // options: menu mein dikhane ke liye options ki list.
//   selectedOptions, // selectedOptions: wo options jo user ne select kiye hain.
//   setSelectedOptions, // setSelectedOptions: function jo selected options ko update karega.
//   placeholder, // placeholder: search box ke liye placeholder text.
//   anchorEl, // anchorEl: wo element jiske relative menu open hoga.
//   onClose, // onClose: function jo menu close karega.
//   isCheckboxMenu = false, // isCheckboxMenu: ek prop jo decide karega ki checkboxes dikhane hain ya nahi.
// }) => {
//   const [searchQuery, setSearchQuery] = useState(""); // searchQuery aur setSearchQuery ko state ke roop mein initialize kar rahe hain.

//   const filteredOptions = options.filter((option) => // filteredOptions mein un options ko filter kar rahe hain jo search query se match karte hain.
//     option.name.toLowerCase().includes(searchQuery.toLowerCase()) // option name ko lower case mein badal kar search query se compare kar rahe hain.
//   );

//   const handleSelectOption = (option) => { // handleSelectOption function jo selected option ko handle karega.
//     if (isCheckboxMenu) { // agar checkboxes menu hai.
//       const currentIndex = selectedOptions.findIndex((o) => o.id === option.id); // selectedOptions mein current option ka index find kar rahe hain.
//       const newSelectedOptions = [...selectedOptions]; // naye selected options ka array banate hain.

//       if (currentIndex === -1) { // agar option selected nahi hai.
//         newSelectedOptions.push(option); // toh option ko selected options mein add kar rahe hain.
//       } else {
//         newSelectedOptions.splice(currentIndex, 1); // agar option already selected hai, toh usse hata rahe hain.
//       }

//       setSelectedOptions(newSelectedOptions); // selected options ko update kar rahe hain.
//     } else {
//       // agar checkboxes nahi hain (Centre aur Item ke liye)
//       setSelectedOptions([option]); // sirf ek option ko selected kar rahe hain.
//       onClose(); // menu ko close kar rahe hain.
//     }
//   };

//   return (
//     <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={onClose}> // Menu ko open karte hain jab anchorEl set hai.

//         <TextField // TextField component jo search input provide karega.
//           fullWidth // isko full width banate hain.
//           placeholder={`Search ${placeholder}...`} // placeholder ko set kar rahe hain.
//           value={searchQuery} // searchQuery ko value ke roop mein set kar rahe hain.
//           onChange={(e) => setSearchQuery(e.target.value)} // jab user input kare, toh searchQuery ko update karte hain.
//           autoFocus // is input ko automatically focus karne ke liye set kar rahe hain.
//         />

//       {filteredOptions.map((option) => ( // filteredOptions mein se har option ko map kar rahe hain.
//         <MenuItem key={option.id} onClick={() => handleSelectOption(option)}> // har option ke liye MenuItem bana rahe hain.
//           {isCheckboxMenu && ( // agar checkboxes menu hai.
//             <Checkbox // Checkbox component dikhate hain.
//               checked={selectedOptions.some((o) => o.id === option.id)} // agar option selected hai toh checkbox ko checked banate hain.
//             />
//           )}
//           <ListItemText primary={option.name} /> // option ka naam dikhate hain.
//         </MenuItem>
//       ))}
//     </Menu>
//   );
// };

// export default CustomMenuSearch; // CustomMenuSearch component ko export kar rahe hain.
