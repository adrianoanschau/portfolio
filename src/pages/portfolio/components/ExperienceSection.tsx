import { Box, Container, Typography } from '@mui/material';
import { motion } from 'framer-motion';

import SectionHeading from '@/components/SectionHeading';
import { fadeInView } from '@/theme/motion';

const experiences = [
  {
    company: 'Dasa · via FCamara',
    role: 'Desenvolvedor Fullstack',
    summary:
      'Microsserviços Node.js, NestJS e GraphQL em plataforma de saúde e diagnóstico. Introduzi GraphQL no time, implementei logging e rastreabilidade (análise de incidentes de API de dias para horas, muitas vezes minutos) e auth centralizado com Strategy Pattern.',
  },
  {
    company: 'RD Station',
    role: 'Growth Software Engineer',
    summary:
      'React e testes A/B com Product e Design, fechando o ciclo do experimento até o resultado.',
  },
  {
    company: 'Vetta',
    role: 'Tech Lead',
    summary:
      'Liderança de 8 pessoas em dashboard complexo do setor metalúrgico (React, com Node).',
  },
  {
    company: 'Deliver IT',
    role: 'Desenvolvedor',
    summary:
      'Manutenção WordPress; produto universitário (microsserviços PHP + Vue); projeto fintech em PHP.',
  },
  {
    company: 'Senac',
    role: 'Coordenação e docência em TI',
    summary:
      'Complemento à carreira. O alvo profissional é engenharia fullstack, não o ensino como eixo principal.',
  },
];

export default function ExperienceSection() {
  return (
    <Box
      component="section"
      id="experience"
      sx={{
        bgcolor: 'background.default',
        py: { xs: 8, md: 10 },
        borderTop: 1,
        borderColor: 'divider',
      }}
    >
      <Container maxWidth="lg">
        <Box component={motion.div} {...fadeInView}>
          <SectionHeading
            title="Experiência"
            subtitle="Produto e engenharia · Porto Alegre ou remoto"
          />

          <Box
            component="ol"
            sx={{
              listStyle: 'none',
              m: 0,
              p: 0,
              maxWidth: 760,
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            {experiences.map((item, index) => (
              <Box
                component="li"
                key={item.company}
                sx={{
                  py: 2.5,
                  borderTop: index === 0 ? 0 : 1,
                  borderColor: 'divider',
                }}
              >
                <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
                  {item.role}
                </Typography>
                <Typography variant="body2" color="primary.main" sx={{ mb: 0.75 }}>
                  {item.company}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {item.summary}
                </Typography>
              </Box>
            ))}
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
