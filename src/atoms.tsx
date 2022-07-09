import { atom, selector } from "recoil";


export enum Categories {
    "TO_DO" = "TO_DO",
    "DOING" = "DOING",
    "DONE" = "DONE"
}
export interface IToDo {
    text: string;
    id: number;
    category: Categories;
}


const localStorageEffect = (key: string) => ({ setSelf, onSet }: any) => {
    const savedValue = localStorage.getItem("toDo")
    if (savedValue != null) {
        setSelf(JSON.parse(savedValue));
    }

    onSet((newValue: string) => {

        const confirm = newValue.length === 0;
        confirm ? localStorage.removeItem(key) : localStorage.setItem(key, JSON.stringify(newValue));
    });
};

export const toDoAtom = atom<IToDo[]>({
    key: "toDo",
    default: [],
    effects: [localStorageEffect("toDo")],
});

export const categoryAtom = atom<Categories>({
    key: "category",
    default: Categories.TO_DO
})

export const toDoSelector = selector({
    key: "toDoSelector",
    get: ({ get }) => {
        const toDos = get(toDoAtom);
        const category = get(categoryAtom);

        return toDos.filter((toDo) => toDo.category === category);
    }
});

export const minuteAtom = atom({
    key: "minutes",
    default: 0,
});

export const hourSelector = selector({
    key: "hours",
    get: ({ get }) => {
        const minutes = get(minuteAtom);
        return (minutes / 60).toFixed(2);
    }
})