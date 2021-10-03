import React, {useEffect, useState} from 'react';
import {CounterComponent} from "./counterBlock/CounterComponent";
import {SettingComponent} from "./settingBlock/SettingComponent";
import s from "./counterBlock/Counter.module.css";

export type SetValueType = number | string

/*const useStateLS = (initialState: number, key: string) => {
    const [value, setValue] = useState(initialState)
    useEffect(() => {
        let valueAsString = localStorage.getItem(key);
        if (valueAsString) {
            let newValue = JSON.parse(valueAsString)
            setValue(newValue);
        }
    },[])
    const onChange = (value: number) => {
        localStorage.setItem(key, JSON.stringify(value))
        setValue(value)
    }
    return [value, onChange]
}*/

function App() {


    let [value, setValue] = useState<SetValueType>('');
    let [resetValue, setFirstStartValue] = useState<SetValueType>(0);
    let [maxValue, setMaxValue] = useState<SetValueType>(0);

    /*useEffect(() => {
        localStorage.setItem('value', JSON.stringify(value))
    },[value]);*/

    useEffect(() => {
        let valueAsString = localStorage.getItem('value');
        if (valueAsString) {
            let newValue = JSON.parse(valueAsString)
            setValue(newValue);
        }
    },[])


    function incValue() {
                 if (typeof value === "number") {
            setValue(value + 1)
            localStorage.setItem('value', JSON.stringify(value+1))
    }
    }

    function setMax(maxValue: SetValueType) {
        setMaxValue(Number(maxValue))
        localStorage.setItem('maxValue', JSON.stringify(maxValue))
    }
    /*useEffect(() => {
    let max1 = localStorage.getItem('maxValue');
    if (max1) {
        let newMax = JSON.parse(max1);
        setMaxValue(newMax);
    }
}, [])*/
    function setStartValue(startValue: SetValueType) {
        setValue(Number(startValue));
        localStorage.setItem('startValue', JSON.stringify(startValue))
    }


    function setFirstStart(startValue: SetValueType) {
        setFirstStartValue(Number(startValue))
        localStorage.setItem('resetValue', JSON.stringify(startValue))
    }
    useEffect(() => {
        let resetAsString = localStorage.getItem('resetValue');
        if (resetAsString) {
            let resValue = JSON.parse(resetAsString)
            setFirstStartValue(resValue);
        }
    },[])

    function resetButtonValue() {
        setValue(resetValue)
        localStorage.setItem('value', JSON.stringify(resetValue))

    }

    function setWarningMessage() {
        setValue('Incorrect value!')
    }

    function setMessage() {
        setValue('enter values and press set')
    }

    return (
        <div className={s.windowBlock}>
            <SettingComponent
                setMessage={setMessage}
                              setWarningMessage={setWarningMessage}
                              setStartValue={setStartValue}
                              setFirstStart={setFirstStart}
                              setMax={setMax}/>
            <CounterComponent incValue={incValue}
                              resetButtonValue={resetButtonValue}
                              value={value}
                              maxValue={maxValue}
                              resetValue={resetValue}
            />
        </div>
    )
}

export default App;
