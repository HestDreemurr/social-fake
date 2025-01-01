import { useContext } from "react"
import { Outlet, NavLink, Link } from "react-router"
import { UserContext } from "../../context/UserContext"
import logo from "../../assets/logotext.png"
import "./style.css"

function Header() {
  let user = useContext(UserContext).user
  
  return (
    <header className="header-app">
      <div>
        <img alt="Social Fake Logo" src={logo} />
      </div>
      {user ? (
        <Link to="/conta" className="user-account">
          <img src={user.photo} alt={user.name} />
        </Link>
      ) : (
        <Link to="/cadastro" className="cadastro-link">
          Cadastro
        </Link>
      )}
    </header>
  )
}

function NavBar() {
  return (
    <nav>
      <div>
        
        <NavLink to="/">
          <span className="material-symbols-outlined">home</span>
          <span className="link-name">Início</span>
        </NavLink>
        
        <NavLink to="/usuarios">
          <span className="material-symbols-outlined">group</span>
          <span className="link-name">Usuários</span>
        </NavLink>
        
        <NavLink to="/tarefas">
          <span className="material-symbols-outlined">select_check_box</span>
          <span className="link-name">Tarefas</span>
        </NavLink>
        
        <NavLink to="/publicar">
          <span className="material-symbols-outlined">add_box</span>
          <span className="link-name">Publicar</span>
        </NavLink>
        
        <NavLink to="/salvos">
          <span className="material-symbols-outlined">bookmarks</span>
          <span className="link-name">Salvos</span>
        </NavLink>
      </div>
    </nav>
  )
}

export default function App() {
  return (
    <>
      <Header />
      <NavBar />
      <main>
        <Outlet />
      </main>
    </>
  )
}