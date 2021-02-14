import React from 'react';
import './Users.css'

let Users = (props) => {

    if (props.setUsers.length === 0 ) {
        props.setUsers(
            [
                {id : 1, photoUrl: 'https://img.afisha.tut.by/static/media/340x0s/people/0f/b/dmitriy-nagiev-027054.jpg', followed: false, fullName : "Dmitry", status : 'I am a boss', location: {city: 'Minsk', country: 'Belarus'}},
                {id : 2, photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/8/88/Dmitry_Nagiev_2017_4.jpg',followed: true, fullName : "Elena", status : 'I am at home', location: {city: 'Moscow', country: 'Russia'}},
                {id : 3, photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/8/88/Dmitry_Nagiev_2017_4.jpg',followed: true, fullName : "Aleksandr", status : 'Zzzz', location: {city: 'Kiev', country: 'Ukraine'}},
                {id : 4, photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/8/88/Dmitry_Nagiev_2017_4.jpg',followed: false, fullName : "Anzor", status : 'I am in bed', location: {city: 'Stavropol', country: 'Russia'}},
                {id : 5, photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/8/88/Dmitry_Nagiev_2017_4.jpg',followed: true, fullName : "Mixail", status : 'I am at work', location: {city: 'Talin', country: 'Estonia'}},
                {id : 6, photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/8/88/Dmitry_Nagiev_2017_4.jpg',followed: false, fullName : "Anastasia", status : 'I am on rest', location: {city: 'Varshava', country: 'Polsha'}},
            ]
        )
    }
        


    return <div>
        {
        props.users.map(u => <div key={u.id}>
                <span>
                    <div>
                        <img src={u.photoUrl} className="users_image" ></img>
                    </div>
                    <div>
                        {u.followed ? 
                            <button onClick={ () => {props.unfollow(u.id)}}>UnFollow</button> 
                                : 
                            <button onClick={ () => {props.follow(u.id)}}>Follow</button>}
                        
                    </div>
                </span>
                <span>
                    <span>
                        <div>{u.fullName}</div>
                        <div>{u.status}</div>
                    </span>
                    <span>
                          <div>{u.location.country}</div>
                          <div>{u.location.city}</div>
                    </span>
                </span>
        </div>
            )
        }
    </div>
}

export default Users