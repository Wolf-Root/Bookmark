import { createTheme } from "@mui/material/styles";
import { responsiveFontSizes } from "@mui/material/styles";

const customTheme = responsiveFontSizes(
  createTheme({
    cssVariables: {
      colorSchemeSelector: "class",
      disableCssColorScheme: true,
    },

    // Typography
    typography: {
      fontFamily: `"Roboto", "Inter", "Helvetica", "Arial", sans-serif`,
      h1: { fontSize: "2.986rem", fontWeight: 700, lineHeight: 1.2 },
      h2: { fontSize: "2.488rem", fontWeight: 600, lineHeight: 1.25 },
      h3: { fontSize: "2.074rem", fontWeight: 600, lineHeight: 1.3 },
      h4: { fontSize: "1.728rem", fontWeight: 500, lineHeight: 1.35 },
      h5: { fontSize: "1.44rem", fontWeight: 500, lineHeight: 1.4 },
      h6: { fontSize: "1.2rem", fontWeight: 500, lineHeight: 1.4 },
      body1: { fontSize: "1rem", lineHeight: 1.7 },
      body2: { fontSize: "0.9rem", lineHeight: 1.6, color: "#737b8c" },
      button: { fontWeight: 600, letterSpacing: "0.3px" },
    },

    shape: { borderRadius: 14 },

    colorSchemes: {
      light: {
        palette: {
          primary: {
            main: "#4a5fd9",
            contrastText: "#f6f7fe",
          },
          secondary: {
            main: "#252b46",
            contrastText: "#f6f7fe",
          },

          text: {
            primary: "rgb(2, 3, 13)",
            secondary: "rgba(2, 3, 13, 0.6)",
            disabled: "rgba(2, 3, 13, 0.38)",
          },

          background: {
            default: "#f6f7fe",
            paper: "hsl(235, 73%, 93%)",
          },
        },
      },

      dark: {
        palette: {
          primary: {
            main: "#263cb5",
            contrastText: "#f2f3fd",
          },
          secondary: {
            main: "#b9bfda",
            contrastText: "#010209",
          },

          text: {
            primary: "rgb(242, 243, 253)",
            secondary: "rgba(242, 243, 253, 0.6)",
            disabled: "rgba(242, 243, 253, 0.38)",
          },

          background: {
            default: "#010209",
            paper: "hsl(235, 73%, 7%)",
          },
        },
      },
    },

    components: {
      // Buttons
      MuiButton: {
        styleOverrides: {
          root: ({ theme }) => ({
            padding: "0.625rem 1.375rem",
            borderRadius: theme.shape.borderRadius,
          }),
        },
      },
    },
  })
);

export default customTheme;
