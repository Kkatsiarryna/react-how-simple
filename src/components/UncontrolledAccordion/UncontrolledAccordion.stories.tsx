import UncotrolledAccordion from "./UncontrolledAccrordion";
import React from "react";
import { action } from '@storybook/addon-actions';


export default {
    title: 'UncotrolledAccordion',
    component: UncotrolledAccordion
}
const callback = action("accordion mode change event")

export const CollapsedAccordion = () => {
    return <UncotrolledAccordion titleValue={'Users'}/>
}

