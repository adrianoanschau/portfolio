import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Icon } from "@iconify/react";
import {
  Box,
  Container,
  Grid,
  Typography,
  Card,
  CardContent,
  CardHeader,
  CardActions,
  Button,
  Chip,
  IconButton
} from '@mui/material';
import { Project } from '@/entities/Project';

export default function ProjectsSection() {
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    (async () => {
      const loadProjects = async () => setProjects(await Project.list());
      await loadProjects();
    })();
  }, []);

  const getProjectImage = (index: number) => {
    const colors = ['#6C63FF', '#FF6B00', '#4A90E2', '#FF3366'];
    const color = colors[index % colors.length].substring(1);
    return `https://via.placeholder.com/400x250/${color}/FFFFFF?text=Project+Image`;
  };

  return (
    <Box component="section" id="projects" sx={{ py: { xs: 8, md: 12 } }}>
      <Container maxWidth="lg">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Typography variant="h4" align="center" fontWeight="bold" color="#1e293b" gutterBottom>
            Projetos em Destaque
          </Typography>
          <Typography variant="h6" align="center" color="#6C63FF" sx={{ mb: 6 }}>
            Soluções digitais aplicadas com tecnologia de ponta
          </Typography>
        </motion.div>

        <Grid container spacing={4}>
          {projects.map((project, index) => (
            <Grid key={project.id} size={{ xs: 12, md: 6, lg: 4 }}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card
                  sx={{
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      transform: 'translateY(-8px)',
                      boxShadow: '0 12px 32px rgba(0, 191, 166, 0.15)',
                    },
                  }}
                >
                  <Box
                    component="img"
                    src={project.image || getProjectImage(index)}
                    alt={project.title}
                    sx={{
                      height: 200,
                      width: '100%',
                      objectFit: 'cover',
                      borderTopLeftRadius: 4,
                      borderTopRightRadius: 4,
                    }}
                  />

                  <CardHeader
                    title={
                      <Typography variant="h6" fontWeight={600} color="#1e293b">
                        {project.title}
                      </Typography>
                    }
                    sx={{ pb: 0 }}
                  />

                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography variant="body2" color="#475569" sx={{ mb: 2 }}>
                      {project.description}
                    </Typography>
                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                      {project.technologies?.map((tech: any) => (
                        <Chip
                          key={tech}
                          label={tech}
                          variant="outlined"
                          size="small"
                          sx={{
                            backgroundColor: '#f1f5f9',
                            borderColor: '#e2e8f0',
                            color: '#6C63FF',
                            fontWeight: 500,
                          }}
                        />
                      ))}
                    </Box>
                  </CardContent>

                  <CardActions sx={{ justifyContent: 'space-between', px: 2, pb: 2, display: 'none' }}>
                    <Button
                      href={project.link || '#'}
                      target="_blank"
                      rel="noopener noreferrer"
                      variant="contained"
                      sx={{
                        backgroundColor: '#6C63FF',
                        '&:hover': { backgroundColor: '#00997A' },
                        textTransform: 'none',
                      }}
                      endIcon={<Icon icon="lucide:arrow-right" />}
                    >
                      Ver Projeto
                    </Button>
                    <Box>
                      <IconButton
                        component="a"
                        href={`https://github.com/adriano/${project.title?.toLowerCase()}`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Icon icon="lucide:github" style={{ color: '#64748b' }} />
                      </IconButton>
                      <IconButton
                        component="a"
                        href={project.link || '#'}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Icon icon="lucide:external-link" style={{ color: '#64748b' }} />
                      </IconButton>
                    </Box>
                  </CardActions>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
