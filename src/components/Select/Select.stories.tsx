
import {Select} from "./Select";
import React, {useState} from "react";
import {action} from "@storybook/addon-actions";

export default {
    title: 'Select',
    component: Select
}

export const WithValue = () => {
    const [value, setvalue] = useState(null);
    return (
        <>
            <Select
                onChange={setvalue}
                value={value}
                items={[
                    { value: 1, title: 'Katya'},
                    { value: 2, title: 'Sofa' },
                    { value: 3, title: 'Lena'},
                ]}
            />
        </>
        )
}



export const WithoutValue = () => {
    const [value, setvalue] = useState(null);
    return <>
        <Select
            value={value}
                onChange={setvalue}
                items={[
                    {title: 'Katya', value: 4 },
                    {title: 'Sofa' , value: 5},
                    {title: 'Lena' , value: 6 },
                ]}
        />
    </>
}