import { motion } from 'framer-motion';
import { Icon } from "@iconify/react";
import {
  Box,
  Container,
  Typography,
  Grid,
  Chip,
  Card,
  CardContent,
  CardHeader,
  Avatar
} from "@mui/material";

export default function AboutSection() {
  const technologies = [
    'TypeScript', 'Node.js', 'NestJS', 'React', 'GraphQL',
    'APIs', 'PostgreSQL', 'Docker', 'Testes', 'Git',
    'PHP', 'Vue'
  ];

  const features = [
    {
      icon: <Icon icon="lucide:network" />,
      title: 'Microsserviços e GraphQL',
      description: 'APIs em Node.js/NestJS e introdução de GraphQL no time, em plataforma de saúde e diagnóstico.'
    },
    {
      icon: <Icon icon="lucide:shield-check" />,
      title: 'Autenticação e segurança',
      description: 'Serviço centralizado de auth com Strategy Pattern, JWT e fluxos OAuth em ambiente sensível.'
    },
    {
      icon: <Icon icon="lucide:activity" />,
      title: 'Observabilidade e logging',
      description: 'Rastreabilidade que reduziu a análise de incidentes de API de dias para horas — muitas vezes minutos.'
    },
    {
      icon: <Icon icon="lucide:users" />,
      title: 'Liderança técnica',
      description: 'Tech Lead de um time de 8 pessoas em dashboard complexo do setor metalúrgico.'
    },
    {
      icon: <Icon icon="lucide:flask-conical" />,
      title: 'Experimentos de growth',
      description: 'Testes A/B em React com Product e Design, fechando o ciclo do experimento ao resultado.'
    },
    {
      icon: <Icon icon="lucide:code-2" />,
      title: 'Qualidade de código',
      description: 'TypeScript, testes e práticas que sustentam entrega em produção e o trabalho em equipe.'
    }
  ];

  return (
    <Box component="section" id="about" sx={{ backgroundColor: '#f8fafc', py: { xs: 8, md: 12 } }}>
      <Container maxWidth="lg">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Typography variant="h4" align="center" fontWeight="bold" color="#1e293b" gutterBottom>
            Sobre Mim
          </Typography>
          <Typography variant="h6" align="center" color="#007FAD" mb={6}>
            Fullstack Pleno/Sênior · Node.js, NestJS, React e TypeScript
          </Typography>
        </motion.div>

        <Grid container spacing={6}>
          <Grid container size={{ xs: 12, md: 6 }}>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Typography variant="body1" color="#475569" mb={2} sx={{ fontSize: '1.125rem' }}>
                Atuo como desenvolvedor fullstack (Pleno/Sênior) em Porto Alegre e remoto. Meu foco é entrega em produção: microsserviços, APIs e produto em times de engenharia.
              </Typography>
              <Typography variant="body1" color="#475569" mb={2} sx={{ fontSize: '1.125rem' }}>
                O ciclo mais forte foi na Dasa, via FCamara: microsserviços em Node.js, NestJS e GraphQL. Introduzi GraphQL no time e implementei logging e rastreabilidade que reduziram a análise de incidentes de API de dias para horas — frequentemente minutos. Também centralizei a autenticação com Strategy Pattern.
              </Typography>
              <Typography variant="body1" color="#475569" mb={2} sx={{ fontSize: '1.125rem' }}>
                Na RD Station fui Growth Software Engineer: React e testes A/B com Product e Design, fechando o ciclo até o resultado. Na Vetta liderei um time de 8 pessoas em um dashboard complexo do setor metalúrgico (React, com Node).
              </Typography>
              <Typography variant="body1" color="#475569" mb={4} sx={{ fontSize: '1.125rem' }}>
                Na Deliver IT fiz manutenção WordPress, um produto universitário (microsserviços PHP + Vue) e um projeto fintech em PHP — experiência real, sem inflar o escopo. No Senac coordeno e leciono TI como complemento; o alvo da carreira é engenharia fullstack.
              </Typography>

              <Typography variant="h6" fontWeight={600} color="#1e293b" gutterBottom>
                Tecnologias Principais
              </Typography>
              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                {technologies.map((tech, index) => (
                  <motion.div
                    key={tech}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    viewport={{ once: true }}
                  >
                    <Chip
                      label={tech}
                      sx={{
                        backgroundColor: '#007FAD',
                        color: '#fff',
                        '&:hover': { backgroundColor: '#5A00E6' }
                      }}
                    />
                  </motion.div>
                ))}
              </Box>
            </motion.div>
          </Grid>

          <Grid container size={{ xs: 12, md: 6 }}>
            <Grid container spacing={3}>
              {features.map((feature, index) => (
                <Grid size={{ xs: 12, sm: 6 }} key={feature.title}>
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Card
                      elevation={3}
                      sx={{
                        height: '100%',
                        transition: 'all 0.3s ease',
                        '&:hover': {
                          transform: 'translateY(-8px)',
                          boxShadow: '0px 10px 30px rgba(106, 0, 255, 0.1)'
                        }
                      }}
                    >
                      <CardHeader
                        avatar={
                          <Avatar sx={{ bgcolor: '#007FAD', width: 48, height: 48 }}>
                            {feature.icon}
                          </Avatar>
                        }
                        title={
                          <Typography variant="subtitle1" fontWeight={600} color="#1e293b">
                            {feature.title}
                          </Typography>
                        }
                      />
                      <CardContent>
                        <Typography variant="body2" color="#475569">
                          {feature.description}
                        </Typography>
                      </CardContent>
                    </Card>
                  </motion.div>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
