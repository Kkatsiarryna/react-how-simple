import React from "react";

type AccordionPropsType = {
    titleValue: string;
    //collapsed: boolean;
}

function UncotrolledAccordion(props: AccordionPropsType) {
    console.log("Accordion ren");


    //const collapsed = true;

    const [collapsed, setCollapsed] = React.useState(true);

    const onClickHandler = () => {
        setCollapsed(!collapsed)
    }

    return <div>
        <AccordionTitle title={props.titleValue}/>
        <button onClick={onClickHandler}>TOGGLE</button>
        {!collapsed && <AccordionBody/>}
    </div>
}

type AccordionTitlePropsType = {
    title: string;
}

function AccordionTitle(props: AccordionTitlePropsType) {
    console.log("AccordionTitle ren");
    return <h3> {props.title} </h3>;
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