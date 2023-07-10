    import React from "react"
    import Header from "./Header" 
    import Users from "./Users"  

class App extends React.Component {

    render () { 
        return (
            <div>
                <Header title="List comments on site"/>            
                <Users/>
            </div>
        )
    }
}

export default App