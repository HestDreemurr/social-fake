import { useState, useContext } from "react"
import { addComment } from "../../services/api"
import { UserContext } from "../../context/UserContext"
import profile from "../../assets/user-default-avatar.jpeg"

export default function Comments({ comments, setComments, showComments, inputRef }) {
  let [commentInput, setCommentInput] = useState("")
  let user = useContext(UserContext).user
  let showSend = commentInput ? true : false
  
  let commentsList = comments.map(comment => {
    return (
      <li key={ comment.id } className="comment">
        { comment.body }
      </li>
    )
  })
  
  function handleComment() {
    if (!user) {
      alert("Cadastre-se para comentar")
      return
    }
    
    addComment({ body: commentInput })
      .then(res => {
        if (res.status !== 201) {
          alert("Erro ao Enviar comentario")
          return
        }
        setComments([
          ...comments,
          {
            body: commentInput,
            id: res.id
          }
        ])
        setCommentInput("")
      })
  }
  
  return (
    <>
      {showComments && (
        <div className="comments">
          <ul>
            { commentsList }
          </ul>
          
          <div className="comment-input">
            <img src={ user ? user.photo : profile } alt="Sua foto de peril" />
            <input
            ref={inputRef}
            value={commentInput}
            onChange={(e) => setCommentInput(e.target.value)}
            placeholder="Comentar..."
            />
            {showSend && (
              <button onClick={handleComment}>
                <span className="material-symbols-outlined">send</span>
              </button>
            )}
          </div>
        </div>
      )}
    </>
  )
}