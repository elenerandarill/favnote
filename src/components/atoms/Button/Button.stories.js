import Button from "./Button";

// This default export determines where your story goes in the story list
export default {
    title: "Button",
    component: Button,
}

const Template = (args) => <Button {...args} />

export const FirstStory = {
    args: {
    }
}