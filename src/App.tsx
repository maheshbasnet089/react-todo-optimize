import { ChangeEvent, memo, useEffect, useState } from "react"
import List,{Todo} from "./List"


const initialTodos: Todo[] = [
  {id:1,task : "Go Gym"}, 
  {id : 2, task : "Go Office"}
]
function App() {
  const [todoList,setTodoList] = useState<Todo[]>(initialTodos)
  const [task,setTask] = useState<string>("")
  useEffect(()=>{
    console.log("Rendering <App/>")
  })
  const handleCreate = ()=>{
    const newTodo = {
      id : Date.now(),
      task
    }
    setTodoList([...todoList,newTodo])
    setTask("")
  }
  return (
    <>
      <input type="text" value={task} onChange={(e:ChangeEvent<HTMLInputElement>)=>setTask(e.target.value)} />
      <button onClick={handleCreate}>Create</button>
      <List todoList={todoList} />
    </>
  )
}

export default memo(App)
