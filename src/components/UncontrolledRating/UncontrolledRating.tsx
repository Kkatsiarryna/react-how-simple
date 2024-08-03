import React, {memo} from "react";

export type RatingValueType =  0 | 1 | 2 | 3 | 4 | 5
type RatingPropsType = {
   defaultValue?: RatingValueType
    onChange?: (value: RatingValueType) => void
}

export function UncontrolledRatingFirst(props: RatingPropsType) {
    console.log("Rating ren");

    const [value, setValue] = React.useState<RatingValueType>(props.defaultValue ? props.defaultValue : 0) ;

    return <div>
      {/*<Star selected={value > 0} setValue={() => { setValue(1); props.onChange(1); } } />*/}
        <Star selected={value > 0} setValue={() => { setValue(1) } } />
        <Star selected={value > 1} setValue={() => {setValue(2) }} />
        <Star selected={value > 2} setValue={() => {setValue(3)}} />
        <Star selected={value > 3} setValue={() => {setValue(4)}} />
        <Star selected={value > 4} setValue={() => {setValue(5)}} />

 {/*       <button onClick={() => {setValue(1)}}>1</button>
        <button onClick={() => {setValue(2)}}>2</button>
        <button onClick={() => {setValue(3)}}>3</button>
        <button onClick={() => {setValue(4)}}>4</button>
        <button onClick={() => {setValue(5)}}>5</button>*/}
    </div>
}


type StarPropsType = {
    selected: boolean;
    setValue: () => void
}

function Star(props: StarPropsType) {
    // debugger
    console.log("Star ren");
    return (
        <span onClick={() => props.setValue()}>
        {props.selected ? <b>Star </b> : 'Star '}
        </span>
    )


    // return props.selected === true ?
    //     <span><b>Star </b></span> :
    //     <span>Star </span>;


}

export const UncontrolledRating = memo(UncontrolledRatingFirst);