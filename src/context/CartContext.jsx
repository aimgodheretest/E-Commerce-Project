import { createContext, useContext, useState } from "react";

const CartContext = createContext(null);

const initialCartElements = [
  {
    title: "Colors",
    price: 100,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
    quantity: 2,
  },
  {
    title: "Black and white Colors",
    price: 50,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
    quantity: 3,
  },
  {
    title: "Yellow and Black Colors",
    price: 70,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
    quantity: 1,
  },
];

export function CartProvider({ children }) {
  const [cartElements, setCartElements] = useState(initialCartElements);

  function addToCart(product) {
    setCartElements((previousItems) => {
      const existingItem = previousItems.find(
        (item) => item.title === product.title,
      );

      if (existingItem) {
        return previousItems.map((item) =>
          item.title === product.title
            ? { ...item, quantity: item.quantity + 1 }
            : item,
        );
      }

      return [...previousItems, { ...product, quantity: 1 }];
    });
  }

  function removeFromCart(title) {
    setCartElements((previousItems) =>
      previousItems.filter((item) => item.title !== title),
    );
  }

  const totalQuantity = cartElements.reduce(
    (total, item) => total + item.quantity,
    0,
  );

  const contextValue = {
    cartElements,
    addToCart,
    removeFromCart,
    totalQuantity,
  };

  return (
    <CartContext.Provider value={contextValue}>{children}</CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);

  if (context === null) {
    throw new Error("useCart must be used within a CartProvider");
  }

  return context;
}
