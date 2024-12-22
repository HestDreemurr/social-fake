import React from "react"
import { Outlet, NavLink } from "react-router"
import logo from "../../assets/logotext.png"
import "./style.css"

function Header() {
  return (
    <header className="header-app">
      <div>
        <img alt="Social Fake Logo" src={logo} />
      </div>
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
      
      <NavLink to="/notificacoes">
        <span className="material-symbols-outlined">notifications</span>
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