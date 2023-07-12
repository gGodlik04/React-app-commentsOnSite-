    import React from "react"
    import Header from "./Header" 
    import Users from "./Users"  
    import AddUser from "./AddUser"
    import axios from "axios"

const baseUrl = "https://reqres.in/api/users?page=1"

class App extends React.Component {
    constructor (props)
    {
        super (props)

        // axios.get(baseUrl).then((res) => {
        //     this.setState({users: res.data.data})
        // })

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
        this.deleteUser = this.deleteUser.bind(this)
        this.editUser = this.editUser.bind(this)
    }
    render () {     
        return (
            <div>
                <Header title="List comments on site"/>  
                <div className="main-wrap">
                    <main className="main">
                        <Users users={this.state.users} onEdit={this.editUser} onDelete={this.deleteUser}/>
                    </main>          
                    <aside>
                        <AddUser onAdd={this.addUser}/>
                    </aside>
                </div>
            </div>
        )
    }

    editUser(user){
        let allUsers = this.state.users
        allUsers[user.id - 1] = user

        this.setState({ users: []}, () => {
            this.setState({users: [...allUsers]})
        })
    }

    deleteUser(id){
        this.setState({
            users: this.state.users.filter((el) => el.id !== id)
        })
    }

    addUser(user){
        const id = this.state.users.length + 1
        this.setState({ users: [...this.state.users, {id, ...user}]})
    }
}

export default App