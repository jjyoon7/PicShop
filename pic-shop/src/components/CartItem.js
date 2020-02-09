import React, { useContext } from "react"
import {Context} from "../Context"
function CartItem({item}) {
    const {removeImg} = useContext(Context)
    return (
        <div className="cart-item">
            <i className="ri-delete-bin-line" onClick={() => removeImg(item.id)}></i>
            <img src={item.url} width="130px" />
            <p>$5.99</p>
        </div>
    )
}

export default CartItem