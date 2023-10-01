import "./productCard.scss";

interface ProductCardProps {
  name: string;
  price: number;
  onAddToCart: () => void;
}

export function ProductCard({ name, price, onAddToCart }: ProductCardProps) {
  return (
    <div className="product__list--card">
      <h2>{name}</h2>
      <p>
        {price.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })}
      </p>
      <button onClick={onAddToCart}>Adicionar ao carrinho</button>
    </div>
  );
}
