import React from "react"

export default function Like({ likes, onLike, isLiked }) {
  return (
    <div className={ isLiked ? "like liked" : "like" }>
      <button onClick={onLike}>
        <span className="material-symbols-outlined">thumb_up</span>
      </button>
      <span className="likes">{ likes }</span>
    </div>
  )
}