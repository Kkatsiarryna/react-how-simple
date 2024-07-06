import React from "react";

type RatingPropsType = {
    //value: 0 | 1 | 2 | 3 | 4 | 5
}

export function UncontrolledRating(props: RatingPropsType) {
    console.log("Rating ren");

    const [value, setValue] = React.useState<number>(0);

    return <div>
        <Star selected={value > 0} onClick={() => {setValue(1)}}/>
        <Star selected={value > 1} onClick={() => {setValue(2)}}/>
        <Star selected={value > 2} onClick={() => {setValue(3)}} />
        <Star selected={value > 3} onClick={() => {setValue(4)}} />
        <Star selected={value > 4} onClick={() => {setValue(5)}}/>

 {/*       <button onClick={() => {setValue(1)}}>1</button>
        <button onClick={() => {setValue(2)}}>2</button>
        <button onClick={() => {setValue(3)}}>3</button>
        <button onClick={() => {setValue(4)}}>4</button>
        <button onClick={() => {setValue(5)}}>5</button>*/}
    </div>
}


type StarPropsType = {
    selected: boolean;
    onClick: () => void
}

function Star(props: StarPropsType) {
    // debugger
    console.log("Star ren");
    return (
        <span onClick={props.onClick}>
        {props.selected ? <b>Star </b> : 'Star'}
        </span>
    )


    // return props.selected === true ?
    //     <span><b>Star </b></span> :
    //     <span>Star </span>;


}
