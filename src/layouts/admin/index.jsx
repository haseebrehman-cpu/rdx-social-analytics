// Chakra imports
import { Portal, Box } from '@chakra-ui/react';
// Layout components
import Navbar from 'components/navbar/NavbarAdmin';
import Sidebar from 'components/sidebar/Sidebar';
import { SidebarProvider, SidebarContext } from 'contexts/SidebarContext';
import React, { useContext, useState } from 'react';
import { Navigate, Route, Routes, useLocation } from 'react-router-dom';
import routes from 'routes';

export default function Dashboard(props) {
  return (
    <SidebarProvider defaultIsOpen={true}>
      <DashboardInner {...props} />
    </SidebarProvider>
  );
}

function DashboardInner(props) {
  const { ...rest } = props;
  const [fixed] = useState(false);
  const location = useLocation();
  const { isOpen, onOpen } = useContext(SidebarContext);

  // functions for changing the states from components
  const getRoute = () => {
    return location.pathname !== '/admin/full-screen-maps';
  };
  const getActiveRoute = (routes) => {
    let activeRoute = 'Default Brand Text';
    for (let i = 0; i < routes.length; i++) {
      if (routes[i].collapse) {
        let collapseActiveRoute = getActiveRoute(routes[i].items);
        if (collapseActiveRoute !== activeRoute) {
          return collapseActiveRoute;
        }
      } else if (routes[i].category) {
        let categoryActiveRoute = getActiveRoute(routes[i].items);
        if (categoryActiveRoute !== activeRoute) {
          return categoryActiveRoute;
        }
      } else {
        if (
          location.pathname.indexOf(routes[i].layout + routes[i].path) !== -1
        ) {
          return routes[i].name;
        }
      }
    }
    return activeRoute;
  };
  const getActiveNavbar = (routes) => {
    let activeNavbar = false;
    for (let i = 0; i < routes.length; i++) {
      if (routes[i].collapse) {
        let collapseActiveNavbar = getActiveNavbar(routes[i].items);
        if (collapseActiveNavbar !== activeNavbar) {
          return collapseActiveNavbar;
        }
      } else if (routes[i].category) {
        let categoryActiveNavbar = getActiveNavbar(routes[i].items);
        if (categoryActiveNavbar !== activeNavbar) {
          return categoryActiveNavbar;
        }
      } else {
        if (
          location.pathname.indexOf(routes[i].layout + routes[i].path) !== -1
        ) {
          return routes[i].secondary;
        }
      }
    }
    return activeNavbar;
  };
  const getActiveNavbarText = (routes) => {
    let activeNavbar = false;
    for (let i = 0; i < routes.length; i++) {
      if (routes[i].collapse) {
        let collapseActiveNavbar = getActiveNavbarText(routes[i].items);
        if (collapseActiveNavbar !== activeNavbar) {
          return collapseActiveNavbar;
        }
      } else if (routes[i].category) {
        let categoryActiveNavbar = getActiveNavbarText(routes[i].items);
        if (categoryActiveNavbar !== activeNavbar) {
          return categoryActiveNavbar;
        }
      } else {
        if (
          location.pathname.indexOf(routes[i].layout + routes[i].path) !== -1
        ) {
          return routes[i].messageNavbar;
        }
      }
    }
    return activeNavbar;
  };
  const getRoutes = (routes) => {
    return routes.map((route, key) => {
      if (route.collapse) {
        return getRoutes(route.items);
      }
      if (route.layout === '/admin') {
        return (
          <Route path={`${route.path}`} element={route.component} key={key} />
        );
      } else {
        return null;
      }
    });
  };
  document.documentElement.dir = 'ltr';
  return (
    <Box>
      <Box>
        <Sidebar routes={routes} {...rest} />
        <Box
          position="relative"
          w={{
            base: '100%',
            xl: isOpen ? 'calc(100% - 300px)' : 'calc(100% - 80px)',
          }}
          ms={{ base: '0', xl: isOpen ? '300px' : '80px' }}
          transition="width 0.25s ease, margin 0.25s ease"
        >
          <Portal>
            <Box>
              <Navbar
                onOpen={onOpen}
                logoText={'RDX SOCIAL'}
                brandText={getActiveRoute(routes)}
                secondary={getActiveNavbar(routes)}
                message={getActiveNavbarText(routes)}
                fixed={fixed}
                {...rest}
              />
            </Box>
          </Portal>

          <Box
            mx="auto"
            w="100%"
            px={{ base: '20px', md: '15px' }}
            pt="40px"
          >
            {getRoute() ? (
              <Routes>
                {getRoutes(routes)}
                <Route
                  index
                  element={<Navigate to="/admin/conversion-rate-summary" replace />}
                />
                <Route
                  path="/conversion-rate"
                  element={<Navigate to="/admin/conversion-rate-summary" replace />}
                />
                <Route
                  path="/conversion-funnel/dashboard"
                  element={
                    <Navigate
                      to="/admin/conversion-funnel/dashboard/charts"
                      replace
                    />
                  }
                />
                <Route
                  path="/"
                  element={<Navigate to="/admin/conversion-rate-summary" replace />}
                />
              </Routes>
            ) : null}
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
