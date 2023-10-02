"use client";

import React, { useEffect, useState } from "react";
import { ProductCard } from "../ProductCard";
import "./productList.scss";
import { IProduct } from "@/types/product";

export function ProductList() {
  const [products, setProducts] = useState<IProduct[]>([]);

  useEffect(() => {
    const existingProductsString = localStorage.getItem("products");
    const existingProducts = existingProductsString
      ? JSON.parse(existingProductsString)
      : [];
    setProducts(existingProducts);
  }, []);

  const handleAddToCart = (product: IProduct) => {
    const existingCartString = localStorage.getItem("cart");
    const existingCart = existingCartString
      ? JSON.parse(existingCartString)
      : [];
    existingCart.push(product);
    localStorage.setItem("cart", JSON.stringify(existingCart));
  };

  return (
    <div className="product__list">
      {products.map((product, index) => (
        <ProductCard
          key={index}
          name={product.name}
          price={product.price}
          onAddToCart={() => handleAddToCart(product)}
        />
      ))}
    </div>
  );
}
