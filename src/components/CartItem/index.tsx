import "./cartItem.scss";

interface CartItemProps {
  name: string;
  price: number;
}

export function CartItem({ name, price }: CartItemProps) {
  return (
    <div className="cartItem">
      <h3>{name}</h3>
      <b>
        {price.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })}
      </b>
    </div>
  );
}
