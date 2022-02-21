const cart = {
  products: localStorage.getItem("cart")) || [],
};

export const CartReduser = (state = cart, action: any) => {
  switch (action.type) {
    // case "GET_PRODUCTS":
      // return { products: state.value + 1 };
    // case 'counter/decremented':
    //   return { value: state.value - 1 }
    default:
      return state;
  }
};
