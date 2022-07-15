import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Products from './Pages/Products/Products';
import NavMenu from './Pages/Shared/NavMenu';
import { Routes, Route } from "react-router-dom";
import ProductDetails from './Pages/PrductDetails/ProductDetails';

function App() {
  return (
    <div>
      <NavMenu />
      <Routes>
        <Route path="/" element={<Products />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<ProductDetails />} />
      </Routes>
    </div>
  );
}

export default App;
