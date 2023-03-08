import { Route, Routes } from "react-router-dom";
import "./App.css";
import CategoryMenu from "./Components/Isolated/CategoryMenu";
import DrawerAppBar from "./Components/Shared/DrawerAppBar";
import Home from "./Pages/Home";

function App() {
  return (
    <div style={{ fontFamily: "Rubik" }}>
      <DrawerAppBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:name" element={<CategoryMenu />} />
      </Routes>
    </div>
  );
}

export default App;
