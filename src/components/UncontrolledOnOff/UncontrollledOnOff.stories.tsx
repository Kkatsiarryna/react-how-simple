import { action } from '@storybook/addon-actions';
import {UncontrolledOnOff} from "./UncontrolledOnOff";
import React, {useState} from "react";



export default {
    title: 'UncontrolledOnOff',
    component: UncontrolledOnOff,
}

export const OnMode= () => <UncontrolledOnOff defaultOn = {true} onChange={action('On or Of clicked')}/>
export const OffMode= () => <UncontrolledOnOff defaultOn = {false} onChange={action('On or Of clicked')}/>
export const DefaultInputValue = () => <input defaultValue= {'yo'} />
