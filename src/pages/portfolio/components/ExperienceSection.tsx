import { motion } from 'framer-motion';
import { Icon } from '@iconify/react';
import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  Avatar,
} from '@mui/material';

const experiences = [
  {
    company: 'Dasa · via FCamara',
    role: 'Desenvolvedor Fullstack',
    icon: 'lucide:heart-pulse',
    summary:
      'Microsserviços Node.js, NestJS e GraphQL em plataforma de saúde e diagnóstico. Introduzi GraphQL no time, implementei logging e rastreabilidade (análise de incidentes de API de dias para horas, muitas vezes minutos) e auth centralizado com Strategy Pattern.',
  },
  {
    company: 'RD Station',
    role: 'Growth Software Engineer',
    icon: 'lucide:flask-conical',
    summary:
      'React e testes A/B com Product e Design, fechando o ciclo do experimento até o resultado.',
  },
  {
    company: 'Vetta',
    role: 'Tech Lead',
    icon: 'lucide:users',
    summary:
      'Liderança de 8 pessoas em dashboard complexo do setor metalúrgico (React, com Node).',
  },
  {
    company: 'Deliver IT',
    role: 'Desenvolvedor',
    icon: 'lucide:briefcase',
    summary:
      'Manutenção WordPress; produto universitário (microsserviços PHP + Vue); projeto fintech em PHP.',
  },
  {
    company: 'Senac',
    role: 'Coordenação e docência em TI',
    icon: 'lucide:graduation-cap',
    summary:
      'Complemento à carreira. O alvo profissional é engenharia fullstack, não o ensino como eixo principal.',
  },
];

export default function ExperienceSection() {
  return (
    <Box component="section" id="experience" sx={{ py: { xs: 8, md: 12 } }}>
      <Container maxWidth="lg">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Typography variant="h4" align="center" fontWeight="bold" color="#1e293b" gutterBottom>
            Experiência
          </Typography>
          <Typography variant="h6" align="center" color="#007FAD" sx={{ mb: 6 }}>
            Produto e engenharia · Porto Alegre ou remoto
          </Typography>
        </motion.div>

        <Box sx={{ position: 'relative', maxWidth: 800, mx: 'auto' }}>
          <Box
            sx={{
              display: { xs: 'none', sm: 'block' },
              position: 'absolute',
              left: 31,
              top: 24,
              bottom: 24,
              width: 2,
              backgroundColor: '#e2e8f0',
            }}
          />

          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
            {experiences.map((item, index) => (
              <motion.div
                key={item.company}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                viewport={{ once: true }}
              >
                <Box sx={{ display: 'flex', gap: 2, alignItems: 'flex-start' }}>
                  <Avatar
                    sx={{
                      bgcolor: '#007FAD',
                      width: 64,
                      height: 64,
                      flexShrink: 0,
                      zIndex: 1,
                      boxShadow: '0 0 0 6px #fff',
                    }}
                  >
                    <Icon icon={item.icon} width={28} height={28} />
                  </Avatar>
                  <Card
                    elevation={3}
                    sx={{
                      flex: 1,
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        transform: 'translateY(-4px)',
                        boxShadow: '0px 10px 30px rgba(106, 0, 255, 0.1)',
                      },
                    }}
                  >
                    <CardContent>
                      <Typography variant="subtitle1" fontWeight={600} color="#1e293b">
                        {item.role}
                      </Typography>
                      <Typography variant="body2" color="#007FAD" fontWeight={500} sx={{ mb: 1 }}>
                        {item.company}
                      </Typography>
                      <Typography variant="body2" color="#475569">
                        {item.summary}
                      </Typography>
                    </CardContent>
                  </Card>
                </Box>
              </motion.div>
            ))}
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
