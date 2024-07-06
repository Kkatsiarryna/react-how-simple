import {useState} from "react";

type PropsType = {
    //on: boolean
}





export function OnOff(props: PropsType) {

    const[on, setOn] =useState<boolean>(false);

    const onClicOnkHandler = () => {
        setOn(true);
    }
    const onClicOffkHandler = () => {
        setOn(false)
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