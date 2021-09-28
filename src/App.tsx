import React, {useState} from 'react';
import {CounterComponent} from "./counterBlock/CounterComponent";
import {SettingComponent} from "./settingBlock/SettingComponent";
import s from "./counterBlock/Counter.module.css";
export type SetValueType = number | string;

function App() {


    let [value, setValue] = useState<SetValueType>("");
    let [resetValue, setFirstStartValue] = useState<SetValueType>(0);
    let [maxValue, setMaxValue] = useState<SetValueType>(0);


    function incValue() {
       if (typeof value === "number") {
           setValue(value + 1)
       }
    }

    function setMax(maxValue: SetValueType) {
        setMaxValue(Number(maxValue))
    }

    function setStartValue(startValue: SetValueType) {
        setValue(Number(startValue))
    }

    function setFirstStart(startValue: SetValueType) {
        setFirstStartValue(Number(startValue))
    }

    function resetButtonValue() {
        setValue(resetValue)
    }


    return (
        <div className={s.windowBlock}>
            <SettingComponent setStartValue={setStartValue}
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
