import React, {useState} from "react";

function Image({className, img}) {
    const [hovered, setHovered] = useState(false)

    const hearIcon = hovered && <i className="ri-heart-line favorite"></i>
    const plusIcon = hovered && <i className="ri-add-circle-line cart"></i>
    return (
        <div 
            onMouseEnter={() => setHovered(true)} 
            onMouseLeave={() => setHovered(false)}
            className={`${className} image-container`}
        >
            <img src={img.url} className="image-grid"/>
            {hearIcon}
            {plusIcon}
        </div>
    )
}

export default Image