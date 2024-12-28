import { useState, useEffect } from "react"
import { Link } from "react-router"
import { getUsers } from "../../services/api"
import "./style.css"

export default function Usuarios() {
  let [users, setUsers] = useState([])
  let [search, setSearch] = useState("")
  let [loading, setLoading] = useState(false)
  
  let filteredUsers = users.filter(user => (user.name + " " + user.username).toLowerCase().includes(search.toLowerCase()))
  
  function showUsers(users) {
    return users.map(user => {
      let userURL = `/usuario/${user.id}`
      return (
        <li className="user" key={ user.id }>
          <Link to={ userURL }>
            <img src={ user.avatar } alt={ user.name } />
            <div>
              <h4>{ user.name }</h4>
              <p>{ user.username }</p>
            </div>
          </Link>
        </li>
      )
    })
  }
  
  useEffect(() => {
    setLoading(true)
    getUsers().then(users => {
      setUsers(users)
      setLoading(false)
    })
  }, [])
  
  return (
    <>
      <div className="search">
        <span className="material-symbols-outlined">search</span>
        <input
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Pesquisar..."
        />
      </div>
      
      <ul className="users">
        { users && search ? showUsers(filteredUsers) : showUsers(users) }
        {loading && (
          <div className="loading"></div>
        )}
      </ul>
    </>
  )
}