import React, {ChangeEvent, useRef, useState} from "react";


export default {
    title: 'input'
}

export const UncontroledInput = () => <input/>
export const TrackValueOfUncontroledInput = () => {
    const [ value, setValue] = useState("");
    const onChange = (event: ChangeEvent<HTMLInputElement> ) => {
        const actualValue = event.currentTarget.value;
        setValue(actualValue)
    }
    return <>
        <input value={value} onChange={onChange}/> - {value}
    </>
}
export const GetValueOfUncontroledInputByButtonPress = () => {
    const [ value, setValue] = useState("");
    const inputRef = useRef<HTMLInputElement>(null);
    const save = () => {
        const el = inputRef.current as HTMLInputElement;
        setValue(el.value)
    }
    return <>
        {/*<input id={'inputId'}/>*/}
        {/*<button onClick={ () => {*/}
        {/*    const el = document.getElementById("inputId") as HTMLInputElement;*/}
        {/*    setValue(el.value)*/}
        {/*    }*/}
        {/*}>save</button>*/}
        {/*actual value - {value}*/}

        <input ref = {inputRef} />
        <button onClick={save}>save</button>
        actual value - {value}
    </>
}
export const ControledInput = () => <input value={'it-incubator'}/>

export const ControlledInput = () => {
    const [parentValue, setParentValue] = useState("");
    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        setParentValue(e.currentTarget.value)
    };
    return <input value={parentValue} onChange = {onChange}/>
}

export const ControlledCheckbox = () => {
    const [parentValue, setParentValue] = useState(true);
    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        setParentValue(e.currentTarget.checked)
    };

    return <input type={"checkbox"} checked={parentValue} onChange = {onChange}/>
}

export const ControlledSelect = () => {
    const [parentValue, setParentValue] = useState<string | undefined>("2");
    const onChange = (e: ChangeEvent<HTMLSelectElement>) => {
       setParentValue(e.currentTarget.value)
    };

    return <select value={parentValue} onChange={onChange}>
        <option>none</option>
        <option  value={"1"} >Minsk</option>
        <option  value={"2"} >Moscow</option>
        <option  value={"3"} >Kiev</option>
    </select>
}


















