"use client";

// Ract
import { createContext, ReactNode, useContext } from "react";

// MUI Core Components
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import type {} from "@mui/material/themeCssVarsAugmentation";
import customTheme from "@/theme/customTheme";

const AppThemeContext = createContext(null);

const AppThemeProvider = ({ children }: { children: ReactNode }) => {
  return (
    <AppThemeContext.Provider value={null}>
      <ThemeProvider theme={customTheme} defaultMode="light">
        <CssBaseline enableColorScheme />
        {children}
      </ThemeProvider>
    </AppThemeContext.Provider>
  );
};

export const useAppThemeContext = () => useContext(AppThemeContext);

export default AppThemeProvider;
