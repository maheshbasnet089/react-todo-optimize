import { FC, memo, useEffect } from "react"
import Task from "./Task"

export type Todo  = {
    id ?: number, 
    task : string 
}

interface IProps {
    todoList : Todo[]
}

const List:FC<IProps> = ({todoList})=>{
    useEffect(()=>{
        console.log("Rendering <List/>")
    })
    return (
        <ul>
            {todoList.map((todo:Todo)=>(
                <Task key={todo.id} task={todo.task} />
            ))}
        </ul>
    )
}

export default memo(List)