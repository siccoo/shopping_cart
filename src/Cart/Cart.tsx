import CartItem from "../CartItem/CartItem";

// Types
import { CartItemType } from "../App";

// Styles
import { Wrapper } from "./Cart.styles";

type Props = {
  cartItems: CartItemType[];
  addToCart: (clickedItem: CartItemType) => void;
  removeFromCart: (id: number) => void;
};

const Cart: React.FC<Props> = ({ cartItems, addToCart, removeFromCart }) => {
  const calculateTotal = (items: CartItemType[]) =>
    items.reduce(
      (accumulator: number, item) => accumulator + item.amount * item.amount,
      0
    );
  return (
    <Wrapper>
      <h2>Your Shopping Cart</h2>
      {cartItems.length === 0 ? <p>No Items in Cart...</p> : null}
      {cartItems.map((item) => (
        <CartItem
          key={item.id}
          item={item}
          addToCart={addToCart}
          removeFromCart={removeFromCart}
        />
      ))}
      <p>
          Total: ₦{calculateTotal(cartItems).toFixed(2)}
      </p>
    </Wrapper>
  );
};

export default Cart;
