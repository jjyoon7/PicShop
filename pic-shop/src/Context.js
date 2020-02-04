import React, {useContext} from "react"

function contextProvider(props) {
    const context = useContext()
    return (
        <Provider>
            <props.children/>
        </Provider>
    )
}

export default contextProvider