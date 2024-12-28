import { useState } from "react"
import { addComment } from "../../services/api"

export default function Comments({ comments, setComments, showComments, inputRef }) {
  let [commentInput, setCommentInput] = useState("")
  let showSend = commentInput ? true : false
  
  let commentsList = comments.map(comment => {
    return (
      <li key={ comment.id } className="comment">
        { comment.body }
      </li>
    )
  })
  
  function handleComment() {
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