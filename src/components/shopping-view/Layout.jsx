import { Outlet } from "react-router-dom";
import ShoppingHeader from "./Header";

const ShoppingLayout = () => {
  return (
    <div className="flex flex-col">
      <ShoppingHeader />
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default ShoppingLayout;
