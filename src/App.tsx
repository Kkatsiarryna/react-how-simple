import React from 'react';
import './App.css';
import {Accordion} from "./components/Accordion/Accordion";
import {Rating, RatingValueType} from "./components/Rating/Rating";
import {OnOff} from "./components/OnOff/OnOff";
import UncotrolledAccordion from "./components/UncontrolledAccordion/UncontrolledAccrordion";
import {UncontrolledRating} from "./components/UncontrolledRating/UncontrolledRating";
import {UncontrolledOnOff} from "./components/UncontrolledOnOff/UncontrolledOnOff";

function App() {
    console.log("App ren");

    const [ratingValue, setRatingValue] = React.useState<RatingValueType>(0);
    const [accordionCollasped, setAccordionCollapsed] = React.useState<boolean>(false);
    const [onOff, setOnOff] = React.useState<boolean>(false);

    return (
        <div className="App">
            <h2>Uncontrolled</h2>
            <UncotrolledAccordion titleValue={'Menu'}/>
            <UncontrolledRating/>
            <UncontrolledOnOff onChange={setOnOff}/> {onOff.toString()}

            <h2>Controlled</h2>
            <Rating value={ratingValue} onClick={setRatingValue}/>
            <Accordion titleValue={"Menu"}
                       collapsed={accordionCollasped}
                       onChange={() => setAccordionCollapsed(!accordionCollasped)}
                       items={[{title: "one", value: 1}]}
                       onItemClick={()=>{}}
            />
            <OnOff value={onOff} onChange={setOnOff}/>
        </div>
    )
}


type PageTitlePropsType = {
    title: string;
}

function PageTitle(props: PageTitlePropsType) {
    console.log("Apptitle ren");
    return <h1>{props.title}</h1>
}


export default App;
