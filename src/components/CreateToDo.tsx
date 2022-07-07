import { useForm } from "react-hook-form";
import { useSetRecoilState } from "recoil";
import { toDoAtom } from "../atoms";

export interface IForm {
    toDo: string;
}


function CreateToDo() {
    const { register, handleSubmit, setValue } = useForm<IForm>();
    const setToDos = useSetRecoilState(toDoAtom);

    const onValid = ({ toDo }: IForm) => {
        setToDos((prev) => [{ text: toDo, id: Date.now(), catergory: "TO_DO" }, ...prev])
        setValue("toDo", "");
    }

    return (
        <form onSubmit={handleSubmit(onValid)}>
            <input {...register("toDo", { required: "Write To Do" })} placeholder="Write To Do"></input>
            <button>Add</button>
        </form>
    )
}
export default CreateToDo;