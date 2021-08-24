import React from "react"
import { ComponentStory, ComponentMeta } from "@storybook/react"

import ButtonM from "./ButtonM"
import { Button } from "./Button"

// component story format
// default export is added to side nav
export default {
    title: "Wrap MUI Components/Button",
    component: ButtonM
} as ComponentMeta<typeof ButtonM>

const Template: ComponentStory<typeof ButtonM> = args => <ButtonM {...args} />

export const Default = Template.bind({})
Default.args = {
    variant: "contained",
    label: "Button",
    size: "medium",
    color: "default"
}

export const Primary = Template.bind({})
Primary.args = {
    ...Default.args,
    color: "primary"
}

export const Secondary = Template.bind({})
Secondary.args = {
    ...Default.args,
    color: "secondary"
}

export const Disabled = Template.bind({})
Disabled.args = {
    ...Default.args,
    color: "disabled",
    disabled: true
}

export const Link = Template.bind({})
Link.args = {
    ...Default.args,
    color: "link",
    href: "https://sam.pub.sp.dev.sbet.cloud",
    onClick: () => {
        alert("Button Clicked, you will be redirected to SAM(dev)!")
    }
}

/*
// named exports for each component
// prop acts as the class name, text as its children
export const Default = () => <ButtonM variant="contained" label="Button"/>

export const Primary = () => <ButtonM variant="contained" color="primary" label="Button" />

export const Secondary = () => (
	<ButtonM variant="contained" color="secondary">
		Button
	</ButtonM>
)

export const Disabled = () => (
	<ButtonM variant="contained" color="disabled" disabled="true">
		Button
	</ButtonM>
)

export const Link = () => (
	<ButtonM variant="contained" color="link" href="#">
		Button
	</ButtonM>
)
*/
