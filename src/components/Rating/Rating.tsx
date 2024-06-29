import React from "react";

type RatingPropsType = {
    value: 0 | 1 | 2 | 3 | 4 | 5
}

export function Rating(props: RatingPropsType) {
    console.log("Rating ren");
    return <div>
        <Star selected={ props.value > 0 }/>
        <Star selected={ props.value > 1 }/>
        <Star selected={ props.value > 2 }/>
        <Star selected={ props.value > 3 }/>
        <Star selected={ props.value > 4}/>

    </div>
    /*
        if (props.value === 3) {
            return (
                <div>
                    <Star selected={true}/>
                    <Star selected={true}/>
                    <Star selected={false}/>
                    <Star selected={false}/>
                    <Star selected={false}/>
                    <Star selected={false}/>
                </div>
            )
        }
        return (
            <div>
                <Star selected={true}/>
                <Star selected={true}/>
                <Star selected={true}/>
                <Star selected={false}/>
                <Star selected={false}/>
            </div>
        )
    */

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