import React from "react"


class AddUser extends React.Component
{
    userAdd = {}
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
            <form className="addUser" ref={(el) => this.myForm = el}>
                <input placeholder="Nickname" onChange={(e) => this.setState({nickname: e.target.value })}></input>
                <input placeholder="Email" onChange={(e) => this.setState({mail: e.target.value })}></input>
                <textarea placeholder="Comment"onChange={(e) => this.setState({comment: e.target.value })}></textarea>
                <label htmlFor="autorized">Autorized?</label>
                <input type="checkbox" className="checkbox" id="autorized" onChange={(e) => this.setState({autorized: e.target.checked})}></input>
                <button type="button" onClick={() => {
                    this.myForm.reset()
                    this.userAdd = {
                        nickname: this.state.nickname,
                        mail: this.state.mail,
                        comment: this.state.comment,
                        autorized: this.state.autorized,
                    }
                    if (this.props.user)
                        this.userAdd.id = this.props.user.id
                    this.props.onAdd(this.userAdd)}}>Submit</button>
            </form>
        )
    }
}

export default AddUser