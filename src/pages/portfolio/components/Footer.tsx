import { Box, Container, Link, Typography } from '@mui/material';

import SocialButtons from '@/components/SocialButtons';

const navLinks = [
  { name: 'Sobre', href: '#about' },
  { name: 'Experiência', href: '#experience' },
  { name: 'Projetos', href: '#projects' },
  { name: 'O que eu entrego', href: '#services' },
  { name: 'Contato', href: '#contact' },
];

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        bgcolor: 'background.default',
        borderTop: 1,
        borderColor: 'divider',
        py: 4,
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', sm: 'row' },
            alignItems: { xs: 'flex-start', sm: 'center' },
            justifyContent: 'space-between',
            gap: 2,
            mb: 2.5,
          }}
        >
          <Box>
            <Typography variant="subtitle2">Adriano Anschau</Typography>
            <Typography variant="caption" color="text.secondary">
              Desenvolvedor Fullstack · Node.js · React · TypeScript
            </Typography>
          </Box>
          <SocialButtons />
        </Box>

        <Box
          sx={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: { xs: 1.5, sm: 2.5 },
            mb: 2.5,
          }}
        >
          {navLinks.map(link => (
            <Link
              key={link.name}
              href={link.href}
              underline="hover"
              color="text.secondary"
              variant="caption"
            >
              {link.name}
            </Link>
          ))}
        </Box>

        <Typography variant="caption" color="text.secondary">
          © {new Date().getFullYear()} Adriano Anschau
        </Typography>
      </Container>
    </Box>
  );
}
