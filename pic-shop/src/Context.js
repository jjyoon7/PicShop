import React, {useState, useEffect} from "react"

const Context = React.createContext()

function ContextProvider(props) {
    const [photosArr, setPhotosArr] = useState([])
    const [cartItems, setCartItems] = useState([])

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

    function addImg(newImg) {
        setCartItems(prevItems => [...prevItems, newImg])
    }

    function removeImg(id) {
        setCartItems(prevItems => prevItems.filter(item => item.id !== id))
    }

    return (
        <Context.Provider value={{photosArr, toggleFavorite, addImg, removeImg, cartItems}}>
            {props.children}
        </Context.Provider>
    )
}

export {ContextProvider, Context}

