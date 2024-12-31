import ReactDOM from "react-dom/client"
import { BrowserRouter, Routes, Route } from "react-router"
import { Pages } from "./pages/pages"
import { UserProvider } from "./context/UserContext"
import "./index.css"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <UserProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Pages.App />}>
          <Route index element={<Pages.Home />} />
          <Route path="usuarios" element={<Pages.Users />} />
          <Route path="tarefas" element={<Pages.Tasks />} />
          <Route path="publicar" element={<Pages.Publish />} />
          <Route path="salvos" element={<Pages.Saved />} />
        </Route>
        
        <Route path="usuario/:id" element={<Pages.User />} />
        <Route path="cadastro" element={<Pages.Register />} />
      </Routes>
    </BrowserRouter>
  </UserProvider>
);