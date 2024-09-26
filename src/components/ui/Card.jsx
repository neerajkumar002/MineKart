import Button from "./Button";
import "../../styles/card.css";
import "../../styles/utilis.css";

const Card = ({ title, img, price, description }) => {
  return (
    <div className="product-card flex flex-col items-center gap-1">
      <div className="product-image">
        <img src={img} alt={title} />
      </div>
      <p>{title}</p>
      <p className="product-price">${price}</p>
      <div className="btn-container">
        <Button label="Add To Cart" />
      </div>
    </div>
  );
};

export default Card;
