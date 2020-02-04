import React, {useState} from "react"

const Context = React.createContext()

function ContextProvider(props) {
    const [photosArr, setPhotosArr] = useState([])
    return (
        <Context.Provider value={photosArr}>
            {props.children}
        </Context.Provider>
    )
}

export {ContextProvider, Context}