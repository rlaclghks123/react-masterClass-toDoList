import { useForm } from "react-hook-form";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { categoryAtom, toDoAtom } from "../atoms";

export interface IForm {
    toDo: string;
}


function CreateToDo() {
    const { register, handleSubmit, setValue } = useForm<IForm>();
    const setToDos = useSetRecoilState(toDoAtom);
    const category = useRecoilValue(categoryAtom);

    const onValid = ({ toDo }: IForm) => {
        setToDos((prev) => [{ text: toDo, id: Date.now(), category }, ...prev])
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