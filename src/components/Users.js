import React from "react"


class Users extends React.Component{
    users = [
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
        }
    ]

    render () {
        return (<div className="comment">
            {this.users.map((user) => (<div className="comment__number">
                <div className="comment-wrap">
                    <h3>{user.nickname}</h3>
                    <h3 id="mail">{user.mail}</h3>
                </div>    
                <p>{user.comment}</p>
            </div>))}
        </div>
        )
    }
}

export default Users