import "./App.css";
import DrawerAppBar from "./Components/Shared/DrawerAppBar";
import Home from "./Pages/Home";

function App() {
  return (
    <div style={{ fontFamily: "Rubik" }}>
      <DrawerAppBar />
      <Home />
    </div>
  );
}

export default App;
