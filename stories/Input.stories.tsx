import React from "react";
import { Meta, Story } from "@storybook/react/types-6-0";
import { Input } from "../src";

export default {
  title: "Components/Input",
  component: Input,
} as Meta;

/*export const Base: Story = () => (
  <Button backgroundColor="#7159c1" color="#fff">
    Default
  </Button>
);*/

export const InputTemplate: Story<typeof Input> = (args) => (
  <Input label={""} typeInput={""} {...args}></Input>
);
