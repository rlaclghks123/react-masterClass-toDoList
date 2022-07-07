import { useRecoilValue } from "recoil";
import { toDoAtom, toDoSelector } from "../atoms";
import CreateToDo from "./CreateToDo";
import ToDo from "./ToDo";



function ToDoList() {


    const [toDo, doing, done] = useRecoilValue(toDoSelector)

    return (
        <>
            <h1>ToDos</h1>
            <hr />
            <CreateToDo />
            <ul>
                {toDo.map((toDo) => <ToDo key={toDo.id} {...toDo} />)}
            </ul>

            <hr />
            <h1>Doing</h1>
            <ul>
                {doing.map((toDo) => <ToDo key={toDo.id} {...toDo} />)}
            </ul>

            <hr />
            <h1>Done</h1>
            <ul>
                {done.map((toDo) => <ToDo key={toDo.id} {...toDo} />)}
            </ul>
        </>
    )
}
export default ToDoList;