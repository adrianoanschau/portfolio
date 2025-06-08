import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Icon } from '@iconify/react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Avatar,
} from '@mui/material';
import Rating from './Rating';
import { Testimonial } from "@/entities/Testimonial";

export default function TestimonialsSection() {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);

  useEffect(() => {
    const loadTestimonials = async () => setTestimonials(await Testimonial.list());
    loadTestimonials();
  }, []);

  const getAvatarFallback = (name: string) =>
    name?.split(' ').map(n => n[0]).join('') || 'U';

  return (
    <Box component="section" id="testimonials" sx={{ backgroundColor: '#fff', py: { xs: 8, md: 12 } }}>
      <Container maxWidth="lg">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Typography variant="h4" align="center" fontWeight="bold" color="#1e293b" gutterBottom>
            Depoimentos
          </Typography>
          <Typography variant="h6" align="center" color="#FF6B81" sx={{ mb: 6 }}>
            O que meus clientes dizem sobre meu trabalho
          </Typography>
        </motion.div>

        <Grid container spacing={4} alignItems="center" justifyContent="center">
          {testimonials.length === 0 ? (
            <Grid size={{ xs: 12, md: 6, lg: 4 }}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <Card
                  elevation={3}
                  sx={{
                    height: '100%',
                    backgroundColor: '#f8fafc',
                    p: 3,
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    textAlign: 'center',
                    border: '2px dashed #CBD5E1',
                  }}
                >
                  <Box sx={{ mb: 3 }}>
                    <Avatar
                      sx={{
                        width: 64,
                        height: 64,
                        mx: 'auto',
                        bgcolor: '#E0E7FF',
                        color: '#6366F1',
                      }}
                    >
                      <Icon icon="lucide:user-plus" width={32} height={32} />
                    </Avatar>

                    <Typography variant="h6" fontWeight={600} color="#1e293b" sx={{ mt: 2 }}>
                      Seja o primeiro a deixar um depoimento!
                    </Typography>

                    <Typography variant="body2" color="#64748b" sx={{ mt: 1 }}>
                      Já trabalhamos juntos? Compartilhe sua experiência e ajude outros a conhecerem meu trabalho.
                    </Typography>
                  </Box>

                  <Box>
                    <a
                      href="mailto:adrianoanschau@gmail.com?subject=Depoimento%20para%20portfólio"
                      target="_blank"
                      style={{ textDecoration: 'none' }}
                    >
                      <Box
                        sx={{
                          mt: 2,
                          py: 1,
                          px: 3,
                          display: 'inline-block',
                          borderRadius: '8px',
                          backgroundColor: '#6A00FF',
                          color: '#fff',
                          fontWeight: 500,
                          transition: 'all 0.3s ease',
                          '&:hover': {
                            backgroundColor: '#5800cc',
                          },
                        }}
                      >
                        Enviar depoimento
                      </Box>
                    </a>
                  </Box>
                </Card>
              </motion.div>
            </Grid>
          ) : (
            testimonials.map((testimonial, index) => (
            <Grid key={testimonial.id} size={{ xs: 12, md: 6, lg: 4 }}>
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
                    backgroundColor: '#f8fafc',
                    p: 3,
                    position: 'relative',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      transform: 'translateY(-8px)',
                      boxShadow: '0px 10px 30px rgba(106, 0, 255, 0.1)',
                    },
                  }}
                >
                  <Box sx={{ position: 'absolute', top: 16, right: 16, opacity: 0.2 }}>
                    <Icon icon="lucide:quote" width={32} height={32} color="#FF6B81" />
                  </Box>

                  <CardContent sx={{ p: 0 }}>
                    <Rating rating={testimonial.rating} />
                    <Typography
                      variant="body2"
                      color="#475569"
                      fontStyle="italic"
                      sx={{ my: 2 }}
                    >
                      “{testimonial.comment}”
                    </Typography>

                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mt: 3 }}>
                      <Avatar
                        src={testimonial.avatar}
                        alt={testimonial.name}
                        sx={{
                          width: 48,
                          height: 48,
                          border: '2px solid #FF6B81',
                          bgcolor: '#e0cffc',
                          fontWeight: 600,
                          color: '#FF6B81',
                        }}
                      >
                        {getAvatarFallback(testimonial.name)}
                      </Avatar>
                      <Box>
                        <Typography variant="subtitle1" fontWeight={600} color="#1e293b">
                          {testimonial.name}
                        </Typography>
                        <Typography variant="caption" color="#64748b">
                          {testimonial.role}
                          {testimonial.company && `, ${testimonial.company}`}
                        </Typography>
                      </Box>
                    </Box>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          )))}
        </Grid>
      </Container>
    </Box>
  );
}
