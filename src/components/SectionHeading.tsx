import { Box, Typography } from '@mui/material';

type SectionHeadingProps = {
  title: string;
  subtitle?: string;
};

export default function SectionHeading({ title, subtitle }: SectionHeadingProps) {
  return (
    <Box sx={{ mb: { xs: 4, md: 5 }, maxWidth: 720 }}>
      <Typography variant="h4" component="h2" gutterBottom={Boolean(subtitle)}>
        {title}
      </Typography>
      {subtitle && (
        <Typography variant="body1" color="text.secondary">
          {subtitle}
        </Typography>
      )}
    </Box>
  );
}
