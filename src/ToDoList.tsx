import React, { useState } from "react";
import { useForm } from "react-hook-form";


// function ToDoList() {
//     const [toDo, setToDo] = useState("");

//     const onchange = (e: React.FormEvent<HTMLInputElement>) => {
//         const { currentTarget: { value } } = e;
//         setToDo(value);
//     }

//     const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
//         e.preventDefault();
//     if (toDo.length < 10) {
//     return setToDoError("To do should be longer");
//       }
//         console.log(toDo);
//         setToDo("");
//     }
//     return (
//         <>
//             <form onSubmit={onSubmit}>
//                 <input value={toDo} onChange={onchange} placeholder="Write To Do"></input>
//                 <button>Submit</button>
//             </form>
//         </>
//     );
// }

interface IForm {
    email: string;
    firstName: string;
    lastName: string;
    username: string;
    password: string;
    password1: string;
    extraError?: string;
}

function ToDoList() {
    const { register, watch, handleSubmit, formState: { errors }, setError } = useForm<IForm>({ defaultValues: { email: "@naver.com" } });

    const onValid = (data: IForm) => {

        if (data.password !== data.password1) {
            setError("password1", { message: "password not correct" }, { shouldFocus: true });
        }
        // server가 off와 같이 문제 발생시 사용 가능.  setError("extraError", { message: "Server Off" })
    }

    return (
        <div>
            <form style={{ display: "flex", flexDirection: "column" }} onSubmit={handleSubmit(onValid)}>

                <input {...register("email", {
                    required: "Write Email", pattern: {
                        value: /^[A-Za-z0-9._%+-]+@naver.com$/,
                        message: "Only @naver.com allowed",
                    },
                    validate: {
                        dog: (value) => value.includes("dog") ? "No Allow Dog" : true,
                        cat: (v) => v.includes("cat") ? "No Allow Cat" : true
                    }
                })} placeholder="Email" />
                <span>{errors?.email?.message}</span>

                <input {...register("firstName", { required: "Write Plz" })} placeholder="First Name" />
                <span>{errors?.firstName?.message}</span>

                <input {...register("lastName", { required: "Write Plz" })} placeholder="Last Name" />
                <span>{errors?.lastName?.message}</span>

                <input {...register("username", { required: "Write Plz" })} placeholder="Username" />
                <span>{errors?.username?.message}</span>

                <input {...register("password", {
                    required: true,
                    minLength: {
                        value: 5,
                        message: "Your Password is too short"
                    }
                })} placeholder="Password" />
                <span>{errors?.password?.message}</span>
                <input {...register("password1", {
                    required: "Write Plz", minLength: {
                        value: 5,
                        message: "Your Password1 is too short"
                    }
                })} placeholder="Password1" />
                <span>{errors?.password1?.message}</span>
                <button>Add</button>
                <span>{errors?.extraError?.message}</span>
            </form>
        </div>
    );
}
export default ToDoList;