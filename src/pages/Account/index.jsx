import { useContext, useState } from "react"
import { useNavigate, Link } from "react-router"
import { UserContext } from "../../context/UserContext"
import EditingAccount from "./EditingAccount"
import "./style.css"

export default function Account() {
  let navigate = useNavigate()
  let { user, dispatch } = useContext(UserContext)
  let [isEditing, setIsEditing] = useState(false)
  
  if (!user) {
    navigate("/cadastro")
  }
  
  function handleEdit() {
    setIsEditing(true)
  }
  
  function handleDelete() {
    dispatch({
      type: "delete"
    })
    navigate("/")
    window.location.reload()
  }
  
  return (
    <main>
      <header className="header-account">
        <Link to="/">
          <span className="material-symbols-outlined">home</span>
        </Link>
        <h3>{ user.username }</h3>
      </header>
      
      {isEditing ? (
        <EditingAccount 
        onSave={() => setIsEditing(false)}
        />
      ) : (
        <>
          <section className="account">
            <img src={ user.photo } alt={ user.name } />
            <h3>{ user.name }</h3>
            <p className="bio">
              { user.bio }
            </p>
            
            <div className="actions">
              <button onClick={handleEdit} className="edit-button">
                Editar Perfil
              </button>
              
              <button onClick={handleDelete} className="exit-button">
                Sair
              </button>
            </div>
          </section>
        </>
      )}
    </main>
  )
}