import { createContext, useState } from "react"

/* eslint-disable react/prop-types */
export const UserDataContext = createContext()

function UserContext({children}) {
 
   const [user, setUser] = useState({
    email:'',
    fullname:{
        firstname:'',
        lastname:''
    }
   })
 
  return (
    <div>
        <UserDataContext.Provider value={{user,setUser}}>
            {children}
        </UserDataContext.Provider>
    </div>
  )
}

export default UserContext