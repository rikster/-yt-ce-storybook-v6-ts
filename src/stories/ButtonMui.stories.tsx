import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Button from '@material-ui/core/Button';

export default {
    title: 'Example/Button contained',
    component: Button,
    argTypes: {
        color: { control: 'color' }
    },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} >Button</Button>;

export const Default = Template.bind({});
Default.args = {
    variant: 'contained',
};

export const Primary = Template.bind({});
Primary.args = {
    color: 'primary',
    variant: 'contained',
};

export const Secondary = Template.bind({});
Secondary.args = {
    color: 'secondary',
    variant: 'contained',
};


