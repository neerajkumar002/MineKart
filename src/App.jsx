import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/shopping-view/Home";
import NotFound from "./pages/not-found/NotFound";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="*" element={<NotFound />} />
      <Route path="/auth/login" element={<Login />} />
      <Route path="/auth/register" element={<Register />} />
    </Routes>
  );
}

export default App;
