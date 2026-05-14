import './assets/css/App.css';
import { Routes, Route, Navigate } from 'react-router-dom';
import AuthLayout from './layouts/auth';
import AdminLayout from './layouts/admin';
import RTLLayout from './layouts/rtl';
import { ChakraProvider, useColorMode } from '@chakra-ui/react';
import { ThemeProvider as MUIThemeProvider, createTheme } from '@mui/material/styles';
import initialTheme from './theme/theme';
import { useMemo, useState } from 'react';

function AppRoutes({ currentTheme, setCurrentTheme }) {
  const { colorMode } = useColorMode();

  const muiTheme = useMemo(
    () =>
      createTheme({
        palette: { mode: colorMode === 'dark' ? 'dark' : 'light' },
      }),
    [colorMode],
  );

  return (
    <MUIThemeProvider theme={muiTheme}>
      <Routes>
        <Route path="auth/*" element={<AuthLayout />} />
        <Route
          path="admin/*"
          element={
            <AdminLayout theme={currentTheme} setTheme={setCurrentTheme} />
          }
        />
        <Route
          path="rtl/*"
          element={
            <RTLLayout theme={currentTheme} setTheme={setCurrentTheme} />
          }
        />
        <Route path="/" element={<Navigate to="/admin" replace />} />
      </Routes>
    </MUIThemeProvider>
  );
}

export default function Main() {
  // eslint-disable-next-line
  const [currentTheme, setCurrentTheme] = useState(initialTheme);
  return (
    <ChakraProvider theme={currentTheme}>
      <AppRoutes
        currentTheme={currentTheme}
        setCurrentTheme={setCurrentTheme}
      />
    </ChakraProvider>
  );
}
