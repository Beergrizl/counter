import React from 'react';
import s from './Counter.module.css';
import {Button} from "./Button";
import {Input} from "./Input";

export type CounterComponentPropsType = {
    incValue: () => void;
    value: number
    resetButtonValue: ()=>void


}

export const CounterComponent = (props: CounterComponentPropsType) => {
       return (
        <div className={s.counterBlock}>
            <Input value={props.value}/>
            <Button incValue={props.incValue}
                    resetButtonValue={props.resetButtonValue}
                    value={props.value}


            />
        </div>
    );
}


