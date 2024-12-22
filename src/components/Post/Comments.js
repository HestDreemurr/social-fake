import React from "react"

export default function Comments({ comments, showComments }) {
  
  let commentsList = comments.map(comment => {
    return (
      <li key={ comment.id } className="comment">
        { comment.body }
      </li>
    )
  })
  
  return (
    <>
      {showComments && (
        <ul className="comments">
          { commentsList }
        </ul>
      )}
    </>
  )
}