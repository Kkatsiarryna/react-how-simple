import {memo, useState} from "react";

type PropsType = {
    //on: boolean
    onChange: (value: boolean) => void;
    defaultOn?: boolean
}

export function UncontrolledOnOffFirst(props: PropsType) {

    const[on, setOn] =useState(props.defaultOn ? props.defaultOn : false);

    const onClicOnkHandler = () => {
        setOn(true);
        props.onChange(true)
    }
    const onClicOffkHandler = () => {
        setOn(false)
        props.onChange(false)
    }



    const onStyle ={
        width: '30px',
        height: '20px',
        border: "1px solid black",
        display: 'inline-block',
        padding: '2px',
        backgroundColor: on ? "green" : "white"
    }
    const offStyle = {
        width: '30px',
        height: '20px',
        border: "1px solid black",
        display: 'inline-block',
        marginLeft: "2px",
        padding: '2px',
        backgroundColor: on ? "white" : "red",
    }
    const indicatorStyle = {
        width: '10px',
        height: '10px',
        borderRadius: "5px",
        border: "1px solid black",
        display: 'inline-block',
        marginLeft: "5px",
        backgroundColor: on ? "green" : "red",
    }



    return (
        <div>
            <div style={onStyle} onClick={ () => onClicOnkHandler()  }>On</div>
            <div style={offStyle} onClick={ () => onClicOffkHandler()}>Off</div>
            <div style={indicatorStyle}></div>
        </div>
    )
}

export const UncontrolledOnOff = memo(UncontrolledOnOffFirst)