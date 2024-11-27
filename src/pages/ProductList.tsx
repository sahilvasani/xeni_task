import React, { useEffect } from "react";
import axios from "axios";
import ProductCard from "../components/ProductCard.tsx";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { RootState } from "../store/index.ts";
import { startLoading, stopLoading } from "../store/cartSlice.ts";

interface Product {
  id: number;
  title: string;
  price: number;
  image: string;
  quantity: number;
  rating: any;
}

const ProductList: React.FC = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector((state: RootState) => state.cart.isLoading);
  const [products, setProducts] = React.useState<Product[]>([]);

  useEffect(() => {
    //Start loading when API call of fetch products
    dispatch(startLoading());

    //API of fetching products
    axios
      .get("https://fakestoreapi.com/products")
      .then((response) => {
        const productsWithQuantity = response.data.map((product: Product) => ({
          ...product,
          quantity: 1, // Add default quantity
        }));
        setProducts(productsWithQuantity);
      })
      .catch((error) => console.error("Error fetching products:", error))
      .finally(() => dispatch(stopLoading()));
  }, [dispatch]);

  // Skeleton for product list
  const renderSkeletons = () => {
    return Array(10)
      .fill(null)
      .map((_, index) => (
        <div
          key={index}
          className="product-card border border-gray-300 rounded-lg p-4 text-center shadow-lg bg-white animate-pulse"
        >
          <div className="w-full h-36 bg-gray-200 rounded-md"></div>
          <div className="mt-4 h-5 bg-gray-200 rounded-md w-3/4 mx-auto"></div>
          <div className="mt-2 h-5 bg-gray-200 rounded-md w-1/2 mx-auto"></div>
          <div className="mt-4 h-10 bg-gray-200 rounded-md w-full"></div>
        </div>
      ));
  };

  return (
    <div className="py-16 product-list grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-[5px] lg:px-2 box-border sm:gap-5">
      {isLoading
        ? renderSkeletons()
        : products.map((product) => (
            <ProductCard key={product.id} {...product} /> //Render Product component for each product
          ))}
    </div>
  );
};

export default ProductList;
