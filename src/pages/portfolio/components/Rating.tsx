import { Icon } from '@iconify/react';
import { Box } from '@mui/material';

type RatingProps = {
  rating?: number;
  maxRating?: number;
  className?: string;
};

export default function Rating({ rating = 5, maxRating = 5, className = '' }: RatingProps) {
  return (
    <Box className={className} sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
      {Array.from({ length: maxRating }).map((_, index) => (
        <Icon
          key={index}
          icon="lucide:star"
          width={20}
          height={20}
          style={{
            color: index < rating ? '#FF6B00' : '#CBD5E1',
            fill: index < rating ? '#FF6B00' : '#E2E8F0',
          }}
        />
      ))}
    </Box>
  );
}
