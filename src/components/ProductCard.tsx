import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, handleCartQuantity } from "../store/cartSlice.ts";
import { FaMinus, FaPlus } from "react-icons/fa";
import Button from "./Button.tsx";
import StarRating from "./StarRating.tsx";
import { RootState } from "../store/index.ts";

interface ProductCardProps {
  id: number;
  title: string;
  price: number;
  image: string;
  quantity: number;
  rating: any;
}

const ProductCard: React.FC<ProductCardProps> = ({
  id,
  title,
  price,
  image,
  rating,
}) => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state: RootState) => state.cart.cartItems);
  const cartItem = cartItems.find((item) => item.id === id);

  //Function for handle product add to cart
  const handleAddToCart = () => {
    const cart: ProductCardProps[] = JSON.parse(
      localStorage.getItem("cart") || "[]"
    );

    //Otherwise add product into the cart
    cart.push({ id, image, title, price, quantity: 1, rating });
    localStorage.setItem("cart", JSON.stringify(cart));
    dispatch(addToCart({ id, title, price, image, quantity: 1 }));
  };

  return (
    <div className="product-card border border-gray-300 rounded-lg p-4 text-center shadow-lg bg-white hover:scale-105 transition-transform cursor-pointer">
      {/* Product image */}
      <img src={image} alt={title} className="w-full h-36 object-contain" />
      {/* Description and tiel of the prodct */}
      <h5
        className="mt-4 text-lg font-semibold text-gray-500 h-[90px] overflow-hidden text-ellipsis whitespace-normal"
        style={{
          display: "-webkit-box",
          WebkitBoxOrient: "vertical",
          WebkitLineClamp: 3,
        }}
      >
        {title}
      </h5>
      {/* Price tag */}
      <p className="text-xl font-semibold">${price.toFixed(2)}</p>
      {/* Rating of product */}
      <StarRating rating={rating?.rate || 1} />
      {/* Add to cart button */}
      {cartItem ? (
        <div className="flex space-between">
          <Button
            onClick={() =>
              dispatch(handleCartQuantity({ id, type: "decrement" }))
            }
            label={<FaMinus />}
          />
          <span className="mt-4 flex items-center">{cartItem.quantity}</span>
          <Button
            onClick={() =>
              dispatch(handleCartQuantity({ id, type: "increment" }))
            }
            label={<FaPlus />}
            reverseBackground={true}
          />
        </div>
      ) : (
        <Button onClick={handleAddToCart} label={"Add to Cart"} />
      )}
    </div>
  );
};

export default ProductCard;
