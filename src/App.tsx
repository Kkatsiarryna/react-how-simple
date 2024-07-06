import React from 'react';
import './App.css';
import Accordion from "./components/Accordion/Accordion";
import {Rating} from "./components/Rating/Rating";
import {OnOff} from "./components/OnOff/OnOff";
import UncotrolledAccordion from "./components/UncontrolledAccordion/UncontrolledAccrordion";
import {UncontrolledRating} from "./components/UncontrolledRating/UncontrolledRating";

function App() {
    console.log("App ren");

    return (
        <div className="App">
            <OnOff />
            <OnOff/>
            <OnOff />

            <UncotrolledAccordion titleValue={'Menu'}/>

            <UncontrolledRating/>
            {/*<input/>*/}
            {/*<input checked={true} value={"hi"} type={"password"}/>*/}
            {/*<PageTitle title={"his App component"}/>*/}
            {/*<PageTitle title={"user title"}/>*/}
            {/*Article 1*/}
            {/*<Accordion titleValue={"Меню 1"} collapsed = {true}/>*/}
            {/*<Accordion titleValue={"Меню 2"} collapsed = {false}/>*/}
            {/*Article 2*/}
            {/*<Rating value={0}/>*/}
            {/*<Rating value={1}/>*/}
            {/*<Rating value={2}/>*/}
            {/*<Rating value={3}/>*/}
            {/*<Rating value={4}/>*/}
            {/*<Rating value={5}/>*/}


        </div>
    )
        ;
}


type PageTitlePropsType = {
    title: string;
}

function PageTitle(props: PageTitlePropsType) {
    console.log("Apptitle ren");
    return <h1>{props.title}</h1>
}


export default App;
