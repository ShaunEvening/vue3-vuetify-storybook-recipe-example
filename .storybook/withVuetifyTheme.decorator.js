// .storybook/withVeutifyTheme.decorator.js
import { h } from "vue";
import StoryWrapper from "./StoryWrapper.vue";

export const DEFAULT_THEME = "light";

export const withVuetifyTheme = (storyFn, context) => {
  const globalTheme = context.globals.theme || DEFAULT_THEME;
  const story = storyFn();

  return () => {
    return h(
      StoryWrapper,
      { themeName: globalTheme },
      {
        story: () => h(story, { ...context.args }),
      }
    );
  };
};
