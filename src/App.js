import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Products from './Pages/Products/Products';
import NavMenu from './Pages/Shared/NavMenu';
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <NavMenu />
      <Routes>
        <Route path="/" element={<Products />} />
      </Routes>
    </div>
  );
}

export default App;
