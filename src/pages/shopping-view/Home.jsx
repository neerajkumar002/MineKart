import { useEffect } from "react";
import Card from "../../components/ui/Card";
import { useDispatch, useSelector } from "react-redux";
import { fetchProductsDetails } from "../../store/shop/products-slice";
import "../../styles/shopping-view/home.css";
import { WashingMachine, Gem, Shirt, Flower } from "lucide-react";

const categoriesWithIcon = [
  { id: "electronics", label: "Electronics", icon: WashingMachine },
  { id: "jewelery", label: "Jewelery", icon: Gem },
  { id: "men's clothing", label: "Men's Clothing", icon: Shirt },
  { id: "women's clothing", label: "Women's Clothing", icon: Flower },
];

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
    <div>
      <section className="category-section">
        <div className="category-heading">
          <h1>Shop By Category</h1>
        </div>
        <div className="category-content">
          {categoriesWithIcon.map((categoryItem) => (
            <div className="category-item" key={categoryItem.id}>
              <categoryItem.icon size={40} className="category-icon" />
              <span>{categoryItem.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* <div className="grid products-container">
        {productsList.map(({ id, image, title, description, price }) => (
          <Card
            key={id}
            img={image}
            title={title}
            description={description}
            price={price}
          />
        ))}
      </div> */}
    </div>
  );
};

export default Home;
