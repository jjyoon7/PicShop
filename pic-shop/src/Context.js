import React, {useState, useEffect} from "react"

const Context = React.createContext()

function ContextProvider(props) {
    const [photosArr, setPhotosArr] = useState([])

    useEffect(() => {
        fetch("https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json")
            .then(response => response.json())
            .then(data => setPhotosArr(data))
    }, []) 


    function toggleFavorite(id) {
        const updateArr = photosArr.map(pic => {
            if(pic.id === id){
                return {...pic, isFavorite: !pic.isFavorite}
            }
            return pic
        })
        setPhotosArr(updateArr)
    }


    return (
        <Context.Provider value={{photosArr, toggleFavorite}}>
            {props.children}
        </Context.Provider>
    )
}

export {ContextProvider, Context}

