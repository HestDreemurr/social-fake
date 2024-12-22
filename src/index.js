import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router"
import { Pages } from "./pages/pages"
import "./index.css"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Pages.App />}>
        <Route index element={<Pages.Home />} />
        <Route path="usuarios" element={<Pages.Users />} />
        <Route path="tarefas" element={<Pages.Tasks />} />
        <Route path="notificacoes" element={<Pages.Notifications />} />
      </Route>
      
      <Route path="usuario/:id" element={<Pages.User />} />
    </Routes>
  </BrowserRouter>
);