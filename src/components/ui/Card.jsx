import Button from "./Button";

const Card = ({ img, title, description, price }) => {
  return (
    <div>
      <div>
        <img src={img} alt={title} width={300} />
      </div>
      <p>{title}</p>
      <p>{description}</p>
      <p>{price}</p>
      <div>
        <Button label="Add To Cart" />
      </div>
    </div>
  );
};

export default Card;
