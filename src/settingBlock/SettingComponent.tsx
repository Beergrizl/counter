import React, {ChangeEvent, useState} from 'react';
import s from './Setting.module.css';

type SettingComponentPropsType = {
    setStartValue: (startValue: string) => void
    setFirstStart: (startValue: string) => void
}

export const SettingComponent = (props: SettingComponentPropsType) => {

    const  [maxValue, setMaxValue]= useState('');
    const  [startValue, setStartValue]= useState('');

    let maxValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setMaxValue(e.currentTarget.value)
    }

   let startValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
       setStartValue(e.currentTarget.value)
    }
    let onClickHandler = () => {
        props.setStartValue(startValue);
        props.setFirstStart(startValue)
    }

    return (
        <div className={s.counterBlock}>
            <div className={s.inputBlock}>
                <div className={s.input}>
                    max value:
                    <input value ={maxValue} type={"number"} onChange={maxValueHandler}/>
                </div>
                <div className={s.input}>
                    start value:
                    <input value={startValue} className={s.inputArea}
                           type={"number"} onChange={startValueHandler}/>
                </div>
            </div>
            <div className={s.buttonBlock}>
                <button
                        onClick={onClickHandler}

                        className={s.button}>set</button>
            </div>
        </div>

    );
}
