import React, { useState } from "react";


function ToDoList() {
    const [toDo, setToDo] = useState("");

    const onchange = (e: React.FormEvent<HTMLInputElement>) => {
        const { currentTarget: { value } } = e;
        setToDo(value);
    }

    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(toDo);
        setToDo("");
    }
    return (
        <>
            <form onSubmit={onSubmit}>
                <input value={toDo} onChange={onchange} placeholder="Write To Do"></input>
                <button>Submit</button>
            </form>
        </>
    );
}

export default ToDoList;