import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/shopping-view/Home";
import NotFound from "./pages/not-found/NotFound";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
