import { atom } from "recoil";

export interface IToDo {
    text: string;
    id: number;
    catergory: "TO_DO" | "DOING" | "DONE";
}

export const toDoAtom = atom<IToDo[]>({
    key: "toDo",
    default: [],
});