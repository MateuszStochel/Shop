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
const removeProperty = (propKey, { [propKey]: propValue, ...rest }) => rest;

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_BASKET":
      if (state.basket[action.item.id]) {
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
      if (state.basket[action.id].counter > 1) {
        return {
          ...state,
          basket: {
            ...state.basket,
            [action.id]: {
              ...state.basket[action.id],
              counter: state.basket[action.id].counter - 1,
            },
          },
        };
      }

      const restProducts = removeProperty(action.id, state.basket);
      return {
        ...state,
        basket: restProducts,
      };
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
