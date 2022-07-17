import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Products from './Pages/Products/Products';
import NavMenu from './Pages/Shared/NavMenu';
import { Routes, Route } from "react-router-dom";
import ProductDetails from './Pages/PrductDetails/ProductDetails';
import { createContext, useState } from 'react';
import Home from './Pages/Home/Home';
import Footer from './Pages/Shared/Footer';
import { Toaster } from 'react-hot-toast';

const SearchContext = createContext();
function App() {
  const [searchData, setSearchData] = useState();
  return (
    <div>
      <SearchContext.Provider value={[searchData, setSearchData]}>
        <NavMenu />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:id" element={<ProductDetails />} />
        </Routes>
        <Footer />
      </SearchContext.Provider>
      <Toaster />
    </div>
  );
}

export default App;
export { SearchContext };
