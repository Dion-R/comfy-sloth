import {
  ADD_TO_CART,
  CLEAR_CART,
  COUNT_CART_TOTALS,
  REMOVE_CART_ITEM,
  TOGGLE_CART_ITEM_AMOUNT,
} from "../actions";

const cart_reducer = (state, action) => {
  if (action.type === ADD_TO_CART) {
    const { id, color, amount, product } = action.payload;
    const tempItem = state.cart.find((i) => i.id === id + color);
    if (tempItem) {
      const tempCart = state.cart.map((i) => {
        if (i.id === id + color) {
          let newAmount = i.amount + amount;
          newAmount = newAmount > i.max ? i.max : newAmount;
          return { ...state, amount: newAmount };
        } else {
          return i;
        }
      });

      console.log(tempCart);
      return { ...state, cart: tempCart };
    } else {
      const newItem = {
        id: id + color,
        amount,
        name: product.name,
        color,
        image: product.images[0].url,
        price: product.price,
        max: product.stock,
      };
      return { ...state, cart: [...state.cart, newItem] };
    }
  }
  if (action.type === TOGGLE_CART_ITEM_AMOUNT) {
    const { id, value } = action.payload;
    console.log(state.cart);
    const tempCart = state.cart.map((i) => {
      console.log(i.id, id);
      if (i.id === id) {
        if (value === "inc") {
          let newAmount = i.amount + 1;
          newAmount = newAmount > i.max ? i.max : newAmount;
          return { ...i, amount: newAmount };
        }
        if (value === "dec") {
          let newAmount = i.amount - 1;
          newAmount = newAmount < 1 ? 1 : newAmount;
          return { ...i, amount: newAmount };
        }
      } else {
        return i;
      }
    });
    return { ...state, cart: tempCart };
  }
  if (action.type === CLEAR_CART) {
    return { ...state, cart: [] };
  }
  if ((action.type === REMOVE_CART_ITEM)) {
    let { cart } = state;
    cart = cart.filter((a) => a.id !== action.payload);
    return { ...state, cart };
  }
  if (action.type === COUNT_CART_TOTALS) {
    const { total_items, total_amount } = state.cart.reduce(
      (a, b) => {
        a.total_amount += b.amount * b.price;
        a.total_items += b.amount;
        return a;
      },
      {
        total_items: 0,
        total_amount: 0,
      }
    );

    return { ...state, total_amount, total_items };
  }
  throw new Error(`No Matching "${action.type}" - action type`);
};

export default cart_reducer;
