import React from "react";

type RatingPropsType = {
    //value: 0 | 1 | 2 | 3 | 4 | 5
}

export function UncontrolledRating(props: RatingPropsType) {
    console.log("Rating ren");

    const [value, setValue] = React.useState<number>(0);

    return <div>
        <Star selected={value > 0}/>
        <Star selected={value > 1}/>
        <Star selected={value > 2}/>
        <Star selected={value > 3}/>
        <Star selected={value > 4}/>

        <button onClick={() => {setValue(1)}}>1</button>
        <button onClick={() => {setValue(2)}}>2</button>
        <button onClick={() => {setValue(3)}}>3</button>
        <button onClick={() => {setValue(4)}}>4</button>
        <button onClick={() => {setValue(5)}}>5</button>
    </div>
}


type StarPropsType = {
    selected: boolean;
}

function Star(props: StarPropsType) {
    // debugger
    console.log("Star ren");
    return props.selected === true ?
        <span><b>Star </b></span> :
        <span>Star </span>;


}
