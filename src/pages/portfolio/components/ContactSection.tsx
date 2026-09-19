import { Icon } from '@iconify/react';
import {
  Alert,
  Box,
  Button,
  Container,
  Link,
  Snackbar,
  Stack,
  TextField,
  Typography,
} from '@mui/material';
import { motion } from 'framer-motion';
import { useState, type FormEvent } from 'react';

import SectionHeading from '@/components/SectionHeading';
import { CHAT_ID, FORMSPREE_ENDPOINT, TELEGRAM_TOKEN } from '@/global';
import { fadeInView } from '@/theme/motion';

const contactInfo = [
  {
    label: 'Email',
    value: 'adrianoanschau@gmail.com',
    href: 'mailto:adrianoanschau@gmail.com',
  },
  {
    label: 'LinkedIn',
    value: 'linkedin.com/in/adrianoanschau',
    href: 'https://linkedin.com/in/adrianoanschau',
  },
  {
    label: 'Telefone',
    value: '+55 (51) 99 579 5971',
    href: 'tel:+5551995795971',
  },
  {
    label: 'Localização',
    value: 'Porto Alegre, RS · remoto',
  },
];

export default function ContactSection() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [open, setOpen] = useState(false);

  const sendMessage = async (payload: typeof formData) => {
    if (TELEGRAM_TOKEN && CHAT_ID) {
      const text =
        `Novo contato do site:\n` +
        `Nome: ${payload.name}\n` +
        `Email: ${payload.email}\n` +
        `Mensagem: ${payload.message}`;

      await fetch(`https://api.telegram.org/bot${TELEGRAM_TOKEN}/sendMessage`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          chat_id: CHAT_ID,
          text,
        }),
      });
    }

    if (FORMSPREE_ENDPOINT) {
      await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: JSON.stringify(payload),
      });
    }
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    await sendMessage(formData);
    setOpen(true);
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <Box
      component="section"
      id="contact"
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
            title="Contato"
            subtitle="Aberto a vagas Pleno/Sênior — Porto Alegre ou remoto"
          />

          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: { xs: '1fr', md: '1fr 1.2fr' },
              gap: { xs: 4, md: 8 },
              alignItems: 'start',
            }}
          >
            <Stack spacing={2.25}>
              {contactInfo.map(info => (
                <Box key={info.label}>
                  <Typography variant="caption" color="text.secondary" sx={{ display: 'block' }}>
                    {info.label}
                  </Typography>
                  {info.href ? (
                    <Link
                      href={info.href}
                      target={info.href.startsWith('http') ? '_blank' : undefined}
                      rel={info.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      underline="hover"
                      color="text.primary"
                      variant="body2"
                    >
                      {info.value}
                    </Link>
                  ) : (
                    <Typography variant="body2">{info.value}</Typography>
                  )}
                </Box>
              ))}
            </Stack>

            <Box
              component="form"
              onSubmit={handleSubmit}
              sx={{
                display: 'grid',
                gap: 2,
                gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr' },
              }}
            >
              <TextField
                required
                name="name"
                label="Nome"
                value={formData.name}
                onChange={e => setFormData({ ...formData, name: e.target.value })}
              />
              <TextField
                required
                name="email"
                type="email"
                label="Email"
                value={formData.email}
                onChange={e => setFormData({ ...formData, email: e.target.value })}
              />
              <TextField
                name="message"
                label="Mensagem"
                multiline
                required
                minRows={5}
                fullWidth
                value={formData.message}
                onChange={e => setFormData({ ...formData, message: e.target.value })}
                sx={{ gridColumn: '1 / -1' }}
              />
              <Box sx={{ gridColumn: '1 / -1' }}>
                <Button
                  type="submit"
                  variant="contained"
                  endIcon={<Icon icon="lucide:send" width={16} height={16} />}
                >
                  Enviar mensagem
                </Button>
              </Box>
            </Box>
          </Box>
        </Box>

        <Snackbar
          open={open}
          autoHideDuration={4000}
          onClose={() => setOpen(false)}
          anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
        >
          <Alert onClose={() => setOpen(false)} severity="success" sx={{ width: '100%' }}>
            Mensagem enviada. Obrigado pelo contato — retorno em breve.
          </Alert>
        </Snackbar>
      </Container>
    </Box>
  );
}
