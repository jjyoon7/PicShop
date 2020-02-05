import React, {useState} from "react";

function Image({className, img}) {
    const [hovered, setHovered] = useState(false)

    console.log(hovered)

    return (
        <div 
            onMouseEnter={() => setHovered(true)} 
            onMouseLeave={() => setHovered(false)}
            className={`${className} image-container`}
        >
            <img src={img.url} className="image-grid"/>
        </div>
    )
}

export default Image