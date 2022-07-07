import React from "react";
import { useSetRecoilState } from "recoil";
import { IToDo, toDoAtom } from "../atoms";


function ToDo({ text, id, catergory }: IToDo) {

    const setToDos = useSetRecoilState(toDoAtom);

    const onClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        const { currentTarget: { name } } = event;

        setToDos((oldToDos) => {
            const tergetIndex = oldToDos.findIndex((toDo) => toDo.id === id);
            const oldToDo = { text, id, catergory };
            const newToDo = { text, id, catergory: name };
            console.log(oldToDo);
            console.log(newToDo);
            return oldToDos;
        }
        );

    }

    return (<li>
        <span>{text}</span>


        {catergory !== "TO_DO" && <button name="TO_DO" onClick={onClick}>To Do</button>}
        {catergory !== "DOING" && <button name="DOING" onClick={onClick}>DOING</button>}
        {catergory !== "DONE" && <button name="DONE" onClick={onClick}>DONE</button>}

    </li>);
}
export default ToDo;