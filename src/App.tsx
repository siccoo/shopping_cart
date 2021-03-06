import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { listProducts } from "./actions/productActions";

// Components
import Item from "./Item/Item";
import Cart from "./Cart/Cart";
import Drawer from "@material-ui/core/Drawer";
import Grid from "@material-ui/core/Grid";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import Badge from "@material-ui/core/Badge";
import Navbar from "./components/Navbar";
import LoadingBox from "./components/LoadingBox";

import { productData } from "./data/product";

// Styles
import { Wrapper, StyledButton } from "./App.styles";

// Types
export type CartItemType = {
  id: number;
  title: string;
  image: string;
  amount: number;
};

const App = () => {
  const [products, setProducts] = useState(productData);
  const [loading, setLoading] = useState(false);
  const [cartIsOpen, setCartIsOpen] = useState(false);
  const [cartItems, setCartItems] = useState([] as CartItemType[]);
  // const { data, isLoading, error} = products[];
  // console.log(data);

  // const products = useSelector<ProductsState, ProductsState["products"]>(
  //   (state) => state.products
  // );

  // const dispatch = useDispatch();

  useEffect(() => {
    setLoading(true);
    setLoading(false);
    setProducts(productData);
  }, []);

  const getTotalItems = (items: CartItemType[]) =>
    items.reduce((accumulator: number, item) => accumulator + item.amount, 0);

  const handleAddToCart = (clickedItem: CartItemType) => {
    setCartItems((prevState) => {
      // Is the item already in the cart
      const isItemInCart = prevState.find((item) => item.id === clickedItem.id);

      if (isItemInCart) {
        return prevState.map((item) =>
          item.id === clickedItem.id
            ? { ...item, amount: item.amount + 1 }
            : item
        );
      }
      // Initial time the item is added
      return [...prevState, { ...clickedItem, amount: 1 }];
    });
  };

  const handleRemoveFromCart = (id: number) => {
    setCartItems((prevState) =>
      prevState.reduce((accumulator, item) => {
        if (item.id === id) {
          if (item.amount === 1) return accumulator;
          return [...accumulator, { ...item, amount: item.amount - 1 }];
        } else {
          return [...accumulator, item];
        }
      }, [] as CartItemType[])
    );
  };

  if(loading) return <LoadingBox />;

  return (
    <Wrapper>
      <Navbar />
      <Drawer
        anchor="right"
        open={cartIsOpen}
        onClose={() => setCartIsOpen(false)}
      >
        <Cart
          cartItems={cartItems}
          addToCart={handleAddToCart}
          removeFromCart={handleRemoveFromCart}
        />
      </Drawer>
      <StyledButton onClick={() => setCartIsOpen(true)}>
        <Badge badgeContent={getTotalItems(cartItems)} color="error">
          <AddShoppingCartIcon
            style={{ right: "-10px", top: "-10px", position: "absolute" }}
          />
        </Badge>
      </StyledButton>{" "}
      {loading ? (
        <LoadingBox></LoadingBox>
      ) : (
        <Grid container spacing={4} className="container">
          {products?.map((item) => (
            <Grid item key={item.id} xs={12} sm={3}>
              <Item item={item} handleAddToCart={handleAddToCart} />
            </Grid>
          ))}
        </Grid>
      )}
    </Wrapper>
  );
};

export default App;
