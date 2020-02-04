import React, {useContext} from "react"

const Context = React.createContext()

function ContextProvider(props) {
    const context = useContext(Context)
    return (
        <Context.Provider>
            {props.children}
        </Context.Provider>
    )
}

export default ContextProvider