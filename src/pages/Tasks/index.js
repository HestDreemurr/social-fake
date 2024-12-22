import React, { useState, useEffect } from "react"
import Task from "../../components/Task"
import { getTasks } from "../../services/api"
import "./style.css"

export default function Tasks() {
  let [tasks, setTasks] = useState([])
  
  let tasksList = tasks.map(task => {
    return (
      <Task task={task} key={ task.id } />
    )
  })
  
  useEffect(() => {
    getTasks().then(tasks => setTasks(tasks))
  }, [])
  
  return (
    <ul className="tasks">
      { tasksList }
    </ul>
  )
}