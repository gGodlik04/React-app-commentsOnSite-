import React from "react"


class AddUser extends React.Component
{
    constructor (props)
    {
        super (props)
        this.state = 
        {
            nickname: '',
            mail: '',
            comment: '',
            autorized: false
        }
    }
    render()
    {
        return (
            <form className="addUser">
                <input placeholder="Nickname" onChange={(e) => this.setState({nickname: e.target.value })}></input>
                <input placeholder="Email" onChange={(e) => this.setState({mail: e.target.value })}></input>
                <textarea placeholder="Comment"onChange={(e) => this.setState({comment: e.target.value })}></textarea>
                <label htmlFor="autorized">Autorized?</label>
                <input type="checkbox" className="checkbox" id="autorized" onChange={(e) => this.setState({autorized: e.target.checked})}></input>
                <button type="button" onClick={() => this.props.onAdd({
                    nickname: this.state.nickname,
                    mail: this.state.mail,
                    comment: this.state.comment,
                    autorized: this.state.autorized,
                })}>Submit</button>
            </form>
        )
    }
}

export default AddUser