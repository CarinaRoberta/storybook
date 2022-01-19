const path = require("path");

module.exports = {
  stories: ["../stories/**/*.stories.tsx", "../stories/**/*.stories.mdx"],
  addons: [
    "@storybook/addon-essentials",
    "@storybook/addon-storysource",
    "@storybook/addon-a11y",
  ],
};
