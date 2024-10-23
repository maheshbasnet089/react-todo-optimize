import { ChangeEvent, useCallback, useEffect, useMemo, useState } from "react"
import List,{Todo} from "./List"


const initialTodos: Todo[] = [
  {id:1,task : "Go Gym"}, 
  {id : 2, task : "Go Office"}
]
function App() {
  const [todoList,setTodoList] = useState<Todo[]>(initialTodos)
  const [task,setTask] = useState<string>("")
  const [term,setTerm] = useState<string>("")
  const handleSearch = ()=>{
    setTerm(task)
  }
  const filteredTodoList = useMemo(()=>todoList.filter((todo:Todo)=>{
    console.log("Filtering..")
    return todo.task.toLowerCase().includes(term.toLowerCase())
  }),[term,todoList])

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

  const handleDelete = useCallback(()=>(taskId : number)=>{
    const newTodoList = todoList.filter((todo:Todo)=>todo.id !== taskId)
    setTodoList(newTodoList)
  },[todoList])
  return (
    <>
      <input type="text" value={task} onChange={(e:ChangeEvent<HTMLInputElement>)=>setTask(e.target.value)} />
      <button onClick={handleCreate}>Create</button>
      <button onClick={handleSearch}>Search</button>
      <List todoList={filteredTodoList} handleDelete={handleDelete} />
    </>
  )
}

export default  App
