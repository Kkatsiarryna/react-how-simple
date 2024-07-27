
import {Select} from "./Select";
import React from "react";

export default {
    title: 'Select',
    component: Select
}

export const FirstSelect = () => {
    return <Select value={'someValue'}
                   onChange={() => {}}
                   items={[
                    {title: 'Katya', value: 1 },
                    {title: 'Sofa' , value: 2 },
                    {title: 'Lena' , value: 3 },
                   ]}
                   />
}