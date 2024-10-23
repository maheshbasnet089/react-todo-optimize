import { FC, memo, useEffect } from "react";
import { Todo } from "./List";


const Task:FC<Todo> = ({id,task,handleDelete})=>{
    useEffect(()=>{
        console.log("Rendering <Task />",task)
    })
    return (
        <li>{task} <button onClick={()=>handleDelete(id)}>X</button> </li>
    )
}

export default memo(Task)