import React, { useState ,useEffect } from 'react'

import data from "../data/info1.json"
const ServerJson = () => {

    let [users , setUsers] = useState([])

    useEffect(()=>{
        async function getInfo(){
            let res = await fetch("http://localhost:8000/users")
            let data = await res.json()
            setUsers(data)
        }
        getInfo()
    }, [])
    console.log('users');
  return (
    <div className='homepage'>
      {users.map((user)=>{
        return(
            <div>
                      <div key={user.id} className=''>
              <div className="users flex space-x-2 bg-slate-200">
                <div className="logo">
                    <img src={user.image} alt="logo"/>
                </div>
                <div className="desc bg-gray-600 text-white w-full">
                    <span>Name: <big><strong>{user.firstName}</strong></big></span>
                    <div>Identity: <strong>{user.gender}{user.age}</strong></div>
                    <div>Address: {user.address.address} {user.address.city} {user.address.postalCode}</div>
                    <div>Phone: {user.phone}</div>
                </div>
                
              </div>
                    <hr className='bg-zinc-500'/> 
            </div>
            </div>
           
            
        )
      })}
    </div>
  )
}

export default ServerJson
