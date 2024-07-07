import React from "react";

type AccordionPropsType = {
    titleValue: string;
    collapsed: boolean;
    onChange: () => void
}

function Accordion(props: AccordionPropsType) {
    console.log("Accordion ren");
    return <div>
        <AccordionTitle title={props.titleValue} onClick={props.onChange}/>
        { !props.collapsed && <AccordionBody/>}
    </div>
/*    return props.collapsed ?
        <div>
            <AccordionTitle title={props.titleValue}/>
        </div> :
        <div>
            <AccordionTitle title={props.titleValue}/>
            <AccordionBody/>
        </div>*/

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
    return ( <ul>
        <li> 1</li>
        <li> 2</li>
        <li> 3</li>
    </ul>)
}
export default Accordion;