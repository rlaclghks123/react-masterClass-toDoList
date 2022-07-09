import React from "react";
import { useSetRecoilState } from "recoil";
import { Categories, IToDo, toDoAtom } from "../atoms";


function ToDo({ text, id, category }: IToDo) {

    const setToDos = useSetRecoilState(toDoAtom);

    const onClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        const { currentTarget: { name } } = event;

        setToDos((oldToDos) => {
            const targetIndex = oldToDos.findIndex((toDo) => toDo.id === id);

            const newToDo = { text, id, category: name as any };


            return [...oldToDos.slice(0, targetIndex), newToDo, ...oldToDos.slice(targetIndex + 1)];
        }
        );

    }

    const onDelete = () => {

        setToDos((oldToDo) => {
            const targetIndex = oldToDo.findIndex(toDo => toDo.id === id);
            return [...oldToDo.slice(0, targetIndex), ...oldToDo.slice(targetIndex + 1)];
        }
        )
    }

    return (
        <li>
            <span>{text}</span>

            {category !== Categories.TO_DO && <button name={Categories.TO_DO} onClick={onClick}>To Do</button>}
            {category !== Categories.DOING && <button name={Categories.DOING} onClick={onClick}>DOING</button>}
            {category !== Categories.DONE && <button name={Categories.DONE} onClick={onClick}>DONE</button>}
            <button onClick={onDelete}>❌</button>

        </li>);
}
export default ToDo;