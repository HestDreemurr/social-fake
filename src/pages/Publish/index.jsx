import { useState } from "react"
import { useNavigate } from "react-router"
import { addPost } from "../../services/api"
import "./style.css"

export default function Publish() {
  let [isPosting, setIsPosting] = useState(false)
  let [publishData, setPublishData] = useState({
    title: "",
    body: ""
  })
  let navigate = useNavigate()
  
  function handleSubmit(e) {
    e.preventDefault()
    
    setIsPosting(true)
    
    addPost(publishData)
      .then((res) => {
        setIsPosting(false)
        if (res.status !== 201) {
          alert("Erro ao Publicar Post")
          return
        }
        alert("Post Publicado com Sucesso")
        navigate("/")
      })
  }
  
  return (
    <section className="publish">
      <h1>Publicar</h1>
      <form onSubmit={handleSubmit}>
        <div className="input-field">
          <input
          value={ publishData.title }
          onChange={ (e) => setPublishData({ ...publishData, title: e.target.value}) }
          placeholder="Título do Post (opcional)"
          />
        </div>
        
        <div className="input-field">
          <textarea
          value={ publishData.body }
          onChange={ (e) => setPublishData({ ...publishData, body: e.target.value}) }
          placeholder="Descrição do Post"
          required
          />
        </div>
        
        <button type="submit" className={isPosting ? "posting" : ""}>Postar</button>
      </form>
    </section>
  )
}