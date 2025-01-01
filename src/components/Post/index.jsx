import { useState, useEffect, useRef } from "react"
import { Link } from "react-router"

import Comments from "./Comments"
import { findUser, getLikes, findComments } from "../../services/api"
import "./style.css"

export default function Post({ post, isSaved, onSave }) {
  let [user, setUser] = useState(null)
  let [loadingUser, setLoadingUser] = useState(true)
  let [comments, setComments] = useState([])
  let [showComments, setShowComments] = useState(false)
  let [likes, setLikes] = useState(getLikes())
  let [isLiked, setIsLiked] = useState(false)
  let inputRef = useRef(null)
  
  useEffect(() => {
    findUser(post.userId).then(user => {
      setUser(user)
      setLoadingUser(false)
    })
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
    if (!showComments) {
      setTimeout(() => {
        inputRef.current.focus()
      }, 100)
    }
  }
  
  return (
    <article className="post">
      {loadingUser ? (
        <div className="loading-user">
          <div className="image"></div>
          <p className="username"></p>
        </div>
      ) : (
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
        
        <div className={ isLiked ? "like liked" : "like" }>
          <button onClick={handleLike}>
            <span className="material-symbols-outlined">thumb_up</span>
          </button>
          <span className="likes">{ likes }</span>
        </div>
        
        <div>
          <button onClick={handleComment}>
            <span className="material-symbols-outlined">comment</span>
          </button>
          <span>{ comments.length }</span>
        </div>
        
        <div className={isSaved ? "save saved" : "save"}>
          <button onClick={onSave}>
            <span className="material-symbols-outlined">bookmark</span>
          </button>
        </div>
        
      </div>
      
      <Comments comments={comments} setComments={setComments} showComments={showComments} inputRef={inputRef} />
    </article>
  )
}