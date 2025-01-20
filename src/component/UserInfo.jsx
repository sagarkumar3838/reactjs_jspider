import React from 'react'

// import data from "../data/info.json";


const UserInfo = () => {
    let usersinfo = data.Users;
    console.log('usersinfo');

  return (
    <div>
     {usersinfo.map((user)=>{
        return(
            <div key={user.id}>
              <h1>{user.name}</h1>
              <p>{user.password}</p>
              <button>Delete</button>
            </div>
        )
     })}
    </div>
  )
}

export default UserInfo
