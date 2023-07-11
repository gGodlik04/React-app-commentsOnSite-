import React from "react"
import { GiBroadsword } from "react-icons/gi";
import { GiBugNet } from "react-icons/gi";

class User extends React.Component
{
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
                    <GiBroadsword className="delete-icon"/>
                    <GiBugNet className="edit-icon"/>
            </div>
        )
    }
}

export default User