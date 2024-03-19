import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartContextProvider = ({ children }) => {
    const [cart, setCart] = useState(JSON.parse(localStorage.getItem('cart')) || []);

    function checkProductInCart(id) {
        return cart.some(prod => prod.id === id);
    }

    function increaseProductQuantity(id) {
        const index = cart.findIndex(prod => prod.id === id);
        if (index !== -1) {
            cart[index].quantity += 1;
        }
        setCart([...cart]);
        localStorage.setItem('cart', JSON.stringify(cart));
    }

    function decreaseProductQuantity(id) {
        const index = cart.findIndex(prod => prod.id === id);
        if (index !== -1) {
            if (cart[index].quantity > 1) {
                cart[index].quantity -= 1;
                setCart([...cart]);
            } else {
                cart.splice(index, 1);
                setCart([...cart]);
            }
            localStorage.setItem('cart', JSON.stringify(cart));
        }
    }

    function addProduct(product) {
        const index = cart.findIndex(prod => prod.id === product.id);
        if (index === -1) {
            setCart([...cart, { ...product, quantity: 1 }]);
            localStorage.setItem('cart', JSON.stringify([...cart, { ...product, quantity: 1 }]));
        }
    }

    function removeProduct(id) {
        const index = cart.findIndex(prod => prod.id === id);
        if (index !== -1) {
            cart.splice(index, 1);
            setCart([...cart]);
            localStorage.setItem('cart', JSON.stringify(cart));
        }
    }

    function calculateTotalPrice() {
        return cart.reduce((acc, prod) => acc + prod.price * prod.quantity, 0);
    }

    return <CartContext.Provider
        value={{
            cart,
            checkProductInCart,
            increaseProductQuantity,
            decreaseProductQuantity,
            addProduct,
            removeProduct,
            calculateTotalPrice
        }}
    >
        {children}
    </CartContext.Provider>
}