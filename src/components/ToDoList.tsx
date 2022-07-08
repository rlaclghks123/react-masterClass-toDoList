import React from "react";
import { useRecoilValue } from "recoil";
import { toDoSelector } from "../atoms";
import CreateToDo from "./CreateToDo";
import Select from "./Select";
import ToDo from "./ToDo";



function ToDoList() {


    const toDos = useRecoilValue(toDoSelector);


    return (
        <>
            <h1>ToDos</h1>
            <hr />
            <Select />
            <CreateToDo />
            <ul>
                {toDos.map((toDo) => <ToDo key={toDo.id} {...toDo} />)}
            </ul>
        </>
    )
}
export default ToDoList;