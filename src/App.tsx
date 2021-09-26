import React, {useState} from 'react';
import {CounterComponent} from "./counterBlock/CounterComponent";
import {SettingComponent} from "./settingBlock/SettingComponent";
import s from "./counterBlock/Counter.module.css";

function App() {


    let [value, setValue] = useState(0);
    let [resetValue, setFirstStartValue] = useState(0);


    function incValue() {
        setValue(value + 1);
    }

    function setStartValue(startValue: string) {
        setValue(Number(startValue))
    }

    function setFirstStart(startValue: string) {
        setFirstStartValue(Number(startValue))}

    function resetButtonValue(){
                 setValue(resetValue)
    }


    return (
        <div className={s.windowBlock}>
            <SettingComponent setStartValue={setStartValue}
                              setFirstStart={setFirstStart}/>
            <CounterComponent incValue={incValue}
                              resetButtonValue={resetButtonValue}
                              value={value}

            />
        </div>
    )
}

export default App;
