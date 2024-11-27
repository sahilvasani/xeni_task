import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store";
import { handleCartQuantity } from "../store/cartSlice.ts";
import Button from "../components/Button.tsx";
import { FaMinus, FaPlus } from "react-icons/fa";

const Cart: React.FC = () => {
  const cartItems = useSelector((state: RootState) => state.cart.cartItems);
  const dispatch = useDispatch();

  const totalAmount = cartItems.reduce(
    (sum, item) =>
      sum + (item.quantity || 1) * parseFloat(item.price.toFixed(2)),
    0
  );

  return (
    <div className="p-1 max-w-screen-lg mx-auto">
      <h2 className="mb-5 text-center">Cart</h2>
      {cartItems.length === 0 ? (
        <p className="text-center text-lg text-gray-500">Your cart is empty.</p>
      ) : (
        <>
          <ul className="list-none p-0 m-0 flex flex-col gap-1 h-[70vh] overflow-auto">
            {cartItems.map((item) => (
              <li
                key={item.id}
                className="flex items-center justify-between p-2 border border-gray-300 relative rounded"
              >
                {/* Image of product */}
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-20 h-20 object-contain rounded-lg mr-2"
                />
                <div className="flex-1 mr-2">
                  {/* Title of image */}
                  <h3
                    className="text-sm text-gray-500 font-semibold overflow-hidden text-ellipsis whitespace-normal"
                    style={{
                      display: "-webkit-box",
                      WebkitBoxOrient: "vertical",
                      WebkitLineClamp: 3,
                    }}
                  >
                    {item.title}
                  </h3>
                  {/* Price tag */}
                  <p className="text-lg font-semibold">
                    ${item.price.toFixed(2)}
                  </p>
                </div>
                {/* Delete button for remove item from cart */}
                <div className="relative h-full flex flex-col items-center justify-between">
                  <div className="flex space-between">
                    <Button
                      onClick={() =>
                        dispatch(
                          handleCartQuantity({ id: item.id, type: "decrement" })
                        )
                      }
                      label={<FaMinus />}
                    />
                    <span className="mt-4 flex items-center">
                      {item.quantity}
                    </span>
                    <Button
                      onClick={() =>
                        dispatch(
                          handleCartQuantity({ id: item.id, type: "increment" })
                        )
                      }
                      label={<FaPlus />}
                      reverseBackground={true}
                    />
                  </div>
                </div>
              </li>
            ))}
          </ul>
          <hr className="h-[3px] w-full mt-[30px] bg-[#E9EFF4]" />
          <div className="flex justify-between items-center p-2 font-bold">
            <span>Total Amount:</span>
            <span>${totalAmount.toFixed(2)}</span>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
