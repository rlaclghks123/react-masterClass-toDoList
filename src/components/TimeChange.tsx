import React from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { hourSelector, minuteAtom } from "../atoms";

function TimeChange() {

    const [minutes, setMinutes] = useRecoilState(minuteAtom);
    const hours = useRecoilValue(hourSelector);
    const onChangeMinutes = (event: React.FormEvent<HTMLInputElement>) => {

        setMinutes(+event.currentTarget.value);

    }

    return (
        <>
            <input value={minutes} onChange={onChangeMinutes} placeholder="Minutes"></input>
            <input value={`${hours} 시간`} placeholder="Hours"></input>
        </>
    )
}
export default TimeChange;