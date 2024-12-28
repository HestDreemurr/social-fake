import { useEffect, useState } from "react"
import { getPosts } from "../../services/api"
import Posts from "../../components/Posts"
import "./style.css"

export default function Home() {
  let [posts, setPosts] = useState([])
  let [loading, setLoading] = useState(false)
  
  useEffect(() => {
    setLoading(true)
    getPosts().then(posts => {
      setPosts(posts)
      setLoading(false)
    })
  }, [])
  
  function handleScroll() {
    if (window.innerHeight + document.documentElement.scrollTop >= document.documentElement.offsetHeight - 350 && !loading) {
      setLoading(true)
      getPosts().then(data => {
        let uniquePosts = data.filter(
          (newPost) => !posts.some((post) => post.id === newPost.id)
        )
        setPosts([...posts, ...uniquePosts])
        setLoading(false)
      })
    }
  }
  
  useEffect(() => {
    window.addEventListener("scroll", handleScroll)
    
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  })
  
  return (
    <>
      <Posts posts={posts} />
      {loading && (
        <div className="loading"></div>
      )}
    </>
  )
}
