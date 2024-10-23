import { FC, memo, useEffect } from "react";
import { Todo } from "./List";


const Task:FC<Todo> = ({task})=>{
    useEffect(()=>{
        console.log("Rendering <Task />",task)
    })
    return (
        <li>{task}</li>
    )
}

export default memo(Task)