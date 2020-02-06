import React, {useState, useContext} from "react";
import {Context} from "../Context"
import PropTypes from "prop-types";

function Image({className, img}) {
    const [hovered, setHovered] = useState(false)
    const {toggleFavorite} = useContext(Context)

    function hearIcon() {
        if(img.isFavorite) {
            return <i className="ri-heart-fill favorite" onClick={() => toggleFavorite(img.id)}></i>
        } else if(hovered) {
            return <i className="ri-heart-line favorite" onClick={() => toggleFavorite(img.id)}></i>
        }
    }    
    const plusIcon = hovered && <i className="ri-add-circle-line cart"></i>

    console.log(img)
    return (
        <div 
            onMouseEnter={() => setHovered(true)} 
            onMouseLeave={() => setHovered(false)}
            className={`${className} image-container`}
        >
            <img src={img.url} className="image-grid"/>
            {hearIcon()}
            {plusIcon}
        </div>
    )
}

Image.propTypes = {
    className: PropTypes.string.isRequired,
    img: PropTypes.shape({
        id:PropTypes.string,
        url:PropTypes.string,
        isFavorite: PropTypes.bool
    })
}

export default Image