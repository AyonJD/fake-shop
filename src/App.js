import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Products from './Pages/Products/Products';
import NavMenu from './Pages/Shared/NavMenu';
import { Routes, Route } from "react-router-dom";
import ProductDetails from './Pages/PrductDetails/ProductDetails';
import { createContext, useState } from 'react';
import Home from './Pages/Home/Home';

const SearchContext = createContext();
function App() {
  const [searchData, setSearchData] = useState();
  return (
    <div>
      <SearchContext.Provider value={[ searchData, setSearchData ]}>
      <NavMenu />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<ProductDetails />} />
        </Routes>
      </SearchContext.Provider>
    </div>
  );
}

export default App;
export { SearchContext };
