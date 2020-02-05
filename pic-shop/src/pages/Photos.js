import React, {useContext} from "react"
import {Context} from "../Context"
import Image from "../components/Image"
import {getClass} from "../utils"
function Photos() {
    const {photosArr} = useContext(Context)

    const photos = photosArr.map((photo, i) => 
        <Image key={photo.id} img={photo} className={getClass(i)} />
    )
    return (
        <main className="photos">
            {photos}
        </main>
    )
}

export default Photos