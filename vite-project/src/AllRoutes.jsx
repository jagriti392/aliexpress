// import React from 'react';
// import { Route, Routes } from 'react-router-dom';

//  const Home = () => <div>Home Page</div>;

 
//  const TopBrands = () => <div>Top Brands Page</div>;
//  const HomeGarden = () => <div>Home & Garden Page</div>;
//  const HomeAppliances = () => <div>Home & Appliances Page</div>;
//  const Furniture = () => <div>Furniture Page</div>;

// const AllRoutes = () => {
//   return (
//     <Routes>
//       <Route path="/" element={<Home />} />
//       <Route path="/topbrands" element={<TopBrands />} />
//       <Route path="/homegarden" element={<HomeGarden />} />
//       <Route path="/homeappliances" element={<HomeAppliances />} />
//       <Route path="/furniture" element={<Furniture />} />
//     </Routes>
//   );
// };

// export default AllRoutes;



















import React from 'react';
import { Route, Routes } from 'react-router-dom';
// import Home from './Pages/Home';
import Bestsellers from './Pages/Bestsellers';
import TopBrands from './Pages/TopBrands';
import HomeGarden from './Pages/HomeGarden';
import HomeAppliances from './Pages/HomeAppliances';
import Furniture from './Pages/Furniture';


const AllRoutes = () => {
  return (
    <Routes>
      {/* <Route path="/" element={<Home />} /> */}
      <Route path="/bestsellers" element={<Bestsellers />} /> 
      <Route path="/topbrands" element={<TopBrands />} />
      <Route path="/homegarden" element={<HomeGarden />} />
      <Route path="/homeappliances" element={<HomeAppliances />} />
      <Route path="/Furniture" element={<Furniture />} />
    </Routes>
  );
};

export default AllRoutes;
