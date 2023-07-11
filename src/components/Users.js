import React from "react"
import User from "./User"

class Users extends React.Component{
    render () {
        if (this.props.users.length > 0 )
            return (<div className="comment">
                {this.props.users.map((user) => (
                    <User key={user.id} elem={user}/> 
                ))}
            </div>)
        else
            return (
                <div className="comment__number">
                    <h3>No one User!</h3>
                </div>
            )
    }
}

export default Users