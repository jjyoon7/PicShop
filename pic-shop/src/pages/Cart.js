import React, {useContext} from "react";
import {Context} from "../Context"
import CartItem from "../components/CartItem"

function Cart() {
    const {cartItems, removeImg} = useContext(Context)
    const cartItemElements = cartItems.map(item => (
        <CartItem key={item.id} item={item} removeImg={removeImg}/>
    ))
    return (
        <main>
            {cartItemElements}
        </main>
    )
}

export default Cart