import { setup } from "@storybook/vue3";

import { withVuetifyTheme, DEFAULT_THEME } from "./withVuetifyTheme.decorator";
import { registerPlugins } from "../src/plugins";

setup(registerPlugins);

// Fix for storybook using slots in components
export const argTypes = {
  default: {
    description: "The default Vue slot",
    control: "text",
  },
};

export const globalTypes = {
  theme: {
    name: "Theme",
    description: "Global theme for components",
    defaultValue: DEFAULT_THEME,
    toolbar: {
      icon: "paintbrush",
      // Array of plain string values or MenuItem shape (see below)
      items: [
        { value: "light", title: "Light", left: "🌞" },
        { value: "dark", title: "Dark", left: "🌛" },
      ],
      // Change title based on selected value
      dynamicTitle: true,
    },
  },
};

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    expanded: true,
  },
  background: "light",
};

export const decorators = [withVuetifyTheme];
