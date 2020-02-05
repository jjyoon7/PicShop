import React, {useState, useEffect} from "react"

const Context = React.createContext()

function ContextProvider(props) {
    const [photosArr, setPhotosArr] = useState([])
    const [isFavorited, setIsFavorite] = useState(false)

    useEffect(() => {
        fetch("https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json")
            .then(response => response.json())
            .then(data => setPhotosArr(data))
    }, []) 


    function toggleFavorite() {
        setIsFavorite( prevFav => prevFav === false ? true : false)
        console.log(isFavorited)
    }

    console.log(photosArr)

    return (
        <Context.Provider value={{photosArr, toggleFavorite}}>
            {props.children}
        </Context.Provider>
    )
}

export {ContextProvider, Context}

