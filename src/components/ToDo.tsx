import React from "react";
import { useSetRecoilState } from "recoil";
import { IToDo, toDoAtom } from "../atoms";


function ToDo({ text, id, catergory }: IToDo) {

    const setToDos = useSetRecoilState(toDoAtom);

    const onClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        const { currentTarget: { name } } = event;

        setToDos((oldToDos) => {
            const targetIndex = oldToDos.findIndex((toDo) => toDo.id === id);

            const newToDo = { text, id, catergory: name as any };


            return [...oldToDos.slice(0, targetIndex), newToDo, ...oldToDos.slice(targetIndex + 1)];
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