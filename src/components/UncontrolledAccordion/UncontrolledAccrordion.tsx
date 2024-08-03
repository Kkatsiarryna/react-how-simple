import React, {memo} from "react";
import {reducer, TOGGLE_COLLAPSED} from "./reducer";

type AccordionPropsType = {
    titleValue: string;
}

export function UncotrolledAccordionFirst(props: AccordionPropsType) {
    console.log("Accordion ren");
    //const [collapsed, setCollapsed] = React.useState(true);
    const [state, dispatch] = React.useReducer(reducer, {collapsed: false});

    // const onClickHandler = () => {
    //     setCollapsed(!collapsed)
    // }
    return <div>
        {/*<AccordionTitle title={props.titleValue} onClick={onClickHandler}/>*/}
        {/*<button onClick={onClickHandler}>TOGGLE</button>*/}

        <AccordionTitle title={props.titleValue} onClick={() => {dispatch({type: TOGGLE_COLLAPSED})} }/>
        {!state.collapsed && <AccordionBody/>}
    </div>
}

type AccordionTitlePropsType = {
    title: string;
    onClick: () => void
}

function AccordionTitle(props: AccordionTitlePropsType) {
    console.log("AccordionTitle ren");
    return <h3 onClick={props.onClick}> {props.title} </h3>;
}

function AccordionBody() {
    console.log("AccordionBody ren");
    return (<ul>
        <li> 1</li>
        <li> 2</li>
        <li> 3</li>
    </ul>)
}

export const UncotrolledAccordion = memo(UncotrolledAccordionFirst);