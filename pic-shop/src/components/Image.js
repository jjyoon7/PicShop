import React, {useState} from "react";

function Image({className, img, isFavorite, toggleFavorite}) {
    const [hovered, setHovered] = useState(false)

    const hearIcon = hovered && <i className="ri-heart-line favorite"></i>
    const plusIcon = hovered && <i className="ri-add-circle-line cart"></i>

    console.log(isFavorite)

    return (
        <div 
            onMouseEnter={() => setHovered(true)} 
            onMouseLeave={() => setHovered(false)}
            onClick={() => toggleFavorite}
            className={`${className} image-container`}
        >
            <img src={img.url} className="image-grid"/>
            {hearIcon}
            {plusIcon}
        </div>
    )
}

export default Image