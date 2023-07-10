    import React from "react"
    import Header from "./Header"   

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            text: "Help text",
            userData: ""
        }
    }

    componentDidUpdate(prevProp){
        if(this.state.text !== `Help`)
            console.log (`some`)
    }

    render () { 
        return (
            <div className="app-name">
                <Header title="Exemple comments on site"/>            
                <h1>{this.state.text}</h1>
                <h2>{this.state.userData}</h2>
                <input placeholder="Input text"
                onChange={event => this.setState({userData: event.target.value})}
                onClick={this.inputClick} onMouseOver={this.inputMouseOver}></input>
                <p>{this.state.text === "Help text" ? "yes" : "no"}</p>
            </div>
        )
    }

    inputClick = () => {this.setState({text: "Changed"})}
    inputMouseOver = () => {console.log("Mouse over")}
}

export default App