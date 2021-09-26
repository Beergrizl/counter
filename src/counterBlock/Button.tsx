import React from 'react';
import s from './Counter.module.css';

export type ButtonPropsType = {
    incValue: () => void
    resetButtonValue: ()=>void
    value: number

}

export const Button = (props: ButtonPropsType) => {


    return (
        <div className={s.buttonBlock}>
            <button onClick={props.incValue} className={s.button}>inc</button>
            <button onClick={props.resetButtonValue} className={s.button}
             /*disabled={props.value == 0}*/>reset</button>
        </div>
    );
}