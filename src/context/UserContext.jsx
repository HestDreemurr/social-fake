import { createContext, useState, useEffect, useReducer } from "react"

let UserContext = createContext()

function userReducer(state, action) {
  switch (action.type) {
    case "edit": {
      localStorage.setItem("user", JSON.stringify(action.payload))
      return JSON.parse(localStorage.getItem("user"))
      break
    }
    
    case "delete": {
      localStorage.removeItem("user")
      return null
      break
    }
  }
}

let initialUser = JSON.parse(localStorage.getItem("user")) || null

function UserProvider({ children }) {
  let [user, dispatch] = useReducer(userReducer, initialUser)

  return (
    <UserContext.Provider value={{ user, dispatch }}>
      {children}
    </UserContext.Provider>
  )
}

export { UserContext, UserProvider }