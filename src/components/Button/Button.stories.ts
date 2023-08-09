import { Meta, StoryObj } from "@storybook/react";
import Button, { ButtonProps } from "./";

const meta: Meta<ButtonProps> = {
  title: "Molecules/Button",
  component: Button,
  argTypes: {},
};

export default meta

export const Primary: StoryObj<ButtonProps> = {
  args: {
    children: "Primary Button",
  }
}