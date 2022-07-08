import React from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { catergoryAtom, toDoSelector } from "../atoms";
import CreateToDo from "./CreateToDo";
import ToDo from "./ToDo";



function ToDoList() {


    const toDos = useRecoilValue(toDoSelector);
    const [category, setCategory] = useRecoilState(catergoryAtom);

    const onInput = (e: React.FormEvent<HTMLSelectElement>) => {
        console.log(e.currentTarget.value);
        setCategory(e.currentTarget.value);
    }

    return (
        <>
            <h1>ToDos</h1>
            <hr />
            <select value={category} onInput={onInput}>
                <option value="TO_DO">To Do</option>
                <option value="DOING">Doing</option>
                <option value="DONE">Done</option>
            </select>
            <CreateToDo />
            <ul>
                {toDos.map((toDo) => <ToDo key={toDo.id} {...toDo} />)}
            </ul>
        </>
    )
}
export default ToDoList;