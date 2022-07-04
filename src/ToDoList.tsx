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

function ToDoList() {
    const { register, watch, handleSubmit, formState } = useForm();

    const onValid = (data: any) => {
        console.log(data);
    }
    console.log(formState.errors);
    return (
        <div>
            <form style={{ display: "flex", flexDirection: "column" }} onSubmit={handleSubmit(onValid)}>
                <input {...register("Email", { required: true, minLength: 5 })} placeholder="Email" />
                <input {...register("firstName", { required: true, minLength: 5 })} placeholder="First Name" />
                <input {...register("lastName", { required: true, minLength: 5 })} placeholder="Last Name" />
                <input {...register("username", { required: true, minLength: 5 })} placeholder="Username" />
                <input {...register("password", {
                    required: true,
                    minLength: {
                        value: 5,
                        message: "Your Password is too long"
                    }
                })} placeholder="Password" />
                <input {...register("password1", { required: true, minLength: 5 })} placeholder="Password1" />
                <button>Add</button>
            </form>
        </div>
    );
}
export default ToDoList;