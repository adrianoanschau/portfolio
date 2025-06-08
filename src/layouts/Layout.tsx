import type { FC, PropsWithChildren } from "react";
import {createTheme, CssBaseline, ThemeProvider} from "@mui/material";

const Layout: FC<PropsWithChildren> = ({ children }) => {
  const theme = createTheme();

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
}

export default Layout;