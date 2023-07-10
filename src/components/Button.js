import React, { useEffect, useState } from "react"

const Button = (props) => {
    const [clicked, setClicked] = useState(11)

    useEffect (() => {
        document.title = `Вы нажали ${clicked}`
    })

    return (
        <button onClick={() => setClicked(clicked+1)}>{props.text} {clicked}</button>
    )
}

Button.defaultProps = {
    text : "Button"
}

export default Button