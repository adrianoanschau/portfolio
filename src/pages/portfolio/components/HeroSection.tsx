import { Icon } from "@iconify/react";
import { Avatar, Box, Button, Container, Grid, Typography } from "@mui/material";
import { motion } from "framer-motion";
import SocialButtons from "@/components/SocialButtons";

export default function HeroSection() {
  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <Box
      component={motion.div}
      initial={{ background: 'linear-gradient(135deg, #00FFB2, #00D9FF, #0066FF)' }}
      animate={{
        background: [
          'linear-gradient(135deg, #1bfff0, #41c9e2, #2a70e0)',
          'linear-gradient(135deg, #1e3a5f, #1f8a70, #6edcd9)',
          'linear-gradient(135deg, #223843, #6eafff, #96e6a1)',
          'linear-gradient(135deg, #1bfff0, #41c9e2, #2a70e0)', // loop
        ],
      }}
      transition={{
        duration: 15,
        ease: 'easeInOut',
        repeat: Infinity,
      }}
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        overflow: 'hidden',
        backgroundSize: '400% 400%',
      }}
    >
      {/* Background SVG pattern */}
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          opacity: 0.1,
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.8'%3E%3Ccircle cx='20' cy='20' r='3'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          backgroundRepeat: 'repeat',
          backgroundSize: '20px 20px',
          color: 'white',
          py: 12,
        }}
      />

      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
        <Grid container spacing={4} alignItems="center">
          <Grid size={{ xs: 12, md: 7 }}>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Typography variant="h2" sx={{ fontWeight: 'bold', color: "#fff", mb: 1 }}>
                Adriano Anschau
              </Typography>
              <Typography variant="h4" sx={{ color: "rgba(255,255,255,0.9)", mb: 2 }}>
                Desenvolvedor Full Stack
              </Typography>
              <Typography variant="body1" sx={{ color: "rgba(255,255,255,0.8)", fontSize: '1.125rem', maxWidth: 600, mb: 4 }}>
                Construindo soluções digitais com qualidade e inovação. Transformo ideias em produtos tecnológicos que geram valor real.
              </Typography>

              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2, mb: 4 }}>
                <Button
                  variant="contained"
                  sx={{ backgroundColor: "#fff", color: "#6A00FF", '&:hover': { backgroundColor: "rgba(255,255,255,0.9)" } }}
                  onClick={scrollToProjects}
                  endIcon={<Icon icon="lucide:arrow-down" />}
                >
                  Ver Projetos
                </Button>

                <Button
                  variant="outlined"
                  sx={{ color: "#fff", borderColor: "#fff", '&:hover': { borderColor: "#ddd" } }}
                  onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                >
                  Entre em Contato
                </Button>
              </Box>

              <SocialButtons />
            </motion.div>
          </Grid>

          <Grid size={{ xs: 12, md: 5 }}>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              style={{ display: 'flex', justifyContent: 'center' }}
            >
              <Avatar
                src="/images/me.jpeg"
                alt="Adriano Anschau"
                sx={{
                  width: { xs: 192, md: 288 },
                  height: { xs: 192, md: 288 },
                  fontSize: '3rem',
                  border: '4px solid rgba(255,255,255,0.3)',
                  boxShadow: 10,
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    transform: 'scale(1.05)',
                    borderColor: '#ffffff',
                    boxShadow: '0 12px 32px rgba(106, 0, 255, 0.25)',
                  },
                }}
              >
                AA
              </Avatar>
            </motion.div>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
