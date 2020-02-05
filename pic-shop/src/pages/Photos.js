import React, {useContext} from "react"
import {Context} from "../Context"

function Photos() {
    const {photosArr} = useContext(Context)

    // console.log(photosArr)
    const photos = photosArr.map(photo => <img key={photo.id} src={photo.url}></img>)
    return (
        <div>
            {photos}
        </div>
    )
}

export default Photos