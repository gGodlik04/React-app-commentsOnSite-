    import React from "react"
    import Header from "./Header"

class App extends React.Component {
    text = "Help text"
    render () { 
        return (
            <div className="app-name">
                <Header title="Exemple comments on site"/>            
                <h1>{this.text}</h1>
                <input placeholder="Input text"
                onClick={this.inputClick} onMouseOver={this.inputMouseOver}></input>
                <p>{this.text === "Help text" ? "yes" : "no"}</p>
            </div>
        )
    }

    inputClick = () => {this.text="Changed"}
    inputMouseOver = () => {console.log("Mouse over")}
}

export default App