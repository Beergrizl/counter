import React, {ChangeEvent, useState} from 'react';
import s from './Setting.module.css';
import {SetValueType} from "../App";

type SettingComponentPropsType = {
    setStartValue: (startValue: SetValueType) => void
    setFirstStart: (startValue: SetValueType) => void
    setMax: (maxValue: SetValueType) => void
}
export const SettingComponent = (props: SettingComponentPropsType) => {
    const [maxValue, setMaxValue] = useState('');
    const [startValue, setStartValue] = useState('');

    let maxValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setMaxValue(e.currentTarget.value)
    }
    let startValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setStartValue(e.currentTarget.value)
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
                    <input value={maxValue} className={s.inputArea}
                           type={"number"} onChange={maxValueHandler}/>
                </div>
                <div className={s.input}>
                    start value:
                    <input value={startValue} className={s.inputArea}
                           type={"number"} onChange={startValueHandler}/>
                </div>
            </div>
            <div className={s.buttonBlock}>
                <button onClick={onClickHandler}
                        className={s.button}>set
                </button>
            </div>
        </div>

    );
}
