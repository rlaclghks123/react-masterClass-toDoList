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
    const { register, watch } = useForm();
    console.log(watch());
    return (
        <div>
            <form>
                <input {...register("email")} placeholder="Email" />
                <input {...register("firstName")} placeholder="First Name" />
                <input {...register("lastName")} placeholder="Last Name" />
                <input {...register("username")} placeholder="Username" />
                <input {...register("password")} placeholder="Password" />
                <input {...register("password1")} placeholder="Password1" />
                <button>Add</button>
            </form>
        </div>
    );
}
export default ToDoList;