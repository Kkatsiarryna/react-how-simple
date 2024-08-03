import React, {memo} from "react";

type PropsType = {
    //on: boolean
    value: boolean
    onChange: (value: boolean) => void
}
export const OnOff = memo(OnOffFirst);

export function OnOffFirst(props: PropsType) {

    //const[on, setOn] =useState<boolean>(false);

    const onClicOnkHandler = () => {
        //setOn(true);
        props.onChange(true);

    }
    const onClicOffkHandler = () => {
       // setOn(false)
        props.onChange(false);
    }



    const onStyle ={
        width: '30px',
        height: '20px',
        border: "1px solid black",
        display: 'inline-block',
        padding: '2px',
        backgroundColor: props.value ? "green" : "white"
    }
    const offStyle = {
        width: '30px',
        height: '20px',
        border: "1px solid black",
        display: 'inline-block',
        marginLeft: "2px",
        padding: '2px',
        backgroundColor: props.value ? "white" : "red",
    }
    const indicatorStyle = {
        width: '10px',
        height: '10px',
        borderRadius: "5px",
        border: "1px solid black",
        display: 'inline-block',
        marginLeft: "5px",
        backgroundColor: props.value ? "green" : "red",
    }



    return (
        <div>
            <div style={onStyle} onClick={ () => onClicOnkHandler()  }>On</div>
            <div style={offStyle} onClick={ () => onClicOffkHandler()}>Off</div>
            <div style={indicatorStyle}></div>
        </div>
    )
}