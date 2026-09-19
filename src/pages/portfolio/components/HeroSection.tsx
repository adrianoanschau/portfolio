import { Icon } from '@iconify/react';
import { Box, Button, Container, Stack, Typography } from '@mui/material';
import { motion } from 'framer-motion';

import SocialButtons from '@/components/SocialButtons';
import { fadeIn } from '@/theme/motion';
import { publicUrl } from '@/utils/publicUrl';

export default function HeroSection() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <Box
      component="section"
      sx={{
        borderBottom: 1,
        borderColor: 'divider',
        bgcolor: 'background.default',
      }}
    >
      <Container maxWidth="lg" sx={{ py: { xs: 6, md: 10 } }}>
        <Box
          component={motion.div}
          {...fadeIn}
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', md: 'auto 1fr' },
            gap: { xs: 4, md: 6 },
            alignItems: 'center',
          }}
        >
          <Box
            component="img"
            src={publicUrl('/images/me.jpeg')}
            alt="Adriano Anschau"
            sx={{
              width: { xs: 128, md: 176 },
              height: { xs: 128, md: 176 },
              objectFit: 'cover',
              objectPosition: 'center top',
              borderRadius: 1,
              border: 1,
              borderColor: 'divider',
              justifySelf: { xs: 'start', md: 'auto' },
            }}
          />

          <Box>
            <Typography
              variant="overline"
              sx={{
                color: 'primary.main',
                letterSpacing: '0.08em',
                fontWeight: 500,
                display: 'block',
                mb: 1,
              }}
            >
              Node.js · React · TypeScript
            </Typography>
            <Typography variant="h1" sx={{ mb: 1 }}>
              Adriano Anschau
            </Typography>
            <Typography variant="subtitle1" color="text.secondary" sx={{ mb: 2 }}>
              Desenvolvedor Fullstack · Pleno/Sênior
            </Typography>
            <Typography color="text.secondary" sx={{ maxWidth: 560, mb: 3.5 }}>
              Entrego microsserviços e produto em produção — GraphQL, autenticação e
              observabilidade em times de engenharia. Porto Alegre ou remoto.
            </Typography>

            <Stack direction="row" flexWrap="wrap" gap={1.5} sx={{ mb: 2.5 }}>
              <Button
                variant="contained"
                onClick={() => scrollTo('projects')}
                endIcon={<Icon icon="lucide:arrow-down" width={16} height={16} />}
              >
                Ver projetos
              </Button>
              <Button
                variant="outlined"
                color="inherit"
                href="https://linkedin.com/in/adrianoanschau"
                target="_blank"
                rel="noopener noreferrer"
                startIcon={<Icon icon="lucide:linkedin" width={16} height={16} />}
                sx={{ borderColor: 'divider', color: 'text.primary' }}
              >
                LinkedIn
              </Button>
              <Button
                variant="text"
                color="inherit"
                onClick={() => scrollTo('contact')}
                sx={{ color: 'text.secondary' }}
              >
                Contato
              </Button>
            </Stack>

            <SocialButtons />
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
