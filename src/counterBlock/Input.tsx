import React from 'react';
import s from './Counter.module.css';
import {SetValueType} from "../App";

export type InputPropsType = {
    value: SetValueType
maxValue: SetValueType
}

export const Input = (props: InputPropsType) => {
    return (
        <div className={s.valueBlock}>
            <div className={props.value===props.maxValue? s.redValue:s.value}> {
                props.value === "" ? "enter values and press set" : props.value
            }
            </div>
        </div>
    );
}