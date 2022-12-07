import Button from "./Button.vue";

export default {
  title: "Components/Button",
  component: Button,
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/7.0/vue/configure/story-layout
    layout: "fullscreen",
  },
  argTypes: {
    onClick: { action: "clicked" },
    color: {
      options: ["primary", "secondary", "success", "error"],
      type: "select",
    },
    variant: {
      options: ["flat", "outlined", "text"],
      type: "select",
    },
    size: {
      options: ["small", "medium", "large"],
      type: "select",
      mapping: {
        small: "small",
        medium: undefined,
        large: "large",
      },
    },
  },
};

export const Default = {};
Default.args = {
  label: "Click me",
  color: "primary",
  variant: "flat",
  size: "medium",
};

export const Colors = () => ({
  components: { Button },
  template: `
      <div class="pa-2">
        <Button color="primary" label="Primary" class="mb-3 d-block" />
        <Button color="secondary" label="Secondary" class="mb-3 d-block" />
        <Button color="success" label="Success" class="mb-3 d-block" />
        <Button color="error" label="Error" class="mb-3 d-block" />
      </div>
    `,
});

export const Variants = () => ({
  components: { Button },
  template: `
    <div class="pa-2">
      <Button variant="flat" label="Flat button" class="mb-3 d-block" />
      <Button variant="outlined" label="Outlined button" class="mb-3 d-block" />
      <Button variant="text" label="Text button" class="mb-3 d-block" />
    </div>
    `,
});

export const Size = () => ({
  components: { Button },
  template: `
    <div class="pa-2">
      <Button size="small" label="Small" class="mb-3 d-block" />
      <Button label="Medium" class="mb-3 d-block"/>
      <Button size="large" label="Large" class="mb-3 d-block"/>
    </div>
    `,
});
