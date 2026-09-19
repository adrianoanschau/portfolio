import { CssBaseline, ThemeProvider } from '@mui/material';
import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  type FC,
  type PropsWithChildren,
} from 'react';

import { createAppTheme } from './createAppTheme';

type ColorMode = 'light' | 'dark';

type ColorModeContextValue = {
  mode: ColorMode;
  toggleColorMode: () => void;
};

const STORAGE_KEY = 'portfolio-color-mode';

const ColorModeContext = createContext<ColorModeContextValue>({
  mode: 'dark',
  toggleColorMode: () => undefined,
});

export const useColorMode = () => useContext(ColorModeContext);

function readStoredMode(): ColorMode {
  if (typeof window === 'undefined') {
    return 'dark';
  }
  const stored = window.localStorage.getItem(STORAGE_KEY);
  return stored === 'light' || stored === 'dark' ? stored : 'dark';
}

export const ColorModeProvider: FC<PropsWithChildren> = ({ children }) => {
  const [mode, setMode] = useState<ColorMode>(readStoredMode);

  useEffect(() => {
    window.localStorage.setItem(STORAGE_KEY, mode);
    document.documentElement.style.colorScheme = mode;
    document.documentElement.dataset.theme = mode;
  }, [mode]);

  const value = useMemo<ColorModeContextValue>(
    () => ({
      mode,
      toggleColorMode: () => setMode(current => (current === 'dark' ? 'light' : 'dark')),
    }),
    [mode]
  );

  const theme = useMemo(() => createAppTheme(mode), [mode]);

  return (
    <ColorModeContext.Provider value={value}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
};
