import { useRecoilState } from "recoil";
import { Categories, categoryAtom } from "../atoms";



function Select() {

    const [category, setCategory] = useRecoilState(categoryAtom);

    const onInput = (e: React.FormEvent<HTMLSelectElement>) => {
        setCategory(e.currentTarget.value as any);
    };

    return (
        <>
            <select value={category} onInput={onInput}>
                <option value={Categories.TO_DO}>To Do</option>
                <option value={Categories.DOING}>Doing</option>
                <option value={Categories.DONE}>Done</option>
            </select>
        </>

    )

}
export default Select;