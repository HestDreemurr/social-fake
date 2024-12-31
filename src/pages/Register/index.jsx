import { useState } from "react"
import { Link, useNavigate } from "react-router"
import "./style.css"

export default function Register() {
  let navigate = useNavigate()
  let [user, setUser] = useState({
    name: "",
    username: "",
    photo: null
  })
  
  function handleSubmit(e) {
    e.preventDefault()
    localStorage.setItem("user", JSON.stringify({
      ...user,
      bio: "Essa é a Biografia!",
      photo: user.photo ? user.photo : "/src/assets/user-default-avatar.jpeg"
    }))
    navigate("/conta")
    window.location.reload()
  }
  
  function handleChangeImage(e) {
    let file = e.target.files[0]
    
    let reader = new FileReader()
    
    reader.onload = (e) => {
      setUser({
        ...user,
        photo: e.target.result
      })
    }
    
    if (file) {
      reader.readAsDataURL(file)
    }
  }
  
  return (
    <main>
      <Link to="/">
        <span className="material-symbols-outlined">home</span>
      </Link>
      
      <section className="cadastro">
        <h1>Cadastre-se</h1>
        
        <form onSubmit={handleSubmit}>
          <div>
            <label for="name">Nome</label>
            <input 
            type="text"
            id="name" 
            placeholder="Insira seu nome..."
            value={user.name}
            onChange={(e) => setUser({
              ...user,
              name: e.target.value
            })}
            required
            />
          </div>
          
          <div>
            <label for="username">Nome de Usuário</label>
            <input 
            type="text"
            id="username" 
            placeholder="Insira um nome de usuário"
            value={user.username}
            onChange={(e) => setUser({
              ...user,
              username: e.target.value
            })}
            required
            />
          </div>
          
          <div>
            <label for="photo">
              Foto de perfil
              <small>(Opcional)</small>
            </label>
            <input 
            type="file" 
            id="photo" 
            accept="image/*"
            onChange={handleChangeImage}
            />
            {user.photo && (
              <img src={ user.photo } alt="Sua foto de perfil" />
            )}
          </div>
          
          <button type="submit">Cadastrar</button>
        </form>
      </section>
    </main>
  )
}