import { useState, useEffect } from "react"
import { Link } from "react-router"
import { findUser } from "../../services/api"

export default function Task({ task }) {
  let [user, setUser] = useState(null)
  
  useEffect(() => {
    findUser(task.userId).then(user => setUser(user))
  }, [task])
  
  return (
    <>
      {user && (
        <li className="task">
          <img src={ user.avatar } alt={ user.name } />
          <div>
            <h5>
              <Link to={ `/usuario/${user.id}` }>{ user.username }</Link>
            </h5>
            <p>{ task.title }</p>
          </div>
          
          <span
            className={ `material-symbols-outlined ${task.completed ? "completed" : "incompleted"}` }
          >
            { task.completed ? "check" : "close" }
          </span>
        </li>
      )}
    </>
  )
}