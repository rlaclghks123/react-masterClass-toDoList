import { useForm } from "react-hook-form";
import { atom, useRecoilState } from "recoil";

interface IForm {
    toDo: string;
}

interface IToDo {
    text: string;
    id: number;
    catergory: "TO_DO" | "DOING" | "DONE";
}

const toDoAtom = atom<IToDo[]>({
    key: "toDo",
    default: [],
})
function ToDoList() {

    const { register, handleSubmit, setValue } = useForm<IForm>();
    const [toDos, setToDos] = useRecoilState<IToDo[]>(toDoAtom);
    const onValid = ({ toDo }: IForm) => {
        setToDos((prev) => [{ text: toDo, id: Date.now(), catergory: "TO_DO" }, ...prev])
        setValue("toDo", "");
    }

    return (
        <>
            <form onSubmit={handleSubmit(onValid)}>
                <input {...register("toDo", { required: "Write To Do" })} placeholder="Write To Do"></input>
                <button>Add</button>
            </form>
            <ul>
                {toDos.map((toDo) => <li key={toDo.id}>{toDo.text}</li>)}
            </ul>
        </>
    )
}
export default ToDoList;