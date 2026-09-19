import { Icon } from '@iconify/react';
import {
  Box,
  Chip,
  Container,
  Link,
  Typography,
} from '@mui/material';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

import SectionHeading from '@/components/SectionHeading';
import { Project } from '@/entities/Project';
import { fadeInView } from '@/theme/motion';
import { publicUrl } from '@/utils/publicUrl';

export default function ProjectsSection() {
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    Project.list().then(setProjects);
  }, []);

  return (
    <Box
      component="section"
      id="projects"
      sx={{
        bgcolor: 'background.paper',
        py: { xs: 8, md: 10 },
        borderTop: 1,
        borderColor: 'divider',
      }}
    >
      <Container maxWidth="lg">
        <Box component={motion.div} {...fadeInView}>
          <SectionHeading
            title="Projetos"
            subtitle="Casos reais — Dasa, Vetta, RD Station e Deliver IT"
          />

          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' },
              gap: 2,
            }}
          >
            {projects.map(project => (
              <Box
                key={project.id}
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  border: 1,
                  borderColor: 'divider',
                  borderRadius: 1,
                  overflow: 'hidden',
                  bgcolor: 'background.default',
                }}
              >
                {project.image && (
                  <Box
                    component="img"
                    src={publicUrl(project.image)}
                    alt=""
                    sx={{
                      height: 140,
                      width: '100%',
                      objectFit: 'cover',
                      borderBottom: 1,
                      borderColor: 'divider',
                    }}
                  />
                )}

                <Box sx={{ p: 2.5, display: 'flex', flexDirection: 'column', flex: 1, gap: 1.5 }}>
                  <Typography variant="h6" component="h3">
                    {project.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{
                      display: '-webkit-box',
                      WebkitLineClamp: 3,
                      WebkitBoxOrient: 'vertical',
                      overflow: 'hidden',
                    }}
                  >
                    {project.description}
                  </Typography>
                  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.75, mt: 'auto' }}>
                    {project.technologies?.map(tech => (
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
                  {project.link && (
                    <Link
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      underline="hover"
                      color="primary"
                      variant="body2"
                      sx={{ display: 'inline-flex', alignItems: 'center', gap: 0.5, mt: 0.5 }}
                    >
                      Ver projeto
                      <Icon icon="lucide:arrow-up-right" width={14} height={14} />
                    </Link>
                  )}
                </Box>
              </Box>
            ))}
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
