import { useEffect } from "react";
import Card from "../../components/ui/Card";
import { useDispatch, useSelector } from "react-redux";
import { fetchProductsDetails } from "../../store/shop/products-slice";
import "../../styles/home.css";
const Home = () => {
  const dispatch = useDispatch();
  const { productsList, isLoading } = useSelector(
    (state) => state.shopProducts
  );
  console.log(productsList);
  useEffect(() => {
    dispatch(fetchProductsDetails());
  }, [dispatch]);

  if (isLoading) return <div>Loading..</div>;
  return (
    <div className="grid products-container">
      {productsList.map(({ id, image, title, description, price }) => (
        <Card
          key={id}
          img={image}
          title={title}
          description={description}
          price={price}
        />
      ))}
      {/* 
      <Card
        img={
          "https://chriscross.in/cdn/shop/files/ChrisCrossPlainNavyBlueT-Shirt_1024x.jpg?v=1695720154"
        }
        title="Blue T-shirt"
        description="this is a blue tshirt it is best and humen clothing"
        price="200"
      /> */}
    </div>
  );
};

export default Home;
