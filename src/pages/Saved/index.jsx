import { useState, useEffect } from "react"
import Posts from "../../components/Posts"

export default function Saved() {
  let [savedPosts, setSavedPosts] = useState([])
  
  useEffect(() => {
    let saved = JSON.parse(localStorage.getItem("saved")) || []
    setSavedPosts(saved)
  }, [])
  
  return (
    <>
      {savedPosts.length === 0 ? (
        <p>Sem Posts Salvos</p>
      ) : (
        <Posts posts={savedPosts} />
      )}
    </>
  )
}