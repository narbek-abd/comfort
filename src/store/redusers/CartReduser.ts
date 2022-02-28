import { CartActionTypes } from '../../types/Cart'

const cart = {
  products: (localStorage.getItem("cart") || []) as any,
};

export const CartReduser = (state = cart, action: any) => {
  switch (action.type) {
    case CartActionTypes.ADD_PRODUCTS:
      return { products: action.payload };

    case CartActionTypes.REMOVE_PRODUCT:
      return { products: action.payload };

    case CartActionTypes.CHANGE_PRODUCT_COUNT:
      return { products: action.payload };

    default:
      return state;
  }
};

export const addProduct = (product: any) => {
  let products: any = JSON.parse(localStorage.getItem("cart")) || [];

  let productExists = products.find(
    (productItem: any) => productItem.id == product.id
  );

  if (productExists) {
    productExists.quantity++;
  } else {
    products.push({ id: product.id, quantity: 1 });
  }

  localStorage.setItem("cart", JSON.stringify(products));

  return {
    type: CartActionTypes.ADD_PRODUCTS,
    payload: JSON.stringify(products),
  };
};

export const removeFromCart = (product: any) => {
  let products: any = JSON.parse(localStorage.getItem("cart")) || [];
  let filteredProductList = products.filter(
    (productItem: any) => productItem.id !== product.id
  );
  localStorage.setItem("cart", JSON.stringify(filteredProductList));

  return {
    type: CartActionTypes.REMOVE_PRODUCT,
    payload: JSON.stringify(filteredProductList),
  };
};



export const changeProductCount = (product: any, count: number) => {
  let products: any = JSON.parse(localStorage.getItem("cart")) || [];
    products.forEach((productItem: any) => {
      if (productItem.id === product.id) {
        productItem.quantity = count;
      }
    });

    localStorage.setItem("cart", JSON.stringify(products));

  return {
    type: CartActionTypes.CHANGE_PRODUCT_COUNT,
    payload: JSON.stringify(products),
  };
};


export const getTotalQuantity = () => {
  let products: any = JSON.parse(localStorage.getItem("cart")) || [];
  let quantity = 0;

    products.forEach((product: any) => {
      quantity += product.quantity;
    });

  return quantity;
};



