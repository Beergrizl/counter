import React, {ChangeEvent, useEffect, useState} from 'react';
import s from './Setting.module.css';
import {SetValueType} from "../App";

type SettingComponentPropsType = {
    setWarningMessage: () => void
    setMessage: () => void
    setStartValue: (startValue: SetValueType) => void
    setFirstStart: (startValue: SetValueType) => void
    setMax: (maxValue: SetValueType) => void
}
export const SettingComponent = (props: SettingComponentPropsType) => {
    const [maxValue, setMaxValue] = useState<SetValueType>('');
    const [startValue, setStartValue] = useState<SetValueType>('');


    useEffect(() => {
        let startNew = localStorage.getItem('startValue')
        if (startNew) {
            let startOne = JSON.parse(startNew)
            setStartValue(startOne);
            props.setFirstStart(startOne);

        }
        let max = localStorage.getItem('maxValue');
        if (max) {
            let newMax = JSON.parse(max);
            setMaxValue(newMax);
            props.setMax(newMax)
        }
    }, [])

    let maxValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
        let max = e.currentTarget.value;
        (max <= startValue || Number(max) < 0) ? props.setWarningMessage()
            : props.setMessage();
        setMaxValue(Number(max));

    }
    let startValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
        let start = e.currentTarget.value;
        (start >= maxValue || Number(start) < 0) ? props.setWarningMessage()
            : props.setMessage();
        setStartValue(Number(start));
    }

    let onClickHandler = () => {
        props.setStartValue(startValue);
        props.setFirstStart(startValue);
        props.setMax(maxValue);
    }
    return (
        <div className={s.counterBlock}>
            <div className={s.inputBlock}>
                <div className={s.input}>
                    max value:
                    <input value={maxValue}
                           className={
                               maxValue <= startValue || maxValue < 0 //|| maxValue === startValue
                                   ? s.inputRedStart : s.inputArea}
                           type={"number"} onChange={maxValueHandler}/>
                </div>
                <div className={s.input}>
                    start value:
                    <input value={startValue}
                           className={
                               startValue >= maxValue || startValue < 0 //|| startValue === maxValue
                                   ? s.inputRedStart : s.inputArea}
                           type={"number"} onChange={startValueHandler}/>
                </div>
            </div>
            <div className={s.buttonBlock}>
                <button onClick={onClickHandler}
                        disabled={startValue >= maxValue || startValue < 0 || startValue === ""}
                        className={s.button}>set
                </button>
            </div>
        </div>

    );
}
