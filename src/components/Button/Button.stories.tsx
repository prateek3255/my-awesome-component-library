import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import Button from "./Button";

const meta: Meta<typeof Button> = {
  title: "Components/Button",
  component: Button,
  argTypes: {
    textColor: { control: "color" },
    onClick: { action: "clicked" },
  },
};

export default meta;

type Story = StoryObj<typeof Button>;

// Reuse that template for creating different stories
export const Primary: Story = {
  args: {
    label: "Primary 😃",
    size: "large",
    type: "primary",
  },
};

export const Secondary: Story = {
  args: {
    ...Primary.args,
    type: "secondary",
    label: "Secondary 😇",
  },
};
