import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Icon } from '@iconify/react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Button,
  TextField,
  Snackbar,
  Alert,
} from '@mui/material';
import { CHAT_ID, FORMSPREE_ENDPOINT, TELEGRAM_TOKEN } from "@/global";

export default function ContactSection() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [open, setOpen] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const sendMessage = async (formData: { name: string; email: string; message: string }) => {
    if (TELEGRAM_TOKEN && CHAT_ID) {
      const text =
        `Novo contato do site:\n` +
        `👤 Nome: ${formData.name}\n` +
        `📧 Email: ${formData.email}\n` +
        `💬 Mensagem: ${formData.message}`;

      await fetch(
        `https://api.telegram.org/bot${TELEGRAM_TOKEN}/sendMessage`,
        {
          method: "POST",
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            chat_id: CHAT_ID,
            text,
            parse_mode: "Markdown"
          })
        }
      );
    }

    if (FORMSPREE_ENDPOINT) {
      await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: { 'Accept': 'application/json' },
        body: JSON.stringify(formData),
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await sendMessage(formData);
    setOpen(true);
    setFormData({ name: '', email: '', message: '' });
  };

  const contactInfo = [
    { icon: 'lucide:mail', title: 'Email', content: 'adrianoanschau@gmail.com' },
    { icon: 'lucide:phone', title: 'Telefone', content: '+55 (51) 99 579 5971' },
    { icon: 'lucide:map-pin', title: 'Localização', content: 'Canoas, RS - Brasil' },
  ];

  return (
    <Box component="section" id="contact" sx={{ backgroundColor: '#f8fafc', py: { xs: 8, md: 12 } }}>
      <Container maxWidth="lg">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Typography variant="h4" align="center" fontWeight="bold" color="#1e293b" gutterBottom>
            Entre em Contato
          </Typography>
          <Typography variant="h6" align="center" color="#005662" sx={{ mb: 6 }}>
            Vamos conversar sobre seu próximo projeto
          </Typography>
        </motion.div>

        <Grid container spacing={4}>
          <Grid size={{ xs: 12, lg: 8 }}>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Card sx={{ backgroundColor: '#fff', border: '1px solid #e2e8f0', p: { xs: 2, sm: 4 } }}>
                <form onSubmit={handleSubmit}>
                  <Grid container spacing={3}>
                    <Grid size={{ xs: 12, sm: 6 }}>
                      <TextField
                        fullWidth
                        required
                        name="name"
                        label="Nome"
                        value={formData.name}
                        onChange={handleInputChange}
                      />
                    </Grid>
                    <Grid size={{ xs: 12, sm: 6 }}>
                      <TextField
                        fullWidth
                        required
                        name="email"
                        type="email"
                        label="Email"
                        value={formData.email}
                        onChange={handleInputChange}
                      />
                    </Grid>
                    <Grid size={{ xs: 12 }}>
                      <TextField
                        name="message"
                        label="Sua mensagem"
                        multiline
                        required
                        minRows={6}
                        fullWidth
                        value={formData.message}
                        onChange={handleInputChange}
                      />
                    </Grid>
                    <Grid size={{ xs: 12 }}>
                      <Button
                        type="submit"
                        variant="contained"
                        size="large"
                        endIcon={<Icon icon="lucide:send" />}
                        sx={{
                          backgroundColor: '#005662',
                          '&:hover': { backgroundColor: '#5A00E6' },
                          textTransform: 'none',
                        }}
                      >
                        Enviar Mensagem
                      </Button>
                    </Grid>
                  </Grid>
                </form>
              </Card>
            </motion.div>
          </Grid>

          <Grid size={{ xs: 12, lg: 4 }}>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                {contactInfo.map((info) => (
                  <Card key={info.title} sx={{ backgroundColor: '#fff', border: '1px solid #e2e8f0' }}>
                    <CardContent sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                      <Box
                        sx={{
                          backgroundColor: '#005662',
                          color: '#fff',
                          width: 48,
                          height: 48,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          borderRadius: 2,
                        }}
                      >
                        <Icon icon={info.icon} width={24} height={24} />
                      </Box>
                      <Box>
                        <Typography variant="subtitle1" fontWeight={600} color="#1e293b">
                          {info.title}
                        </Typography>
                        <Typography variant="body2" color="#64748b">
                          {info.content}
                        </Typography>
                      </Box>
                    </CardContent>
                  </Card>
                ))}
              </Box>
            </motion.div>
          </Grid>
        </Grid>

        {/* Toast */}
        <Snackbar open={open} autoHideDuration={4000} onClose={() => setOpen(false)} anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}>
          <Alert onClose={() => setOpen(false)} severity="success" sx={{ width: '100%' }}>
            Mensagem enviada! Obrigado por entrar em contato. Retornarei em breve.
          </Alert>
        </Snackbar>
      </Container>
    </Box>
  );
}
