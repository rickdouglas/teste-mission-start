"use client";

import { useState } from "react";
import "./cadastro.scss";

export function Cadastro() {
  const [productName, setProductName] = useState("");
  const [productPrice, setProductPrice] = useState("");

  const handleSave = () => {
    if (productName && productPrice) {
      const product = {
        name: productName,
        price: parseFloat(productPrice),
      };

      const existingProductsString = localStorage.getItem("products");
      const existingProducts = existingProductsString
        ? JSON.parse(existingProductsString)
        : [];
      existingProducts.push(product);
      localStorage.setItem("products", JSON.stringify(existingProducts));

      setProductName("");
      setProductPrice("");
    } else {
      alert("Por favor, preencha todos os campos antes de salvar.");
    }
  };

  return (
    <div className="cadastro__wrapper">
      <h2>Cadastrar Produto</h2>
      <form className="cadastro__form">
        <label>
          Nome do produto
          <input
            type="text"
            placeholder="Nome do produto"
            value={productName}
            onChange={(e) => setProductName(e.target.value)}
          />
        </label>

        <label>
          Preço
          <input
            type="text"
            placeholder="Preço"
            value={productPrice}
            onChange={(e) => setProductPrice(e.target.value)}
          />
        </label>

        <button onClick={handleSave}>Salvar</button>
      </form>
    </div>
  );
}
