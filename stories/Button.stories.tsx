import React from "react";
import { Meta, Story } from "@storybook/react/types-6-0";
import { Button } from "../src";

export default {
  title: "Components/Button",
  component: Button,
} as Meta;

/*export const Base: Story = () => (
  <Button backgroundColor="#7159c1" color="#fff">
    Default
  </Button>
);*/

export const ButtonTemplate: Story<typeof Button> = (args) => (
  <Button
    label={""}
    width={10}
    disabled={false}
    backgroundColor={""}
    color={""}
    {...args}
  />
);
