"use client";

import React, { useEffect, useState } from "react";
import { ProductCard } from "../ProductCard";
import "./productList.scss";

export function ProductList() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const existingProductsString = localStorage.getItem("products");
    const existingProducts = existingProductsString
      ? JSON.parse(existingProductsString)
      : [];
    setProducts(existingProducts);
  }, []);

  return (
    <div className="product__list">
      {products.map((product, index) => (
        <ProductCard
          key={index}
          name={product.name}
          price={product.price}
          onAddToCart={() => {}}
        />
      ))}
    </div>
  );
}
