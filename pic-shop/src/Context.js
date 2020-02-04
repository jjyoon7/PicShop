import React, {useState, useEffect} from "react"

const Context = React.createContext()

function ContextProvider(props) {
    const [photosArr, setPhotosArr] = useState([])

    useEffect(() => {
        fetch("https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json")
            .then(response => response.json())
            .then(data => setPhotosArr(data))
    }, []) 
    
    return (
        <Context.Provider value={{photosArr}}>
            {props.children}
        </Context.Provider>
    )
}

export {ContextProvider, Context}

