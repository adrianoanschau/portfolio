import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Icon } from "@iconify/react";
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardHeader,
  Chip,
  Avatar,
} from '@mui/material';
import { Service } from "@/entities/Service";

export default function ServicesSection() {
  const [services, setServices] = useState<Service[]>([]);

  useEffect(() => {
    const loadServices = async () => setServices(await Service.list());
    loadServices();
  }, []);

  return (
    <Box component="section" id="services" sx={{ backgroundColor: '#f8fafc', py: { xs: 8, md: 12 } }}>
      <Container maxWidth="lg">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Typography variant="h4" align="center" fontWeight="bold" color="#1e293b" gutterBottom>
            Serviços
          </Typography>
          <Typography variant="h6" align="center" color="#FF8552" sx={{ mb: 6 }}>
            Soluções completas para suas necessidades digitais
          </Typography>
        </motion.div>

        <Grid container spacing={4}>
          {services.map((service, index) => (
            <Grid key={service.id} size={{ xs: 12, md: 6, lg: 4 }}>
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
                    textAlign: 'center',
                    border: service.featured ? '2px solid #FF8552' : '1px solid #e2e8f0',
                    backgroundColor: '#fff',
                    position: 'relative',
                    transition: 'all 0.3s ease',
                    overflow: 'visible',
                    '&:hover': {
                      transform: 'translateY(-8px)',
                      boxShadow: '0px 10px 30px rgba(106, 0, 255, 0.15)',
                    },
                  }}
                >
                  {service.featured && (
                    <Chip
                      label="DESTAQUE"
                      size="small"
                      sx={{
                        position: 'absolute',
                        top: -12,
                        left: '50%',
                        transform: 'translateX(-50%)',
                        backgroundColor: '#FF8552',
                        color: '#fff',
                        fontWeight: 500,
                      }}
                    />
                  )}

                  <CardHeader
                    sx={{
                      alignItems: 'center',
                      justifyContent: 'center',
                      display: 'flex',
                      flexDirection: 'column',
                      pb: 0,
                    }}
                    avatar={
                      <Avatar
                        sx={{
                          bgcolor: service.featured ? '#FF8552' : '#f1f5f9',
                          color: service.featured ? '#fff' : '#FF8552',
                          width: 64,
                          height: 64,
                          mb: 2,
                        }}
                      >
                        <Icon
                          icon={service.icon ?? ''}
                          width={28}
                          height={28}
                        />
                      </Avatar>
                    }
                    title={
                      <Typography variant="h6" fontWeight={600} color="#1e293b">
                        {service.title}
                      </Typography>
                    }
                  />
                  <CardContent>
                    <Typography variant="body2" color="#475569">
                      {service.description}
                    </Typography>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
