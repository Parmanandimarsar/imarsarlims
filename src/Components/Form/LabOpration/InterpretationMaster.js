// import React, { useState, useEffect } from "react";
// import {
//   Box,
//   Divider,
//   FormControl,
//   FormLabel,
//   Grid,
//   TextField,
//   Typography,
//   MenuItem,
//   Menu,
//   Checkbox,
//   ListItemText,
// } from "@mui/material";

// // Sample options data
// const centreOptions = [
//   { id: 1, name: "Centre 1" },
//   { id: 2, name: "Centre 2" },
// ];

// const departmentOptions = [
//   { id: 1, name: "Department 1" },
//   { id: 2, name: "Department 2" },
// ];

// const itemOptionsByDepartment = {
//   "Department 1": [
//     { id: 1, name: "Item 1" },
//     { id: 2, name: "Item 2" },
//   ],
//   "Department 2": [
//     { id: 3, name: "Item 3" },
//     { id: 4, name: "Item 4" },
//   ],
// };

// const InterpretationMaster = () => {
//   const [centre, setCentre] = useState("");
//   const [departments, setDepartments] = useState([]);
//   const [items, setItems] = useState([]);
//   const [itemOptions, setItemOptions] = useState([]);
//   const [searchQueryCentre, setSearchQueryCentre] = useState("");
//   const [searchQueryDepartment, setSearchQueryDepartment] = useState("");
//   const [searchQueryItem, setSearchQueryItem] = useState("");
//   const [anchorElCentre, setAnchorElCentre] = useState(null);
//   const [anchorElDepartment, setAnchorElDepartment] = useState(null);
//   const [anchorElItem, setAnchorElItem] = useState(null);

//   useEffect(() => {
//     // Update item options based on selected departments
//     const selectedItems = departments.flatMap(
//       (dept) => itemOptionsByDepartment[dept.name] || []
//     );
//     setItemOptions(selectedItems);
//     setItems([]); // Reset items when department selection changes
//   }, [departments]);

//   const handleMenuOpenCentre = (event) => {
//     setAnchorElCentre(event.currentTarget);
//   };

//   const handleMenuCloseCentre = () => {
//     setAnchorElCentre(null);
//     setSearchQueryCentre(""); // Reset search when menu closes
//   };

//   const handleSelectCentre = (value) => {
//     setCentre(value);
//     handleMenuCloseCentre();
//   };

//   const handleMenuOpenDepartment = (event) => {
//     setAnchorElDepartment(event.currentTarget);
//   };

//   const handleMenuCloseDepartment = () => {
//     setAnchorElDepartment(null);
//     setSearchQueryDepartment(""); // Reset search when menu closes
//   };

//   const handleSelectDepartment = (value) => {
//     const updatedDepartments = [...departments, value];
//     setDepartments(updatedDepartments);
//     handleMenuCloseDepartment();
//   };

//   const handleMenuOpenItem = (event) => {
//     setAnchorElItem(event.currentTarget);
//   };

//   const handleMenuCloseItem = () => {
//     setAnchorElItem(null);
//     setSearchQueryItem(""); // Reset search when menu closes
//   };

//   const handleSelectItem = (value) => {
//     setItems([value]);
//     handleMenuCloseItem();
//   };

//   // Filtered options based on search query
//   const filteredCentreOptions = centreOptions.filter((option) =>
//     option.name.toLowerCase().includes(searchQueryCentre.toLowerCase())
//   );

//   const filteredDepartmentOptions = departmentOptions.filter((option) =>
//     option.name.toLowerCase().includes(searchQueryDepartment.toLowerCase())
//   );

//   const filteredItemOptions = itemOptions.filter((option) =>
//     option.name.toLowerCase().includes(searchQueryItem.toLowerCase())
//   );

//   return (
//     <div className="mb-[50px] pl-2">
//       <Box className="bg-white rounded-lg shadow-lg" autoComplete="off">
//         {/* Header */}
//         <Box
//           className="flex justify-between items-center mb-1 text-white p-1 rounded-t-lg project-thim"
//           style={{ backgroundColor: "#1976d2" }}
//         >
//           <Typography variant="h6" className="pl-1" style={{ color: "#fff" }}>
//             Interpretation Master
//           </Typography>
//         </Box>
//         <Divider className="divider" />

//         {/* Form Grid */}
//         <Grid container spacing={2} p={2}>
//           {/* Centre Field with Input for Search */}
//           <Grid item xs={12} sm={6} md={4} lg={3}>
//             <FormControl fullWidth>
//               <Grid container alignItems="center">
//                 <Grid
//                   item
//                   xs={3}
//                   sx={{ mr: "3px" }}
//                   className="formlableborder"
//                 >
//                   <FormLabel>Centre</FormLabel>
//                 </Grid>
//                 <Grid item xs={8}>
//                   <TextField
//                     fullWidth
//                     onClick={handleMenuOpenCentre}
//                     value={centre}
//                     placeholder="Select Centre"
//                     onChange={() => {}} // Prevent typing in the input
//                     InputProps={{
//                       readOnly: true, // Make the input read-only
//                     }}
//                   />
//                   <Menu
//                     anchorEl={anchorElCentre}
//                     open={Boolean(anchorElCentre)}
//                     onClose={handleMenuCloseCentre}
//                   >
//                     <MenuItem disableRipple>
//                       <TextField
//                         fullWidth
//                         placeholder="Search Centre..."
//                         value={searchQueryCentre}
//                         onChange={(e) => setSearchQueryCentre(e.target.value)}
//                         autoFocus
//                       />
//                     </MenuItem>
//                     {filteredCentreOptions.map((option) => (
//                       <MenuItem
//                         key={option.id}
//                         onClick={() => handleSelectCentre(option.name)}
//                       >
//                         {option.name}
//                       </MenuItem>
//                     ))}
//                   </Menu>
//                 </Grid>
//               </Grid>
//             </FormControl>
//           </Grid>

//           {/* Department Field with Input for Search */}
//           <Grid item xs={12} sm={6} md={4} lg={3}>
//             <FormControl fullWidth>
//               <Grid container alignItems="center">
//                 <Grid
//                   item
//                   xs={3}
//                   sx={{ mr: "3px" }}
//                   className="formlableborder"
//                 >
//                   <FormLabel>Department</FormLabel>
//                 </Grid>
//                 <Grid item xs={8}>
//                   <TextField
//                     fullWidth
//                     onClick={handleMenuOpenDepartment}
//                     value={
//                       departments.length
//                         ? departments.map((dept) => dept.name).join(", ")
//                         : ""
//                     }
//                     placeholder="Select Department"
//                     onChange={() => {}} // Prevent typing in the input
//                     InputProps={{
//                       readOnly: true, // Make the input read-only
//                     }}
//                   />
//                   <Menu
//                     anchorEl={anchorElDepartment}
//                     open={Boolean(anchorElDepartment)}
//                     onClose={handleMenuCloseDepartment}
//                   >
//                     <MenuItem disableRipple>
//                       <TextField
//                         fullWidth
//                         placeholder="Search Department..."
//                         value={searchQueryDepartment}
//                         onChange={(e) =>
//                           setSearchQueryDepartment(e.target.value)
//                         }
//                         autoFocus
//                       />
//                     </MenuItem>
//                     {filteredDepartmentOptions.map((option) => (
//                       <MenuItem
//                         key={option.id}
//                         onClick={() => handleSelectDepartment(option)}
//                       >
//                         <Checkbox
//                           checked={departments.some(
//                             (dept) => dept.id === option.id
//                           )}
//                         />
//                         <ListItemText primary={option.name} />
//                       </MenuItem>
//                     ))}
//                   </Menu>
//                 </Grid>
//               </Grid>
//             </FormControl>
//           </Grid>

//           {/* Item Field with Input for Search */}
//           <Grid item xs={12} sm={6} md={4} lg={3}>
//             <FormControl fullWidth>
//               <Grid container alignItems="center">
//                 <Grid
//                   item
//                   xs={3}
//                   sx={{ mr: "3px" }}
//                   className="formlableborder"
//                 >
//                   <FormLabel>Item</FormLabel>
//                 </Grid>
//                 <Grid item xs={8}>
//                   <TextField
//                     fullWidth
//                     onClick={handleMenuOpenItem}
//                     value={items.length ? items.join(", ") : ""}
//                     placeholder="Select Item"
//                     onChange={() => {}} // Prevent typing in the input
//                     InputProps={{
//                       readOnly: true, // Make the input read-only
//                     }}
//                   />
//                   <Menu
//                     anchorEl={anchorElItem}
//                     open={Boolean(anchorElItem)}
//                     onClose={handleMenuCloseItem}
//                   >
//                     <MenuItem disableRipple>
//                       <TextField
//                         fullWidth
//                         placeholder="Search Item..."
//                         value={searchQueryItem}
//                         onChange={(e) => setSearchQueryItem(e.target.value)}
//                         autoFocus
//                       />
//                     </MenuItem>
//                     {filteredItemOptions.map((item) => (
//                       <MenuItem
//                         key={item.id}
//                         onClick={() => handleSelectItem(item.name)}
//                       >
//                         {item.name}
//                       </MenuItem>
//                     ))}
//                   </Menu>
//                 </Grid>
//               </Grid>
//             </FormControl>
//           </Grid>
//         </Grid>
//       </Box>
//     </div>
//   );
// };

// export default InterpretationMaster;







import React, { useState, useEffect } from "react";
import {
  Box,
  Divider,
  FormControl,
  FormLabel,
  Grid,
  TextField,
  Typography,
} from "@mui/material";

import CustomMenuSearch from "../../ConstantComponents/CustomMenuSearch";

// Sample options data
const centreOptions = [
  { id: 1, name: "Centre 1" },
  { id: 2, name: "Centre 2" },
];

const departmentOptions = [
  { id: 1, name: "Department 1" },
  { id: 2, name: "Department 2" },
];

const itemOptionsByDepartment = {
  "Department 1": [
    { id: 1, name: "Item 1" },
    { id: 2, name: "Item 2" },
  ],
  "Department 2": [
    { id: 3, name: "Item 3" },
    { id: 4, name: "Item 4" },
  ],
};

const InterpretationMaster = () => {
  const [centre, setCentre] = useState("");
  const [departments, setDepartments] = useState([]);
  const [items, setItems] = useState([]);
  const [itemOptions, setItemOptions] = useState([]);
  const [anchorElCentre, setAnchorElCentre] = useState(null);
  const [anchorElDepartment, setAnchorElDepartment] = useState(null);
  const [anchorElItem, setAnchorElItem] = useState(null);

  useEffect(() => {
    // Update item options based on selected departments
    const selectedItems = departments.flatMap(
      (dept) => itemOptionsByDepartment[dept.name] || []
    );
    setItemOptions(selectedItems);
    setItems([]); // Reset items when department selection changes
  }, [departments]);

  return (
    <div className="mb-[50px] pl-2">
      <Box className="bg-white rounded-lg shadow-lg" autoComplete="off">
        {/* Header */}
        <Box className="flex justify-between items-center mb-1 text-white p-1 rounded-t-lg project-thim" style={{ backgroundColor: "#1976d2" }}>
          <Typography variant="h6" className="pl-1" style={{ color: "#fff" }}>
            Interpretation Master
          </Typography>
        </Box>
        <Divider className="divider" />

        {/* Form Grid */}
        <Grid container spacing={2} p={2}>
          {/* Centre Field */}
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <FormControl fullWidth>
              <Grid container alignItems="center">
                <Grid item xs={3} sx={{ mr: "3px" }} className="formlableborder">
                  <FormLabel>Centre</FormLabel>
                </Grid>
                <Grid item xs={8}>
                  <TextField
                    fullWidth
                    onClick={(e) => setAnchorElCentre(e.currentTarget)}
                    value={centre}
                    placeholder="Select Centre"
                    onChange={() => {}}
                    InputProps={{
                      readOnly: true,
                    }}
                  />
                  <CustomMenuSearch
                    options={centreOptions}
                    selectedOptions={[{ id: centreOptions.find(option => option.name === centre)?.id, name: centre }]} // Adapt to your selected options
                    setSelectedOptions={(value) => setCentre(value[0]?.name || "")} // Set selected centre
                    placeholder="Centre"
                    anchorEl={anchorElCentre}
                    onClose={() => setAnchorElCentre(null)}
                  />
                </Grid>
              </Grid>
            </FormControl>
          </Grid>

          {/* Department Field */}
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <FormControl fullWidth>
              <Grid container alignItems="center">
                <Grid item xs={3} sx={{ mr: "3px" }} className="formlableborder">
                  <FormLabel>Department</FormLabel>
                </Grid>
                <Grid item xs={8}>
                  <TextField
                    fullWidth
                    onClick={(e) => setAnchorElDepartment(e.currentTarget)}
                    value={departments.length ? departments.map((dept) => dept.name).join(", ") : ""}
                    placeholder="Select Department"
                    onChange={() => {}}
                    InputProps={{
                      readOnly: true,
                    }}
                  />
                  <CustomMenuSearch
                    options={departmentOptions}
                    selectedOptions={departments}
                    setSelectedOptions={setDepartments}
                    placeholder="Department"
                    anchorEl={anchorElDepartment}
                    isCheckboxMenu={true}
                    onClose={() => setAnchorElDepartment(null)}
                  />
                </Grid>
              </Grid>
            </FormControl>
          </Grid>

          {/* Item Field */}
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <FormControl fullWidth>
              <Grid container alignItems="center">
                <Grid item xs={3} sx={{ mr: "3px" }} className="formlableborder">
                  <FormLabel>Item</FormLabel>
                </Grid>
                <Grid item xs={8}>
                  <TextField
                    fullWidth
                    onClick={(e) => setAnchorElItem(e.currentTarget)}
                    value={items.length ? items.join(", ") : ""}
                    placeholder="Select Item"
                    onChange={() => {}}
                    InputProps={{
                      readOnly: true,
                    }}
                  />
                  <CustomMenuSearch
                    options={itemOptions}
                    selectedOptions={items.map(item => ({ id: item, name: item }))}
                    setSelectedOptions={(value) => setItems(value.map(v => v.name))}
                    placeholder="Item"
                    anchorEl={anchorElItem}
                    onClose={() => setAnchorElItem(null)}
                  />
                </Grid>
              </Grid>
            </FormControl>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default InterpretationMaster;

