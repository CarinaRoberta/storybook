import React from "react";
import { Meta, Story } from "@storybook/react/types-6-0";
import { Input, InputWithoutLabel } from "../src";

export default {
  title: "Components/Input",
  component: InputWithoutLabel,
} as Meta;

/*export const Base: Story = () => (
  <Button backgroundColor="#7159c1" color="#fff">
    Default
  </Button>
);*/

export const InputNoLabel: Story<typeof InputWithoutLabel> = (args) => (
  <Input
    placeholder={"Placeholder"}
    typeInput={""}
    idInput={""}
    nameInput={""}
    valueInput={""}
    onChange={() => {}}
    {...args}
  ></Input>
);
