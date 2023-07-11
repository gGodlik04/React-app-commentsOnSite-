    import React from "react"
    import Header from "./Header" 
    import Users from "./Users"  
    import AddUser from "./AddUser"

class App extends React.Component {
    constructor (props)
    {
        super (props)
        this.state = 
        {
            users : [
                {
                    id: 1,
                    nickname: 'gGodlik',
                    mail: 'godlik04@mail.ru',
                    comment: 'React is purfect',
                    autorized: true
                },
                {
                    id: 2,
                    nickname: 'Mansory',
                    mail: 'arsa2003@mail.ru',
                    comment: 'Mishlen is the best part of life',
                    autorized: false
                },
                {
                    id: 3,
                    nickname: 'Targys',
                    mail: 'targin@mail.ru',
                    comment: 'Certanly because',
                    autorized: true
                },
            ]
        }
        this.addUser = this.addUser.bind(this)
    }
    render () {     
        return (
            <div>
                <Header title="List comments on site"/>  
                <div className="main-wrap">
                    <main className="main">
                        <Users users={this.state.users}/>
                    </main>          
                    <aside>
                        <AddUser onAdd={this.addUser}/>
                    </aside>
                </div>
            </div>
        )
    }

    addUser(user){
        const id = this.state.users.length + 1
        this.setState({ users: [...this.state.users, {id, ...user}]})
    }
}

export default App