import React from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { hourSelector, minuteAtom } from "../atoms";

function TimeChange() {

    const [minutes, setMinutes] = useRecoilState(minuteAtom);
    const [hours, setHours] = useRecoilState(hourSelector);
    const onChangeMinutes = (event: React.FormEvent<HTMLInputElement>) => {

        setMinutes(+event.currentTarget.value);
    }

    const onChangeHours = (event: React.FormEvent<HTMLInputElement>) => {
        setHours(+event.currentTarget.value);
    }
    return (
        <>
            <input type="number" value={minutes} onChange={onChangeMinutes} placeholder="Minutes"></input>
            <input type="number" value={hours} onChange={onChangeHours} placeholder="Hours"></input>
        </>
    )
}
export default TimeChange;