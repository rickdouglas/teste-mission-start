"use client";

import { useState, useEffect } from "react";
import { CartItem } from "../CartItem";
import "./cart.scss";
import { IProduct } from "@/types/product";

export function Cart() {
  const [cartProducts, setCartProducts] = useState<IProduct[]>([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const existingCartProductsString = localStorage.getItem("cart");
    const existingCartProducts: IProduct[] = existingCartProductsString
      ? JSON.parse(existingCartProductsString)
      : [];
    setCartProducts(existingCartProducts);

    const cartTotal = existingCartProducts.reduce(
      (acc, curr) => acc + curr.price,
      0
    );
    setTotal(cartTotal);
    console.log(cartTotal, "useefect");
  }, []);

  console.log(total);
  console.log(cartProducts);

  return (
    <div className="cart__wrapper">
      <div className="cart__list">
        {cartProducts.map((product, index) => (
          <CartItem key={index} name={product.name} price={product.price} />
        ))}
      </div>
      <div className="cart__total">
        Valor Total da Compra:
        <b>
          {total !== undefined
            ? total.toLocaleString("pt-BR", {
                style: "currency",
                currency: "BRL",
              })
            : "0"}
        </b>
      </div>
    </div>
  );
}
