import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/shopping-view/Home";
import NotFound from "./pages/not-found/NotFound";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import ShoppingLayout from "./components/shopping-view/Layout";

function App() {
  return (
    <Routes>
      {/* <Route path="/" element={<Home />} /> */}
      <Route path="*" element={<NotFound />} />
      <Route path="/" element={<ShoppingLayout />}>
        <Route path="/home" element={<Home />} />
      </Route>
      <Route path="/auth/login" element={<Login />} />
      <Route path="/auth/register" element={<Register />} />
    </Routes>
  );
}

export default App;
