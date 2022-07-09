import React from "react";
import { useRecoilValue } from "recoil";
import { toDoSelector } from "../atoms";
import CreateToDo from "./CreateToDo";
import Select from "./Select";
import TimeChange from "./TimeChange";
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

            <br />
            <hr />
            <h1>Time Change</h1>
            <TimeChange />
        </>
    )
}
export default ToDoList;