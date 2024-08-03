
import React from "react";
import { action } from '@storybook/addon-actions';
import {UncotrolledAccordion} from "./UncontrolledAccrordion";


export default {
    title: 'UncotrolledAccordion',
    component: UncotrolledAccordion
}
const callback = action("accordion mode change event")

export const CollapsedAccordion = () => {
    return <UncotrolledAccordion titleValue={'Users'}/>
}

