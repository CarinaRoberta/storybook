import { configure, addParameters, addDecorator } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";
import centered from "@storybook/addon-centered/react";

import theme from "./theme";

import "./reset.css";

addParameters({
  options: {
    theme,
  },
});

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  options: {
    storySort: (a, b) =>
      a[1].kind === b[1].kind
        ? 0
        : a[1].id.localeCompare(b[1].id, undefined, { numeric: true }),
  },
};

export const decorators = [
  (Story) => (
    <>
     
        <Story />
     
    </>
  ),
];
addDecorator(withInfo);
addDecorator(centered);

// Import all stories
configure(require.context("../stories", true, /\.stories\.tsx$/), module);
