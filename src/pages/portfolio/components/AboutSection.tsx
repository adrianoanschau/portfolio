import { Box, Chip, Container, Typography } from '@mui/material';
import { motion } from 'framer-motion';

import SectionHeading from '@/components/SectionHeading';
import { fadeInView } from '@/theme/motion';

const technologies = [
  'JavaScript',
  'TypeScript',
  'HTML/CSS',
  'PHP',
  'SQL',
  'Node.js',
  'React',
  'NestJS',
  'Docker',
  'PostgreSQL',
  'Git',
  'C# (básico)',
];

const focusAreas = [
  {
    title: 'Análise e requisitos',
    description:
      'Levantamento de requisitos de negócio com clientes, análise de rotinas e processos, documentação e manuais, definição de soluções e de arquitetura.',
  },
  {
    title: 'Suporte a sistemas',
    description:
      'Manutenção corretiva e evolutiva, atendimento de chamados e correção de vulnerabilidades de acesso. ERP, saúde, indústria metalúrgica e siderúrgica e educação.',
  },
  {
    title: 'Implantação',
    description:
      'Deploy em VPS Linux com Docker, ambientes de preview, CI/CD, releases versionadas, monitoramento de desempenho e backup.',
  },
];

export default function AboutSection() {
  return (
    <Box component="section" id="about" sx={{ bgcolor: 'background.paper', py: { xs: 8, md: 10 } }}>
      <Container maxWidth="lg">
        <Box component={motion.div} {...fadeInView}>
          <SectionHeading
            title="Sobre"
            subtitle="Analista de Sistemas · requisitos, suporte e implantação"
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
                Analista de Sistemas e desenvolvedor de software, em Canoas (RS), atuando desde 2017
                em empresas de tecnologia, saúde, indústria e educação. O foco é análise e
                levantamento de requisitos, suporte a sistemas e implantação.
              </Typography>
              <Typography color="text.secondary" sx={{ mb: 2 }}>
                Faço levantamento de requisitos com clientes, análise de rotinas e processos e
                escrita de documentação e manuais. Na sustentação: manutenção corretiva e evolutiva
                de sistemas em produção (ERP interno, plataforma de saúde e produto para a indústria
                metalúrgica), suporte com atendimento de chamados e correção de vulnerabilidades de
                acesso. Também atuei em um sistema de microsserviços em PHP e Node.js para o cliente
                Grazziotin, com atuação direta em gestão de estoque.
              </Typography>
              <Typography color="text.secondary" sx={{ mb: 2 }}>
                Vivência em implantação (deploy) de sistemas, configuração de ambientes com Docker e
                Linux, CI/CD, releases versionadas e monitoramento de desempenho. Base técnica em
                JavaScript/TypeScript, HTML/CSS, PHP, SQL, Node.js e React, com conhecimento básico
                de C#. Português nativo e inglês profissional.
              </Typography>
              <Typography color="text.secondary" sx={{ mb: 3 }}>
                Como Coordenador dos Cursos de TI e docente no Senac RS, exerço comunicação,
                treinamento de pessoas e gestão de equipe. Tecnólogo em Análise e Desenvolvimento de
                Sistemas pela Universidade La Salle (2018 a 2021). MBA em Tecnologia para Negócios
                (PUCRS), desde jan/2026, em andamento na etapa de TCC. Especializações em Docência
                na Educação Profissional e em Metodologias Ativas e TDICs na Educação (Anhanguera,
                2026). Curso de POO com PHP (4Linux, 2014) e HackerRank Problem Solving (Basic).
                Antes de atuar como programador, trabalhei como Auxiliar de Almoxarifado.
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
