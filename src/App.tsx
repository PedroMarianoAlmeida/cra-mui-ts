import "./App.css";
import { Route, Routes } from "react-router-dom";
import Drawer from "./components/Drawer";
import SlowApiPage from "./components/SlowApiPage";
import useSlowApi from "./hooks/useSlowApi";
import SlowApiPage2 from "./components/SlowApiPage2";

function App() {
  const loadedData = useSlowApi();
  return (
    <Drawer>
      <Routes>
        <Route path="/" element={<h1>Home</h1>} />
        <Route path="slow-api" element={<SlowApiPage />} />
        <Route
          path="slow-api-2"
          element={<SlowApiPage2 loadedData={loadedData} />}
        />
      </Routes>
    </Drawer>
  );
}

export default App;
