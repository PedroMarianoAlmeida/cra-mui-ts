import "./App.css";
import { Route, Routes } from "react-router-dom";
import Drawer from "./components/Drawer";

function App() {
  return (
    <Drawer>
      <Routes>
        <Route path="/" element={<h1>Home</h1>} />
        <Route path="slow-api" element={<h1>About</h1>} />
      </Routes>
    </Drawer>
  );
}

export default App;
