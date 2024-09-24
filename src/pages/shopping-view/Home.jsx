import Card from "../../components/ui/Card";

const Home = () => {
  return (
    <div>
      Shopping view home
      <Card
        img={
          "https://chriscross.in/cdn/shop/files/ChrisCrossPlainNavyBlueT-Shirt_1024x.jpg?v=1695720154"
        }
        title="Blue T-shirt"
        description="this is a blue tshirt it is best and humen clothing"
        price="200"
      />
    </div>
  );
};

export default Home;
