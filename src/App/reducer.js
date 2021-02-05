import { useParams } from "react-router-dom";
import { products } from "./Fixtures/productsInitialState";

export const initialState = {
  basket: {},
  user: null,
  products,
};

export const getBasketTotal = (basket) => {
  return basket?.reduce(
    (amount, item) => item.price * item.counter + amount,
    0
  );
};

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_BASKET":
      if (state.basket[action.item.id]) {
        console.log(state.basket);
        return {
          ...state,
          basket: {
            ...state.basket,
            [action.item.id]: {
              ...state.basket[action.item.id],
              counter: state.basket[action.item.id].counter + 1,
            },
          },
        };
      }

      return {
        ...state,
        basket: {
          ...state.basket,
          [action.item.id]: { ...action.item, counter: 1 },
        },
      };

    case "REMOVE_FROM_BASKET":
      const index = state.basket.findIndex(
        (basketItem) => basketItem.id === action.id
      );
      console.log(index);
      let newBasket = [...state.basket];
      if (index >= 0) {
        newBasket.splice(index, 1);
      } else {
        console.warn(`cant remove product (id: ${action.id})`);
      }
      return { ...state, basket: newBasket };
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };
    default:
      return state;
  }
};

export default reducer;