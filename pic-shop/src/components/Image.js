import React, {useState, useContext} from "react";
import {Context} from "../Context"

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

    //when the hear icon is clicked,
    // if(img.isFavorite) {
    //     <i className="ri-heart-fill favorite"></i>
    // } else {
    //     <i className="ri-heart-line favorite"
    // }
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

export default Image