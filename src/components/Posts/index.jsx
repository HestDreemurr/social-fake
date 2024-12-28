import { useState, useEffect } from "react"
import Post from "../Post"

export default function Posts({ posts }) {
  let [savedPosts, setSavedPosts] = useState([])
  
  useEffect(() => {
    let saved = JSON.parse(localStorage.getItem("saved")) || []
    setSavedPosts(saved)
  }, [])
  
  useEffect(() => {
    localStorage.setItem("saved", JSON.stringify(savedPosts))
  }, [savedPosts])
  
  let postsArticle = posts.map(post => {
    let isSaved = savedPosts.some(savedPost => savedPost.id === post.id)
    return (
      <Post key={ post.id } post={post} isSaved={isSaved} onSave={() => handleSave(post, isSaved)} />
    )
  })
  
  function handleSave(post, isSaved) {
    if (isSaved) {
      let newSavedPosts = savedPosts.filter(savedPost => savedPost.id !== post.id)
      setSavedPosts(newSavedPosts)
      return
    }
    let newSavedPosts = [...savedPosts, post]
    setSavedPosts(newSavedPosts)
  }
  
  return (
    <>
      { postsArticle }
    </>
  )
}