import React from "react"
import FontAwesome from 'react-fontawesome'
import faStyles from 'font-awesome/css/font-awesome.css'

function Header() {
    return (
        <header>
            <h2>Pic Some</h2>
            <FontAwesome
              className="super-crazy-colors"
              name="shopping-cart"
              cssModule={faStyles}
              size="2x"
              spin
              style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}
            />
        </header>
    )
}

export default Header