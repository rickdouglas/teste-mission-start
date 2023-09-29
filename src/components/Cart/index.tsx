import { CartItem } from "../CartItem";
import "./cart.scss";

export function Cart() {
  return (
    <div className="cart__wrapper">
      <div className="cart__list">
        <CartItem name="chinelo" price={35.99} />
        <CartItem name="chinelo" price={35.99} />
        <CartItem name="chinelo" price={35.99} />
        <CartItem name="chinelo" price={35.99} />
      </div>
      <div className="cart__total">150</div>
    </div>
  );
}
