import React, {useEffect, useState} from "react";
import {AnimationClock} from "./AnimationClock";
import {DigitalClock} from "./DigitalClock";

export type ClockViewPropsType = {
    time: Date
}

type ClockPropsType = {
    mode: 'digital' | 'animation'
}

export const Clock: React.FC<ClockPropsType> = (props) => {
    console.log('TICK');

    const [time, setTime] = useState(new Date());

    useEffect( ()=> {
        const intervalID = setInterval( ()=> {
            setTime(new Date ());
        }, 1000)

        return () => {
            clearInterval(intervalID)
        }
    }, [])

    let view;

    switch (props.mode){
        case "animation":
            view = <AnimationClock time={time}/>
            break;
        case "digital":
        default:
            view = <DigitalClock time={time}/>

    }

    return <>
        {view}
    </>
}