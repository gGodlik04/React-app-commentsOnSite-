import React from "react"
import { GiBroadsword } from "react-icons/gi";
import { GiBugNet } from "react-icons/gi";
import AddUser from "./AddUser";

class User extends React.Component
{
    constructor (props)
    {
        super (props)
        this.state = 
        {
            editForm: false
        }
    }
    
    elem = this.props.elem
    render()
    {
        return (
            <div className="comment__number">
                    <div className="comment-wrap">
                        <h3>{this.elem.nickname}</h3>
                        <h3 id="mail">{this.elem.mail ? this.elem.mail : "Email none"}</h3>
                    </div>    
                    <div className="comment-wrap">
                        <p>{this.elem.comment}</p>
                         <em><p>{this.elem.autorized ? 'autorized' : "none-autorized"}</p></em>
                    </div>
                    <GiBroadsword className="edit-icon" onClick={() => {this.setState({
                        editForm: !this.state.editForm
                    })}}/>
                    <GiBugNet className="delete-icon" onClick={(e) => this.props.onDelete(this.elem.id)}/>
                    <div className="editAddUser">{this.state.editForm && <AddUser user = {this.elem} onAdd={this.props.onEdit}/>}</div>
            </div>
        )
    }
}

export default User