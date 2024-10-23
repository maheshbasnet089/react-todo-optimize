import { FC, memo, useEffect } from "react"
import Task from "./Task"

export type Todo  = {
    id : number, 
    task : string,
    handleDelete?:any
}


interface IProps {
    todoList : Todo[], 
    handleDelete : any
}

const List:FC<IProps> = ({todoList,handleDelete})=>{
    useEffect(()=>{
        console.log("Rendering <List/>")
    })
    return (
        <ul>
            {todoList.map((todo:Todo)=>(
                <Task key={todo.id} task={todo.task} handleDelete={handleDelete} id={todo.id} />
            ))}
        </ul>
    )
}

export default memo(List)