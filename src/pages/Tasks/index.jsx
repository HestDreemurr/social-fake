import { useState, useEffect } from "react"
import Task from "../../components/Task"
import { getTasks } from "../../services/api"
import "./style.css"

export default function Tasks() {
  let [tasks, setTasks] = useState([])
  let [loading, setLoading] = useState(false)
  
  let tasksList = tasks.map(task => {
    return (
      <Task task={task} key={ task.id } />
    )
  })
  
  useEffect(() => {
    setLoading(true)
    getTasks().then(tasks => {
      setTasks(tasks)
      setLoading(false)
    })
  }, [])
  
  return (
    <ul className="tasks">
      { tasksList }
      {loading && (
        <div className="loading"></div>
      )}
    </ul>
  )
}