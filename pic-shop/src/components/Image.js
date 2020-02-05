import React, {useState, useContext} from "react";
import {Context} from "../Context"

function Image({className, img}) {
    const [hovered, setHovered] = useState(false)
    const {toggleFavorite} = useContext(Context)

    const hearIcon = hovered && <i className="ri-heart-line favorite"></i>
    const plusIcon = hovered && <i className="ri-add-circle-line cart"></i>

    return (
        <div 
            onMouseEnter={() => setHovered(true)} 
            onMouseLeave={() => setHovered(false)}
            onClick={() => toggleFavorite(img.id)}
            className={`${className} image-container`}
        >
            <img src={img.url} className="image-grid"/>
            {hearIcon}
            {plusIcon}
        </div>
    )
}

export default Image