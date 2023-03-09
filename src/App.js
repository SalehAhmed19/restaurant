import { Route, Routes } from "react-router-dom";
import "./App.css";
import CategoryMenu from "./Components/Isolated/CategoryMenu";
import DrawerAppBar from "./Components/Shared/DrawerAppBar";
import Footer from "./Components/Shared/Footer";
import Cart from "./Pages/Cart";
import FoodDetails from "./Pages/FoodDetails";
import Home from "./Pages/Home";
import OurMenu from "./Pages/OurMenu";

function App() {
  return (
    <div style={{ fontFamily: "Rubik" }}>
      <DrawerAppBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/our-menu" element={<OurMenu />} />
        <Route path="/our-menu/:id" element={<FoodDetails />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/:name" element={<CategoryMenu />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
