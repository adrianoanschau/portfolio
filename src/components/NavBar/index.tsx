import { Icon } from '@iconify/react';
import {
  AppBar,
  Box,
  Button,
  IconButton,
  Link,
  Toolbar,
  Tooltip,
  Typography,
} from '@mui/material';

import { useColorMode } from '@/theme/ColorModeContext';

const links = [
  { label: 'Sobre', href: '#about' },
  { label: 'Experiência', href: '#experience' },
  { label: 'Projetos', href: '#projects' },
  { label: 'Contato', href: '#contact' },
];

export default function NavBar() {
  const { mode, toggleColorMode } = useColorMode();
  const isDark = mode === 'dark';

  return (
    <AppBar
      position="sticky"
      sx={{
        bgcolor: 'background.default',
        borderBottom: 1,
        borderColor: 'divider',
        color: 'text.primary',
      }}
    >
      <Toolbar
        sx={{
          minHeight: { xs: 56, sm: 60 },
          gap: 2,
          px: { xs: 2, sm: 3 },
          maxWidth: 1200,
          width: '100%',
          mx: 'auto',
        }}
      >
        <Link
          href="#top"
          underline="none"
          color="inherit"
          sx={{ display: 'flex', alignItems: 'baseline', gap: 1, minWidth: 0 }}
        >
          <Typography variant="subtitle1" noWrap sx={{ fontWeight: 600, letterSpacing: '-0.02em' }}>
            Adriano Anschau
          </Typography>
        </Link>

        <Box
          component="nav"
          sx={{
            display: { xs: 'none', md: 'flex' },
            alignItems: 'center',
            gap: 0.5,
            ml: 'auto',
          }}
        >
          {links.map(link => (
            <Button key={link.href} href={link.href} color="inherit" size="small">
              {link.label}
            </Button>
          ))}
        </Box>

        <Box sx={{ display: { xs: 'flex', md: 'none' }, ml: 'auto', gap: 0.5, overflow: 'auto' }}>
          {links.map(link => (
            <Link
              key={link.href}
              href={link.href}
              underline="none"
              color="text.secondary"
              variant="caption"
              sx={{ whiteSpace: 'nowrap', px: 0.75, '&:hover': { color: 'text.primary' } }}
            >
              {link.label}
            </Link>
          ))}
        </Box>

        <Tooltip title={isDark ? 'Tema claro' : 'Tema escuro'}>
          <IconButton
            onClick={toggleColorMode}
            color="inherit"
            size="small"
            aria-label={isDark ? 'Ativar tema claro' : 'Ativar tema escuro'}
          >
            <Icon icon={isDark ? 'lucide:sun' : 'lucide:moon'} width={18} height={18} />
          </IconButton>
        </Tooltip>
      </Toolbar>
    </AppBar>
  );
}
