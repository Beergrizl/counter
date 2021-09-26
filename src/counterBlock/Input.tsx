import React from 'react';
import s from './Counter.module.css';

export type InputPropsType = {
    value: number

}

export const Input = (props: InputPropsType) => {
    return (
        <div className={s.valueBlock}>
            <div className={s.value}> {props.value} </div>
        </div>
    );
}