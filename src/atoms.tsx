import { atom, selector } from "recoil";

export interface IToDo {
    text: string;
    id: number;
    catergory: "TO_DO" | "DOING" | "DONE";
}

export const toDoAtom = atom<IToDo[]>({
    key: "toDo",
    default: [],
});

export const toDoSelector = selector({
    key: "toDoSelector",
    get: ({ get }) => {
        const toDos = get(toDoAtom);

        return [
            toDos.filter((toDo) => toDo.catergory === "TO_DO"),
            toDos.filter((toDo) => toDo.catergory === "DOING"),
            toDos.filter((toDo) => toDo.catergory === "DONE"),
        ]
    }
})