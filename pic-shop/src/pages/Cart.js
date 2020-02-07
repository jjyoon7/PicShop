import React, {useContext} from "react";
import {Context} from "../Context"
import CartItem from "../components/CartItem"

function Cart() {
    const {cartItems} = useContext(Context)
    const cartItemElements = cartItems.map(item => (
        <CartItem key={item.id} item={item}/>
    ))
    return (
        <main>
            {cartItemElements}
        </main>
    )
}

export default Cart