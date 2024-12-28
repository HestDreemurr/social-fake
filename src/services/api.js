let url = "https://jsonplaceholder.typicode.com"

async function getPosts() {
  let posts = []
  for (let i = 0; i < 3; i++) {
    let randomId = Math.floor(Math.random() * 100) + 1
    let res = await fetch(`${url}/posts/${randomId}`)
    let post = await res.json()
    posts.push(post)
  }
  return posts
}

async function findPosts(userId) {
  let res = await fetch(`${url}/posts?userId=${userId}`)
  let posts = await res.json()
  return posts
}

async function addPost(post) {
  let res = await fetch(`${url}/posts`, {
    method: "POST",
    body: JSON.stringify(post),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    }
  })
  return res
}

async function getUsers() {
  let res = await fetch(`${url}/users`)
  let users = await res.json()
  users.forEach(user => {
    user.avatar = `https://reqres.in/img/faces/${user.id}-image.jpg`
  })
  return users
}

async function findUser(id) {
  let res = await fetch(`${url}/users/${id}`)
  let usuario = await res.json()
  usuario.avatar = `https://reqres.in/img/faces/${id}-image.jpg`
  return usuario
}

async function findComments(postId) {
  let res = await fetch(`${url}/comments?postId=${postId}`)
  let comentarios = await res.json()
  return comentarios
}

async function addComment(comment) {
  let res = await fetch(`${url}/comments`, {
    method: "POST",
    body: JSON.stringify(comment),
    headers: { 'Content-type': 'application/json; charset=UTF-8' }
  })
  let commentRes = await res.json()
  commentRes.status = res.status
  return commentRes
}

async function getTasks() {
  let res = await fetch(`${url}/todos`)
  let tasks = await res.json()
  return tasks
}

async function addTask(task) {
  let res = await fetch(`${url}/todos`, {
    method: "POST",
    body: JSON.stringify(task),
    headers: { 'Content-type': 'application/json; charset=UTF-8' }
  })
  return res
}

function getLikes() {
  let likes = Math.floor(Math.random() * (1000 - 200 + 1)) + 200 // Número aleatório entre 1000 e 200
  return likes
}

export { getPosts, getUsers, findUser, findComments, getLikes, findPosts, getTasks, addPost, addTask, addComment }