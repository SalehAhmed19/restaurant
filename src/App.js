import { Route, Routes } from "react-router-dom";
import "./App.css";
import CategoryMenu from "./Components/Isolated/CategoryMenu";
import DrawerAppBar from "./Components/Shared/DrawerAppBar";
import Footer from "./Components/Shared/Footer";
import Login from "./Pages/Authentication/Login";
import Registration from "./Pages/Authentication/Registration";
import RequireAuth from "./Pages/Authentication/RequireAuth";
import Cart from "./Pages/Cart";
import FoodDetails from "./Pages/FoodDetails";
import Home from "./Pages/Home";
import OurMenu from "./Pages/OurMenu";
import Checkout from "./Pages/Payment/Checkout";

function App() {
  return (
    <div
      className="pt-28 flex flex-col min-h-screen"
      style={{ fontFamily: "Rubik" }}
    >
      <DrawerAppBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/our-menu" element={<OurMenu />} />
        <Route
          path="/our-menu/:id"
          element={
            <RequireAuth>
              <FoodDetails />
            </RequireAuth>
          }
        />
        <Route
          path="/cart"
          element={
            <RequireAuth>
              <Cart />
            </RequireAuth>
          }
        />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/login" element={<Login />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/:name" element={<CategoryMenu />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;

// backend api url: https://kayi-tribe-restuarant.onrender.com
