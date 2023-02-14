export type ThemeType = typeof light;

export const light = {
  primary: "#FFF",
  secondary: "#000",
  textPrimary: "rgba(0, 0, 0, 0.88)",
  textSecondary: "rgba(0, 0, 0, 0.44)",
	background: "rgb(251, 248, 245)",
  headerBg: "#fff",
  borderColor: "rgb(238, 226, 215)",
  bannerBg: "rgb(183, 199, 201)"
};
export const dark: ThemeType = {
  primary: "#FFF",
  secondary: "#000",
  textPrimary: "#fff",
  textSecondary: "rgba(0, 0, 0, 0.44)",
	background: "#000",
  headerBg: "#161b22",
  borderColor: "#fff",
  bannerBg: "rgb(14, 55, 61)"
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
