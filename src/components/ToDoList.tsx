import { useRecoilValue } from "recoil";
import { toDoAtom } from "../atoms";
import CreateToDo from "./CreateToDo";
import ToDo from "./ToDo";



function ToDoList() {

    const toDos = useRecoilValue(toDoAtom);


    return (
        <>
            <CreateToDo />
            <ul>
                {toDos.map((toDo) => <ToDo key={toDo.id} {...toDo} />)}
            </ul>
        </>
    )
}
export default ToDoList;