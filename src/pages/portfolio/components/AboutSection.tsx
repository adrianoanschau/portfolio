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
    'React', 'TypeScript', 'Node.js', 'NestJS', 'GraphQL',
    'PostgreSQL', 'Docker', 'Material UI', 'Tailwind CSS',
    'MongoDB', 'Redis'
  ];

  const features = [
    {
      icon: <Icon icon="lucide:layers" />,
      title: 'Arquitetura de Sistemas',
      description: 'Experiência na modelagem de arquiteturas escaláveis, limpas e orientadas a domínio.'
    },
    {
      icon: <Icon icon="lucide:code-2" />,
      title: 'Código de Alta Qualidade',
      description: 'Foco em padrões limpos, testes automatizados e manutenibilidade de longo prazo.'
    },
    {
      icon: <Icon icon="lucide:workflow" />,
      title: 'Automações e Integrações',
      description: 'Criação de soluções que economizam tempo e reduzem erros em processos empresariais.'
    },
    {
      icon: <Icon icon="lucide:shield-check" />,
      title: 'Segurança e Autenticação',
      description: 'Implementação de autenticação robusta e políticas de segurança para sistemas sensíveis.'
    },
    {
      icon: <Icon icon="lucide:users" />,
      title: 'Colaboração em Equipe',
      description: 'Experiência em projetos ágeis com integração contínua e foco em produtividade.'
    },
    {
      icon: <Icon icon="lucide:monitor-smartphone" />,
      title: 'Experiência do Usuário',
      description: 'Interfaces responsivas, acessíveis e otimizadas garantindo fluidez e usabilidade em qualquer dispositivo.'
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
            Desenvolvedor apaixonado por criar soluções inovadoras
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
                Com mais de 8 anos de experiência em desenvolvimento de software, atuo como desenvolvedor full stack com foco em aplicações web modernas. Tenho expertise em tecnologias como PHP, Node.js e React, criando soluções robustas e escaláveis para sistemas corporativos, dashboards, landing pages e automações.
              </Typography>
              <Typography variant="body1" color="#475569" mb={2} sx={{ fontSize: '1.125rem' }}>
                Sou comprometido com a qualidade do código e acredito que boas práticas como TDD, BDD e CI/CD são essenciais para garantir a manutenibilidade e facilitar o trabalho em equipe. Participo de todas as etapas do desenvolvimento — da arquitetura aos testes — sempre buscando entregar valor real com organização, clareza e excelência técnica.
              </Typography>
              <Typography variant="body1" color="#475569" mb={4} sx={{ fontSize: '1.125rem' }}>
                Já atuei em projetos de grande impacto, como a criação de um webapp de e-mail corporativo, um sistema de estoque altamente eficiente, uma plataforma de teleconsulta com prontuário digital e a reformulação completa do sistema de autenticação de uma grande rede hospitalar.
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
