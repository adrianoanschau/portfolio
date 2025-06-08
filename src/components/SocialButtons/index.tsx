import { Box, IconButton } from '@mui/material';
import { Icon } from '@iconify/react';
import { motion } from 'framer-motion';

const MotionIconButton = motion(IconButton);

const socialLinks = [
  {
    icon: 'lucide:github',
    href: 'https://github.com/adrianoanschau',
    hoverColor: '#000000',
    label: 'GitHub'
  },
  {
    icon: 'lucide:linkedin',
    href: 'https://linkedin.com/in/adrianoanschau',
    hoverColor: '#0077B5',
    label: 'LinkedIn'
  },
  {
    icon: 'lucide:mail',
    href: 'mailto:adrianoanschau@gmail.com',
    hoverColor: '#6A00FF',
    label: 'E-mail'
  }
];

export default function SocialButtons() {
  return (
    <Box sx={{ display: 'flex', gap: 1 }}>
      {socialLinks.map(({ icon, href, hoverColor, label }) => (
        <a
          key={icon}
          href={href}
          target={href.startsWith('http') ? '_blank' : undefined}
          rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
          aria-label={label}
          style={{ display: 'inline-block' }}
        >
          <MotionIconButton
            color="inherit"
            whileHover={{
              scale: 1.2,
              rotate: 5,
              boxShadow: '0px 4px 12px rgba(106, 0, 255, 0.2)',
              backgroundColor: "#ffffff",
              color: hoverColor,
            }}
            transition={{ type: 'spring', stiffness: 300 }}
            sx={{
              color: '#fff',
              transition: 'color 0.2s',
            }}
          >
            <Icon icon={icon} />
          </MotionIconButton>
        </a>
      ))}
    </Box>
  );
}
