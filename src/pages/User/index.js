import React, { useState, useEffect } from "react"
import { useParams, Link } from "react-router"
import Post from "../../components/Post"
import { findUser, findPosts } from "../../services/api"
import "./style.css"

export default function User() {
  let [user, setUser] = useState(null)
  let [userPosts, setUserPosts] = useState([])
  let { id } = useParams()
  
  let userPostsArticles = userPosts.map(post => {
    return (
      <Post post={post} key={ post.id } />
    )
  })
  
  useEffect(() => {
    findUser(id).then(user => setUser(user))
  }, [id])
  
  useEffect(() => {
    findPosts(id).then(posts => setUserPosts(posts))
  }, [id])
  
  return (
    <>
      {user && (
        <main>
          <header className="header-user">
            <Link to="/">
              <span className="material-symbols-outlined">home</span>
            </Link>
            <h3>{ user.username }</h3>
          </header>
          
          <section className="user">
            <div>
              <img src={ user.avatar }  alt={ user.name } />
              <h4>{ user.name }</h4>
              <p>{ user.username }</p>
            </div>
            
            <div>
              <h4>{ userPosts.length }</h4>
              <p>Publicações</p>
            </div>
          </section>
          
          <div className="posts">
            { userPostsArticles }
          </div>
        </main>
      )}
    </>
  )
}