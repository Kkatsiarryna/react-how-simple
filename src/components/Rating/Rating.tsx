import React, {memo} from "react";

export type RatingValueType =  0 | 1 | 2 | 3 | 4 | 5

type RatingPropsType = {
    value: RatingValueType
    onClick: (value: RatingValueType) => void
}

export const Rating = memo(RatingFirst);

export function RatingFirst(props: RatingPropsType) {
    console.log("Rating ren");
    return <div>
        <Star selected={ props.value > 0 } onClick={props.onClick} value={1}/>
        <Star selected={ props.value > 1 } onClick={props.onClick} value={2}/>
        <Star selected={ props.value > 2 } onClick={props.onClick} value={3}/>
        <Star selected={ props.value > 3 } onClick={props.onClick} value={4}/>
        <Star selected={ props.value > 4 } onClick={props.onClick} value={5}/>

    </div>
}


type StarPropsType = {
    selected: boolean
    value: RatingValueType
    onClick: (value: RatingValueType) => void
}

function Star(props: StarPropsType) {
    // debugger
    console.log("Star ren");

    return <span onClick={() =>props.onClick(props.value)}>
        {props.selected ? <b>Star </b> : 'Star '}</span>;
/*
    return props.selected === true ?
        <span><b>Star </b></span> :
        <span>Star </span>;
*/
}