import { Icon } from '@iconify/react';
import { Box, IconButton } from '@mui/material';

const socialLinks = [
  {
    icon: 'lucide:github',
    href: 'https://github.com/adrianoanschau',
    label: 'GitHub',
  },
  {
    icon: 'lucide:linkedin',
    href: 'https://linkedin.com/in/adrianoanschau',
    label: 'LinkedIn',
  },
  {
    icon: 'lucide:mail',
    href: 'mailto:adrianoanschau@gmail.com',
    label: 'E-mail',
  },
];

export default function SocialButtons() {
  return (
    <Box sx={{ display: 'flex', gap: 0.5 }}>
      {socialLinks.map(({ icon, href, label }) => (
        <IconButton
          key={label}
          component="a"
          href={href}
          target={href.startsWith('http') ? '_blank' : undefined}
          rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
          aria-label={label}
          size="small"
          sx={{
            color: 'text.secondary',
            '&:hover': {
              color: 'primary.main',
              backgroundColor: 'action.hover',
            },
          }}
        >
          <Icon icon={icon} width={20} height={20} />
        </IconButton>
      ))}
    </Box>
  );
}
