import React, { useState, useEffect } from "react"
import { Link } from "react-router"
import Like from "./Like"
import Comments from "./Comments"
import { findUser, getLikes, findComments } from "../../services/api"
import "./style.css"

export default function Post({ post }) {
  let [user, setUser] = useState(null)
  let [comments, setComments] = useState([])
  let [showComments, setShowComments] = useState(false)
  let [likes, setLikes] = useState(getLikes())
  let [isLiked, setIsLiked] = useState(false)
  
  useEffect(() => {
    findUser(post.userId).then(user => setUser(user))
  }, [post])
  
  useEffect(() => {
    findComments(post.id).then(comments => setComments(comments))
  }, [post])
  
  function handleLike() {
    if (isLiked) {
      setIsLiked(false)
      setLikes(likes - 1)
      return
    }
    setLikes(likes + 1)
    setIsLiked(true)
  }
  
  function handleComment() {
    setShowComments(!showComments)
  }
  
  return (
    <article className="post">
      {user && (
        <div className="user">
          <img src={ user.avatar }  alt={ user.name }/>
          <p>
            <Link to={ `/usuario/${user.id}` }>{ user.username }</Link>
          </p>
        </div>
      )}
      
      <div className="content">
        <h4>{ post.title }</h4>
        <p>{ post.body }</p>
      </div>
      
      <div className="interactions">
        <Like likes={ likes } onLike={handleLike} isLiked={isLiked} />
        
        <div>
          <button onClick={handleComment}>
            <span className="material-symbols-outlined">comment</span>
          </button>
          <span>{ comments.length }</span>
        </div>
        
      </div>
      
      <Comments comments={comments} showComments={showComments} />
    </article>
  )
}