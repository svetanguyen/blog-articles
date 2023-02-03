export type ThemeType = typeof light;

export const light = {
  primary: "#FFFFFF",
  secondary: "#000000",
  textPrimary: "rgba(0, 0, 0, 0.88)",
  textSecondary: "rgba(0, 0, 0, 0.44)",
	background: "rgb(251, 248, 245)",
  headerBg: "#fff"
};
export const dark: ThemeType = {
  primary: "#FFFFFF",
  secondary: "#000000",
  textPrimary: "#fff",
  textSecondary: "rgba(0, 0, 0, 0.44)",
	background: "#000",
  headerBg: "#161b22"
};

const theme = {
	light: {
		...light
	},
	dark: {
		...dark
	}
};
export default theme;
