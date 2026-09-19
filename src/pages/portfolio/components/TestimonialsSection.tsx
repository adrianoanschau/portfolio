import { Box, Container, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

import SectionHeading from '@/components/SectionHeading';
import { Testimonial } from '@/entities/Testimonial';
import { fadeInView } from '@/theme/motion';

export default function TestimonialsSection() {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);

  useEffect(() => {
    Testimonial.list().then(setTestimonials);
  }, []);

  if (testimonials.length === 0) {
    return null;
  }

  return (
    <Box
      component="section"
      id="testimonials"
      sx={{
        bgcolor: 'background.paper',
        py: { xs: 8, md: 10 },
        borderTop: 1,
        borderColor: 'divider',
      }}
    >
      <Container maxWidth="lg">
        <Box component={motion.div} {...fadeInView}>
          <SectionHeading title="Depoimentos" />
          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' },
              gap: 2,
            }}
          >
            {testimonials.map(testimonial => (
              <Box
                key={testimonial.id}
                sx={{
                  p: 2.5,
                  border: 1,
                  borderColor: 'divider',
                  borderRadius: 1,
                }}
              >
                <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                  “{testimonial.comment}”
                </Typography>
                <Typography variant="subtitle2">{testimonial.name}</Typography>
                <Typography variant="caption" color="text.secondary">
                  {testimonial.role}
                  {testimonial.company && `, ${testimonial.company}`}
                </Typography>
              </Box>
            ))}
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
