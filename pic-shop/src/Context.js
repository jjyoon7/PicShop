import React, {useContext} from "react"

const Context = React.createContext()

function ContextProvider(props) {
    const context = useContext(Context)
    return (
        <Provider>
            <props.children/>
        </Provider>
    )
}

export default ContextProvider