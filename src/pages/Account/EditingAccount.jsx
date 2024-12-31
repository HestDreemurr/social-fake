import { useContext, useState } from "react"
import { UserContext } from "../../context/UserContext"

export default function EditingAccount({ onSave }) {
  let { user, dispatch } = useContext(UserContext)
  let [newUser, setNewUser] = useState(user)
  
  function handleChangeImage(e) {
    let file = e.target.files[0]
    
    let reader = new FileReader()
    
    reader.onload = (e) => {
      setNewUser({
        ...newUser,
        photo: e.target.result
      })
    }
    
    if (file) {
      reader.readAsDataURL(file)
    }
  }
    
  function handleSave() {
    dispatch({
      type: "edit",
      payload: newUser
    })
    onSave()
  }
  
  return (
    <section className="edit-form">
      <form onSubmit={handleSave}>
        <div>
          <label for="name">Nome</label>
          <input
          type="text"
          id="name"
          value={ newUser.name }
          onChange={(e) => setNewUser({
            ...newUser,
            name: e.target.value
          })}
          />
        </div>
        
        <div>
          <label for="username">Nome de Usuário</label>
          <input
          type="text"
          id="username"
          value={ newUser.username }
          onChange={(e) => setNewUser({
            ...newUser,
            username: e.target.value
          })}
          />
        </div>
        
        <div>
          <label for="bio">Biografia</label>
          <textarea
          id="bio"
          value={ newUser.bio }
          onChange={(e) => setNewUser({
            ...newUser,
            bio: e.target.value
          })}
          />
        </div>
        
        <div>
          <label for="photo">Foto de Perfil</label>
          <input
          type="file"
          id="photo"
          accept="image/*"
          onChange={handleChangeImage}
          />
          <img src={ newUser.photo } alt="Sua nova foto de perfil" />
        </div>
        
        <button type="submit">Enviar</button>
      </form>
    </section>
  )
}