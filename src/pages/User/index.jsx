import { useState, useEffect } from "react"
import { useParams, Link } from "react-router"
import Posts from "../../components/Posts"
import { findUser, findPosts } from "../../services/api"
import "./style.css"

export default function User() {
  let [user, setUser] = useState(null)
  let [userPosts, setUserPosts] = useState([])
  let { id } = useParams()
  
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
            <Posts posts={userPosts} />
          </div>
        </main>
      )}
    </>
  )
}