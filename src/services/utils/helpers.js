/* eslint-disable eqeqeq */
export const formatCurrency = (fig) => {
  let currency = Intl.NumberFormat("en-US");
  return "NGN " + currency.format(fig);
};

export const updateCartState = (data, action = "") => {
  const cartItems = [];
  let storage = localStorage.getItem("tefCart");
  storage = storage ? JSON.parse(storage) : [];

  const newItem = {
    id: data.id,
    product_id: data.id,
    quantity: 1,
    price: parseFloat(data.price),
    basePrice: parseFloat(data.price),
    product_path: data.image,
    product_title: data.title,
  };

  if (storage?.length < 1) {
    cartItems.push(newItem);
  } else {
    const exists = storage?.filter((product) => product.id == newItem.id);
    if (exists?.length > 0) {
      storage?.map((product) => {
        if (product.id == newItem.id) {
          const addToQuantity = product.quantity + newItem.quantity;
          const addToPrice = product.price + product.basePrice;
          const subtractFromQuantity = product.quantity - newItem.quantity;
          const subtractFromPrice = product.price - product.basePrice;

          product.quantity =
            action === "add" ? addToQuantity : subtractFromQuantity;
          product.price = action === "add" ? addToPrice : subtractFromPrice;
          return product;
        }

        return product;
      });
      cartItems.push(...storage);
    } else {
      cartItems.push(newItem, ...storage);
    }
  }

  return cartItems;
};

export const removeProductFromCart = (item) => {
  const cartItems = [];
  let storage = localStorage.getItem("tefCart");
  storage = storage ? JSON.parse(storage) : [];
  if (storage?.length > 0) {
    const newData = storage?.filter((product) => product.id != item.id);
    cartItems.push(...newData);
  }
  localStorage.clear();
  return cartItems;
};
