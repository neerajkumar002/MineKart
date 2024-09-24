import { Outlet } from "react-router-dom";
import ShoppingHeader from "./Header";

  const ShoppingLayout = () => {
  return (
    <div className="flex">
      <ShoppingHeader />
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default ShoppingLayout;
