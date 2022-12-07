import { useTheme } from "vuetify";

export const DEFAULT_THEME = "light";
export const withVuetifyTheme = (story, context) => {
  const globalTheme = context.globals.theme || DEFAULT_THEME;

  return {
    components: { story },
    setup() {
      const theme = useTheme();

      theme.global.name.value = globalTheme;

      return {
        theme,
      };
    },
    template: `<story />`,
  };
};
