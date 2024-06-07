import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [isWelcomeDropdownOpen, setWelcomeDropdownOpen] = useState(false);
  const [isCategoriesDropdownOpen, setCategoriesDropdownOpen] = useState(false);
  const [isMoreDropdownOpen, setMoreDropdownOpen] = useState(false);

  const toggleWelcomeDropdown = () => {
    setWelcomeDropdownOpen(!isWelcomeDropdownOpen);
  };

  const toggleCategoriesDropdown = () => {
    setCategoriesDropdownOpen(!isCategoriesDropdownOpen);
  };

  const toggleMoreDropdown = () => {
    setMoreDropdownOpen(!isMoreDropdownOpen);
  };

  return (
    <>
      <div className="navbar">
        <div className="container">
          <div className="logo">ALIEXPRESS</div>
          <div className="vertical-line"></div>
          <div className="logo">EURO2024</div>
          <div className="search-bar">
            <input type="text" placeholder="Bluetooth earbuds" />
            <button>🔍</button>
          </div>
          <div className="info">Download the Aliexpress app</div>
          <div className="currency">EN/INR</div>
          <div className="auth" onClick={toggleWelcomeDropdown}>
            Welcome Sign in/Register
            {isWelcomeDropdownOpen && (
              <div className="welcome-dropdown">
                <button>Sign In</button>
                <button>Register</button>
                <hr />
                <div>1. My Orders</div>
                <div>2. My Coins</div>
                <div>3. Message Center</div>
                <div>4. Payment</div>
                <div>5. Wish List</div>
                <div>6. My Coupons</div>
                <hr />
                <div>Setting</div>
                <div>Aliexpress Business</div>
                <div>DS Center</div>
                <div>Seller Log In</div>
              </div>
            )}
          </div>
          <div className="cart">Cart 🛒</div>
        </div>

        <div className="container">
           <div className="menu-box">
            <button className="menu-icon">☰</button>
            <div className="dropdown">
              <span className="dropbtn" onClick={toggleCategoriesDropdown}>All Categories</span>
              {isCategoriesDropdownOpen && (
                <div className="dropdown-content">
                  <a href="#">Home & Garden</a>
                  <a href="#">Home & Appliances</a>
                </div>
              )}
            </div> 


</div>





        
    

        
          <Link to="/bestsellers" className="nav-link">Bestsellers</Link>
          <Link to="/topbrands" className="nav-link">Top Brands</Link>
          <Link to="/homegarden" className="nav-link">Home & Garden</Link>
          <Link to="/homeappliances" className="nav-link">Home & Appliances</Link>
          <Link to="/furniture" className="nav-link">Furniture</Link>
          <div className="dropdown">
            <span className="dropdown-toggle" onClick={toggleMoreDropdown}>More</span>
            {isMoreDropdownOpen && (
              <div className="dropdown-menu">
                <div className="dropdown-item">Hair Extensions</div>
                <div className="dropdown-item">Men's Clothing</div>
                <div className="dropdown-item">Accessories</div>
                <div className="dropdown-item">Consumer</div>
                <div className="dropdown-item">Home</div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
// import { useState } from 'react';

// import { Grid, GridItem, Button, Box, Text, Center } from "@chakra-ui/react";
// import { FaFacebook, FaTwitter, FaApple, FaInstagram } from "react-icons/fa";
// import { Link } from 'react-router-dom';
// import { Box, Flex, Input, Button, Text, Spacer, Menu, MenuButton, MenuList, MenuItem } from '@chakra-ui/react';

// const Navbar = () => {
//   return 
//   const [isWelcomeDropdownOpen, setWelcomeDropdownOpen] = useState(false);
//   const [isCategoriesDropdownOpen, setCategoriesDropdownOpen] = useState(false);
//   const [isMoreDropdownOpen, setMoreDropdownOpen] = useState(false);

//   const toggleWelcomeDropdown = () => {
//     setWelcomeDropdownOpen(!isWelcomeDropdownOpen);
//   };

//   const toggleCategoriesDropdown = () => {
//     setCategoriesDropdownOpen(!isCategoriesDropdownOpen);
//   };

//   const toggleMoreDropdown = () => {
//     setMoreDropdownOpen(!isMoreDropdownOpen);
//   };

//   return (
//     <Box as="nav" bgColor="gray.800" color="white">
//       <Flex alignItems="center" justifyContent="space-between" p={4}>
//         <Text fontSize="xl">ALIEXPRESS</Text>
//         <Box borderLeft="1px solid white" mx={4} height="30px"></Box>
//         <Text fontSize="xl">EURO2024</Text>
//         <Flex alignItems="center">
//           <Input type="text" placeholder="Bluetooth earbuds" mr={2} />
//           <Button>🔍</Button>
//         </Flex>
//         <Text>Download the Aliexpress app</Text>
//         <Text>EN/INR</Text>
//         <Box onClick={toggleWelcomeDropdown} cursor="pointer">
//           <Text>Welcome Sign in/Register</Text>
//           {isWelcomeDropdownOpen && (
//             <Box bgColor="pink" p={2} mt={2} boxShadow="md">
//               <Button variant="ghost">Sign In</Button>
//               <Button variant="ghost">Register</Button>
//               <hr />
//               <Text>1. My Orders</Text>
//               <Text>2. My Coins</Text>
//               <Text>3. Message Center</Text>
//               <Text>4. Payment</Text>
//               <Text>5. Wish List</Text>
//               <Text>6. My Coupons</Text>
//               <hr />
//               <Text>Setting</Text>
//               <Text>Aliexpress Business</Text>
//               <Text>DS Center</Text>
//               <Text>Seller Log In</Text>
//             </Box>
//           )}
//         </Box>
//         <Text cursor="pointer">Cart 🛒</Text>
//       </Flex>
//       <Flex alignItems="center" justifyContent="space-between" p={4}>
//         <Flex alignItems="center">
//           <Menu>
//             <MenuButton as={Button} variant="outline">All Categories</MenuButton>
//             <MenuList>
//               <MenuItem>Home & Garden</MenuItem>
//               <MenuItem>Home & Appliances</MenuItem>
//             </MenuList>
//           </Menu>
//           <Spacer />
//           <Link to="/bestsellers" className="nav-link">Bestsellers</Link>
//           <spacer/>
//           <Link to="/topbrands" className="nav-link">Top Brands</Link>
//           <spacer/>
//           <spacer/>
//           <Link to="/homegarden" className="nav-link">Home & Garden</Link>
//           <Link to="/homeappliances" className="nav-link">Home & Appliances</Link>
//           <Link to="/furniture" className="nav-link">Furniture</Link>
//           <Menu>
//             <MenuButton as={Button} variant="outline">More</MenuButton>
//             <MenuList>
//               <MenuItem>Hair Extensions</MenuItem>
//               <MenuItem>Men's Clothing</MenuItem>
//               <MenuItem>Accessories</MenuItem>
//               <MenuItem>Consumer</MenuItem>
//               <MenuItem>Home</MenuItem>
//             </MenuList>
//           </Menu>
//         </Flex>
//       </Flex>
//     </Box>








        

 
