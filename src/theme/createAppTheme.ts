import { createTheme, type PaletteMode, type Theme } from '@mui/material/styles';

const systemSans = [
  'ui-sans-serif',
  'system-ui',
  '-apple-system',
  'Segoe UI',
  'Roboto',
  'Helvetica Neue',
  'Arial',
  'Noto Sans',
  'sans-serif',
].join(',');

export function createAppTheme(mode: PaletteMode): Theme {
  const isDark = mode === 'dark';

  const accent = isDark ? '#7BA3B5' : '#3D6A7A';
  const divider = isDark ? '#21262D' : '#D0D7DE';

  return createTheme({
    palette: {
      mode,
      primary: {
        main: accent,
        contrastText: isDark ? '#0D1117' : '#FFFFFF',
      },
      background: {
        default: isDark ? '#0D1117' : '#F6F8FA',
        paper: isDark ? '#161B22' : '#FFFFFF',
      },
      text: {
        primary: isDark ? '#E6EDF3' : '#1F2328',
        secondary: isDark ? '#8B949E' : '#59636E',
      },
      divider,
      action: {
        hover: isDark ? 'rgba(123, 163, 181, 0.08)' : 'rgba(61, 106, 122, 0.06)',
      },
    },
    typography: {
      fontFamily: systemSans,
      h1: {
        fontSize: '2.5rem',
        fontWeight: 600,
        letterSpacing: '-0.03em',
        lineHeight: 1.15,
      },
      h2: {
        fontSize: '1.75rem',
        fontWeight: 600,
        letterSpacing: '-0.025em',
        lineHeight: 1.25,
      },
      h3: {
        fontSize: '1.375rem',
        fontWeight: 600,
        letterSpacing: '-0.02em',
      },
      h4: {
        fontSize: '1.5rem',
        fontWeight: 600,
        letterSpacing: '-0.02em',
        lineHeight: 1.3,
      },
      h5: {
        fontSize: '1.125rem',
        fontWeight: 600,
      },
      h6: {
        fontSize: '1rem',
        fontWeight: 600,
      },
      subtitle1: {
        fontSize: '1.05rem',
        fontWeight: 500,
        letterSpacing: 0,
      },
      body1: {
        fontSize: '1rem',
        lineHeight: 1.65,
      },
      body2: {
        fontSize: '0.9375rem',
        lineHeight: 1.6,
      },
      button: {
        textTransform: 'none',
        fontWeight: 500,
        letterSpacing: 0,
      },
      caption: {
        fontSize: '0.8125rem',
        letterSpacing: 0,
      },
    },
    shape: {
      borderRadius: 6,
    },
    components: {
      MuiCssBaseline: {
        styleOverrides: {
          html: {
            colorScheme: mode,
            scrollBehavior: 'smooth',
          },
          body: {
            WebkitFontSmoothing: 'antialiased',
            MozOsxFontSmoothing: 'grayscale',
          },
          '::selection': {
            backgroundColor: isDark ? 'rgba(123, 163, 181, 0.28)' : 'rgba(61, 106, 122, 0.22)',
          },
        },
      },
      MuiButton: {
        defaultProps: {
          disableElevation: true,
        },
        styleOverrides: {
          root: {
            borderRadius: 6,
            paddingInline: 16,
          },
        },
      },
      MuiCard: {
        defaultProps: {
          elevation: 0,
        },
        styleOverrides: {
          root: {
            backgroundImage: 'none',
            border: `1px solid ${divider}`,
            boxShadow: 'none',
          },
        },
      },
      MuiChip: {
        styleOverrides: {
          root: {
            borderRadius: 4,
            fontWeight: 500,
          },
        },
      },
      MuiAppBar: {
        defaultProps: {
          elevation: 0,
          color: 'transparent',
        },
      },
      MuiTextField: {
        defaultProps: {
          variant: 'outlined',
          size: 'small',
        },
      },
      MuiIconButton: {
        styleOverrides: {
          root: {
            borderRadius: 6,
          },
        },
      },
    },
  });
}
