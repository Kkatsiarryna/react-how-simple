import type { Meta, StoryObj } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import  {Accordion}  from './Accordion';
import React, {useState} from "react";

export default {
    title: 'Accordion',
    component: Accordion
}

// const meta: Meta<typeof Accordion> = {
//     component: Accordion,
// };
// export default meta;

// type Story = StoryObj<typeof Accordion>
//
// export const FirstStory: Story = {
//     args: {
//         titleValue: 'hello',
//         collapsed: true,
//         onChange: () => {}
//     }
// }


const onChangeHandler = action('on Change');


export const CollapsedAccordion = () => {
    return <Accordion titleValue={'Collapsed Accordion'}
                      collapsed={true}
                      onChange={onChangeHandler} />
}

export const OpenAccordion = () => {
    return <Accordion titleValue={'Open Accordion'} collapsed={false} onChange={() => {}} />
}

export const AccordionDemo = () => {
    const[collapsed, setCollapsed] = useState(false)
    return <Accordion titleValue={'Accordion'}
                      collapsed={collapsed}
                      onChange={() => {setCollapsed(!collapsed)}} />
}