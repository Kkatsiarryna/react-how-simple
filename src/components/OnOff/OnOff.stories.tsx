import { action } from '@storybook/addon-actions';
import {OnOff} from "./OnOff";
import React, {useState} from "react";



export default {
    title: 'OnOff',
    component: OnOff,
}

export const OnMode= () => <OnOff value={true} onChange={action('On or Of clicked')}/>
export const OffMode= () => <OnOff value={false} onChange={action('On or Of clicked')}/>

export const ModeChanging = () => {
    const [valueMode, setValueNode] = useState<boolean>(true)
    return(
      <OnOff value={valueMode} onChange={setValueNode}/>
    )
}
