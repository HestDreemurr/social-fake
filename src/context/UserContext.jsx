import { createContext, useState, useEffect } from "react"

let UserContext = createContext()

function UserProvider({ children }) {
  let [user, setUser] = useState(null)
  
  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem("user")))
  }, [])
  
  return (
    <UserContext.Provider value={ user }>
      {children}
    </UserContext.Provider>
  )
}

export { UserContext, UserProvider }