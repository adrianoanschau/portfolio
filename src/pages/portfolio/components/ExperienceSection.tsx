import { Box, Container, Typography } from '@mui/material';
import { motion } from 'framer-motion';

import SectionHeading from '@/components/SectionHeading';
import { fadeInView } from '@/theme/motion';

const experiences = [
  {
    id: 'senac',
    company: 'Senac RS · Canoas, RS',
    role: 'Coordenador dos Cursos de TI e Orientador Educacional',
    period: 'mar/2026 até hoje',
    summary:
      'Coordenação dos cursos de TI e integração entre docentes, alunos e equipe; seleção de docentes para o Técnico em Desenvolvimento de Sistemas (TDS). Treinamento em lógica de programação, banco de dados, arquitetura de software e boas práticas, com PBL. Planos de aula, materiais e projetos-base de API REST (Node.js, TypeScript).',
  },
  {
    id: 'deliver-it-2024',
    company: 'Deliver IT Serviços de Tecnologia · Porto Alegre, RS',
    role: 'Analista de Sistemas',
    period: 'jun/2024 a abr/2026 · remoto',
    summary:
      'Análise, desenvolvimento e manutenção corretiva e evolutiva de aplicações Node.js e React, com foco em escalabilidade, performance e comunicação assíncrona. Participação na definição de tecnologias, padrões e arquitetura; code review. Desenvolvimento, manutenção e sustentação de soluções em WordPress (PHP).',
  },
  {
    id: 'rd-station',
    company: 'RD Station',
    role: 'Growth Software Engineer',
    period: 'jun/2023 a jan/2024',
    summary:
      'Testes A/B e análise de dados, com interfaces React junto a Product e Design, do experimento ao resultado.',
  },
  {
    id: 'fcamara-dasa',
    company: 'Grupo FCamara / Dasa · São Paulo, SP',
    role: 'Software Engineer',
    period: 'mai/2022 a abr/2023',
    summary:
      'Manutenção corretiva e evolutiva de plataforma de diagnósticos em saúde; correção de vulnerabilidades de acesso; qualidade e performance (SOLID, Design Patterns). Logging e rastreabilidade em microsserviços (Node.js, NestJS, GraphQL), reduzindo a análise de incidentes de API de dias para horas; autenticação centralizada (JWT, OAuth, Strategy Pattern). GraphQL introduzido no time.',
  },
  {
    id: 'vetta',
    company: 'Vetta · Belo Horizonte, MG',
    role: 'Software Developer / Tech Lead',
    period: 'set/2021 a mai/2022',
    summary:
      'Liderança técnica de time de 8 pessoas em dashboard para a indústria metalúrgica e siderúrgica (Node.js, React); prioridades técnicas e padrões alinhados aos requisitos de negócio do setor industrial.',
  },
  {
    id: 'deliver-it-2019',
    company: 'Deliver IT',
    role: 'Desenvolvedor Full Stack',
    period: '2019 a 2021',
    summary: 'Desenvolvimento full stack com PHP, Node.js, Angular e Ruby.',
  },
  {
    id: 'db-server',
    company: 'DB Server',
    role: 'Desenvolvedor',
    period: '2018 a 2019',
    summary: 'Desenvolvimento com PHP e React, em Scrum e Kanban.',
  },
  {
    id: 'simers',
    company: 'SIMERS · Porto Alegre, RS',
    role: 'Analista Desenvolvedor',
    period: 'dez/2017 a jun/2018',
    summary:
      'Análise e desenvolvimento de soluções para as rotinas da empresa; funcionalidades, integrações e manutenção do ERP/SaaS interno (PHP/Yii, HTML/CSS, jQuery). Suporte a sistemas com atendimento de chamados do ERP interno.',
  },
  {
    id: 'ultra',
    company: 'Ultra Home Automação Residencial',
    role: 'Desenvolvedor de Software',
    period: 'mar/2015 a mai/2016',
    summary: 'Desenvolvimento de software.',
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
            subtitle="Tecnologia, saúde, indústria e educação · Canoas, RS"
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
                key={item.id}
                sx={{
                  py: 2.5,
                  borderTop: index === 0 ? 0 : 1,
                  borderColor: 'divider',
                }}
              >
                <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
                  {item.role}
                </Typography>
                <Typography variant="body2" color="primary.main">
                  {item.company}
                </Typography>
                <Typography
                  variant="caption"
                  color="text.secondary"
                  sx={{ display: 'block', mb: 0.75 }}
                >
                  {item.period}
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
