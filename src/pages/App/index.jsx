import { useContext } from "react"
import { Outlet, NavLink, Link } from "react-router"
import { UserContext } from "../../context/UserContext"
import logo from "../../assets/logotext.png"
import "./style.css"

function Header() {
  let user = useContext(UserContext)
  
  return (
    <header className="header-app">
      <div>
        <img alt="Social Fake Logo" src={logo} />
      </div>
      {user ? (
        <div class="user-account">
          <img src={user.photo} alt={user.name} />
          <p>{ user.name }</p>
        </div>
      ) : (
        <Link to="/cadastro">
          Cadastro
        </Link>
      )}
    </header>
  )
}

function NavBar() {
  return (
    <nav>
      <NavLink to="/">
        <span className="material-symbols-outlined">home</span>
      </NavLink>
      
      <NavLink to="/usuarios">
        <span className="material-symbols-outlined">group</span>
      </NavLink>
      
      <NavLink to="/tarefas">
        <span className="material-symbols-outlined">select_check_box</span>
      </NavLink>
      
      <NavLink to="/publicar">
        <span className="material-symbols-outlined">add_box</span>
      </NavLink>
      
      <NavLink to="/salvos">
        <span className="material-symbols-outlined">bookmarks</span>
      </NavLink>
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