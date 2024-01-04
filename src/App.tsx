import "./App.css";
import { Route, Routes } from "react-router-dom";
import Drawer from "./components/Drawer";
import SlowApiPage from "./components/SlowApiPage";

function App() {
  return (
    <Drawer>
      <Routes>
        <Route path="/" element={<h1>Home</h1>} />
        <Route path="slow-api" element={<SlowApiPage />} />
      </Routes>
    </Drawer>
  );
}

export default App;
