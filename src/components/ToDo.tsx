import React from "react";
import { IToDo } from "../atoms";


function ToDo({ text, catergory }: IToDo) {

    // const onclick = (newCategory : IToDo["category"]) =>{}
    const onClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        const { currentTarget: { name } } = event;
        console.log(name);
    }

    return (<li>
        <span>{text}</span>

        {/* {catergory !== "TO_DO" && <button   onClick={()=>onClick("TO_DO"))}>To Do</button>}
        {catergory !== "DOING" &&     <button   onClick={()=>onClick("DOING"))}>DOING</button>}
        {catergory !== "DONE" &&      <button  onClick={()=>onClick("DONE"))}>DONE</button>}
         */}

        {catergory !== "TO_DO" && <button name="TO_DO" onClick={onClick}>To Do</button>}
        {catergory !== "DOING" && <button name="DOING" onClick={onClick}>DOING</button>}
        {catergory !== "DONE" && <button name="DONE" onClick={onClick}>DONE</button>}

    </li>);
}
export default ToDo;