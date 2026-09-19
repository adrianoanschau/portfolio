import { Box } from '@mui/material';
import type { FC, PropsWithChildren } from 'react';

import NavBar from '@/components/NavBar';
import { ColorModeProvider } from '@/theme/ColorModeContext';

const Layout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <ColorModeProvider>
      <Box id="top">
        <NavBar />
        {children}
      </Box>
    </ColorModeProvider>
  );
};

export default Layout;
