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

export const catergoryAtom = atom({
    key: "category",
    default: "TO_DO",
})

export const toDoSelector = selector({
    key: "toDoSelector",
    get: ({ get }) => {
        const toDos = get(toDoAtom);
        const category = get(catergoryAtom);

        return toDos.filter((toDo) => toDo.catergory === category);
    }
})