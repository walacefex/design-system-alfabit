import type { Preview } from "@storybook/react";
import "../src/styles/globals.css";

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    options: {
      storySort: {
       method: "alphabetical",
       locales: "pt-BR",
       order: ["Intro", "Atoms", "Molecules", "Organisms", "Templates", "Pages"],
      },
    },
  },
};

export default preview;
