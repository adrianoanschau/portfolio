import { Box, Container, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

import SectionHeading from '@/components/SectionHeading';
import { Service } from '@/entities/Service';
import { fadeInView } from '@/theme/motion';

export default function ServicesSection() {
  const [services, setServices] = useState<Service[]>([]);

  useEffect(() => {
    Service.list().then(setServices);
  }, []);

  if (services.length === 0) {
    return null;
  }

  return (
    <Box
      component="section"
      id="services"
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
            title="O que eu entrego"
            subtitle="Capacidades para um time de produto — não um catálogo de serviços."
          />

          <Box
            component="ul"
            sx={{
              listStyle: 'none',
              m: 0,
              p: 0,
              display: 'grid',
              gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' },
              columnGap: 6,
            }}
          >
            {services.map((service, index) => (
              <Box
                component="li"
                key={service.id}
                sx={{
                  py: 2.25,
                  borderTop: 1,
                  borderColor: 'divider',
                  ...(index === 0 || index === 1
                    ? { borderTop: { md: 1 } }
                    : {}),
                }}
              >
                <Typography variant="subtitle1" sx={{ mb: 0.5 }}>
                  {service.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {service.description}
                </Typography>
              </Box>
            ))}
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
