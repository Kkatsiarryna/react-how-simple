import {Clock} from "./Clock";

export default {
    title: "Clock",
    component: Clock,
}

export const BaseAnimationExample = () => {
    return <Clock mode={"animation"}/>

}

export const BaseDigitalExample = () => {
    return <Clock mode={"digital"}/>
}
