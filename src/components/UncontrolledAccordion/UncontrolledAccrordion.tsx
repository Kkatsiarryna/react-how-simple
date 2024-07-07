import React from "react";

type AccordionPropsType = {
    titleValue: string;
}

function UncotrolledAccordion(props: AccordionPropsType) {
    console.log("Accordion ren");
    const [collapsed, setCollapsed] = React.useState(true);

    const onClickHandler = () => {
        setCollapsed(!collapsed)
    }
    return <div>
        <AccordionTitle title={props.titleValue} onClick={onClickHandler}/>
        {/*<button onClick={onClickHandler}>TOGGLE</button>*/}
        {!collapsed && <AccordionBody/>}
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

export default UncotrolledAccordion;