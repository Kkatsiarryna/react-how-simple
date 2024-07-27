import React from "react";

type ItemType = {
    title: string
    value: any
}

type AccordionPropsType = {
    titleValue: string;
    collapsed: boolean;
    onChange: () => void
    items: ItemType[]
    onItemClick: (value: any) => void
}

export function Accordion(props: AccordionPropsType) {
    console.log("Accordion ren");
    return <div>
        <AccordionTitle title={props.titleValue} onChange={props.onChange}/>
        { !props.collapsed && <AccordionBody items={props.items} onClick={props.onItemClick}/>}
    </div>
}

type AccordionTitlePropsType = {
    title: string;
    onChange: () => void
}

function AccordionTitle(props: AccordionTitlePropsType) {
    console.log("AccordionTitle ren");
    return <h3 onClick={() => props.onChange()}> {props.title} </h3>;
}


type AccordionBodyPropsType = {
    items: ItemType[]
    onClick: (value: any) => void
}

function AccordionBody( props: AccordionBodyPropsType) {
    console.log("AccordionBody ren");
    return ( <ul>
        {props.items.map( (i, index) => <li onClick={() => props.onClick(i.value) } key={index}>{i.title}</li>)}
    </ul>)
}













//////////////////////////////////////////////
/*    return props.collapsed ?
        <div>
            <AccordionTitle title={props.titleValue}/>
        </div> :
        <div>
            <AccordionTitle title={props.titleValue}/>
            <AccordionBody/>
        </div>*/
