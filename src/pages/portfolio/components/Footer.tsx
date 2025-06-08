import { Icon } from '@iconify/react';
import {
  Box,
  Container,
  Grid,
  Typography,
  IconButton,
  Divider,
  Button,
} from '@mui/material';

export default function Footer() {
  const scrollToTop = () =>
    window.scrollTo({ top: 0, behavior: 'smooth' });

  const navLinks = [
    { name: 'Sobre', href: '#about' },
    { name: 'Projetos', href: '#projects' },
    { name: 'Serviços', href: '#services' },
    { name: 'Depoimentos', href: '#testimonials' },
    { name: 'Contato', href: '#contact' },
  ];

  return (
    <Box component="footer" sx={{ backgroundColor: '#1e293b', color: '#fff', pt: 10, pb: 6 }}>
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid size={{ xs: 12, md: 6 }}>
            <Typography
              variant="h5"
              fontWeight="bold"
              gutterBottom
              sx={{
                background: 'linear-gradient(135deg, #1cd2cb 0%, #2882d9 60%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              Adriano Anschau
            </Typography>

            <Typography variant="body2" color="#cbd5e1" sx={{ mb: 2 }}>
              Desenvolvedor Full Stack apaixonado por criar soluções digitais inovadoras que transformam ideias em realidade.
            </Typography>

            <Box sx={{ display: 'flex', gap: 1 }}>
              <IconButton
                component="a"
                href="https://github.com/adrianoanschau"
                target="_blank"
                rel="noopener noreferrer"
                sx={{ color: '#cbd5e1', '&:hover': { color: '#000000', backgroundColor: '#fff' } }}
              >
                <Icon icon="lucide:github" />
              </IconButton>
              <IconButton
                component="a"
                href="https://linkedin.com/in/adrianoanschau"
                target="_blank"
                rel="noopener noreferrer"
                sx={{ color: '#cbd5e1', '&:hover': { color: '#0077B5', backgroundColor: '#fff' } }}
              >
                <Icon icon="lucide:linkedin" />
              </IconButton>
              <IconButton
                component="a"
                href="mailto:adrianoanschau@gmail.com"
                target="_blank"
                sx={{ color: '#cbd5e1', '&:hover': { color: '#6A00FF', backgroundColor: '#fff' } }}
              >
                <Icon icon="lucide:mail" />
              </IconButton>
            </Box>
          </Grid>

          <Grid size={{ xs: 12, md: 6 }}>
            <Typography variant="subtitle1" fontWeight={600} sx={{ mb: 1 }}>
              Navegação Rápida
            </Typography>
            <Grid container spacing={1}>
              {navLinks.map((link) => (
                <Grid size={{ xs: 6 }} key={link.name}>
                  <Typography
                    component="a"
                    href={link.href}
                    sx={{
                      fontSize: 14,
                      color: '#cbd5e1',
                      textDecoration: 'none',
                      '&:hover': { color: '#2882d9' },
                    }}
                  >
                    {link.name}
                  </Typography>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>

        <Divider sx={{ my: 4, backgroundColor: '#334155' }} />

        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', sm: 'row' },
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: 2,
          }}
        >
          <Typography variant="caption" color="#94a3b8">
            © {new Date().getFullYear()} Adriano Anschau. Todos os direitos reservados.
          </Typography>
          <Button
            onClick={scrollToTop}
            variant="contained"
            size="small"
            sx={{
              minWidth: 'unset',
              backgroundColor: '#2882d9',
              '&:hover': { backgroundColor: '#1cd2cb' },
            }}
          >
            <Icon icon="lucide:arrow-up" />
          </Button>
        </Box>
      </Container>
    </Box>
  );
}
