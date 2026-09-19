import { Box, Chip, Container, Typography } from '@mui/material';
import { motion } from 'framer-motion';

import SectionHeading from '@/components/SectionHeading';
import { fadeInView } from '@/theme/motion';

const technologies = [
  'TypeScript',
  'Node.js',
  'NestJS',
  'React',
  'GraphQL',
  'APIs',
  'PostgreSQL',
  'Docker',
  'Testes',
  'Git',
  'PHP',
  'Vue',
];

const focusAreas = [
  {
    title: 'Microsserviços e GraphQL',
    description:
      'APIs em Node.js/NestJS e introdução de GraphQL no time, em plataforma de saúde e diagnóstico.',
  },
  {
    title: 'Autenticação e observabilidade',
    description:
      'Auth centralizado (Strategy Pattern, JWT, OAuth) e logging que reduziu análise de incidentes de API de dias para horas.',
  },
  {
    title: 'Produto e liderança',
    description:
      'Experimentos A/B na RD Station e Tech Lead de 8 pessoas em dashboard metalúrgico na Vetta.',
  },
];

export default function AboutSection() {
  return (
    <Box component="section" id="about" sx={{ bgcolor: 'background.paper', py: { xs: 8, md: 10 } }}>
      <Container maxWidth="lg">
        <Box component={motion.div} {...fadeInView}>
          <SectionHeading
            title="Sobre"
            subtitle="Fullstack Pleno/Sênior · Node.js, NestJS, React e TypeScript"
          />

          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: { xs: '1fr', md: '1.3fr 0.9fr' },
              gap: { xs: 4, md: 8 },
              alignItems: 'start',
            }}
          >
            <Box>
              <Typography color="text.secondary" sx={{ mb: 2 }}>
                Atuo como desenvolvedor fullstack (Pleno/Sênior) em Porto Alegre e remoto. Meu foco
                é entrega em produção: microsserviços, APIs e produto em times de engenharia.
              </Typography>
              <Typography color="text.secondary" sx={{ mb: 2 }}>
                O ciclo mais forte foi na Dasa, via FCamara: microsserviços em Node.js, NestJS e
                GraphQL. Introduzi GraphQL no time e implementei logging e rastreabilidade que
                reduziram a análise de incidentes de API de dias para horas — frequentemente
                minutos. Também centralizei a autenticação com Strategy Pattern.
              </Typography>
              <Typography color="text.secondary" sx={{ mb: 2 }}>
                Na RD Station fui Growth Software Engineer: React e testes A/B com Product e Design,
                fechando o ciclo até o resultado. Na Vetta liderei um time de 8 pessoas em um
                dashboard complexo do setor metalúrgico (React, com Node).
              </Typography>
              <Typography color="text.secondary" sx={{ mb: 3 }}>
                Na Deliver IT fiz manutenção WordPress, um produto universitário (microsserviços PHP
                + Vue) e um projeto fintech em PHP — experiência real, sem inflar o escopo. No Senac
                coordeno e leciono TI como complemento; o alvo da carreira é engenharia fullstack.
              </Typography>

              <Typography variant="subtitle2" sx={{ mb: 1.5, color: 'text.primary' }}>
                Stack
              </Typography>
              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.75 }}>
                {technologies.map(tech => (
                  <Chip
                    key={tech}
                    label={tech}
                    size="small"
                    variant="outlined"
                    sx={{
                      borderColor: 'divider',
                      color: 'text.secondary',
                      bgcolor: 'transparent',
                    }}
                  />
                ))}
              </Box>
            </Box>

            <Box
              component="ul"
              sx={{
                listStyle: 'none',
                m: 0,
                p: 0,
                display: 'flex',
                flexDirection: 'column',
                gap: 2.5,
                borderLeft: 1,
                borderColor: 'divider',
                pl: 3,
              }}
            >
              {focusAreas.map(item => (
                <Box component="li" key={item.title}>
                  <Typography variant="subtitle2" sx={{ mb: 0.5 }}>
                    {item.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {item.description}
                  </Typography>
                </Box>
              ))}
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
