import React, { useContext } from 'react';

import {
  Box,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerOverlay,
  useBreakpointValue,
  useColorModeValue,
} from '@chakra-ui/react';
import Content from 'components/sidebar/components/Content';
import {
  renderThumb,
  renderTrack,
  renderView,
} from 'components/scrollbar/Scrollbar';
import { Scrollbars } from 'react-custom-scrollbars-2';
import PropTypes from 'prop-types';

import { SidebarContext } from 'contexts/SidebarContext';

export const SIDEBAR_WIDTH_OPEN = '300px';
export const SIDEBAR_WIDTH_COLLAPSED = '80px';

function Sidebar(props) {
  const { routes } = props;
  const { isOpen, onClose } = useContext(SidebarContext);

  const shadow = useColorModeValue(
    '14px 17px 40px 4px rgba(112, 144, 176, 0.08)',
    'unset',
  );
  const sidebarBg = useColorModeValue('white', 'navy.800');

  const isDesktop = useBreakpointValue(
    { base: false, xl: true },
    { fallback: 'xl' },
  );

  const desktopWidth = isOpen ? SIDEBAR_WIDTH_OPEN : SIDEBAR_WIDTH_COLLAPSED;

  return (
    <>
      <Box
        display={{ base: 'none', xl: 'block' }}
        position="fixed"
        top="0"
        left="0"
        h="100vh"
        w={desktopWidth}
        overflow="hidden"
        transition="width 0.25s ease"
        zIndex="90"
      >
        <Box
          bg={sidebarBg}
          w={desktopWidth}
          minW={desktopWidth}
          h="100vh"
          overflowX="hidden"
          boxShadow={shadow}
          transition="width 0.25s ease, min-width 0.25s ease"
        >
          <Scrollbars
            autoHide
            renderTrackVertical={renderTrack}
            renderThumbVertical={renderThumb}
            renderView={renderView}
          >
            <Content routes={routes} />
          </Scrollbars>
        </Box>
      </Box>

      <Drawer
        isOpen={!isDesktop && isOpen}
        onClose={onClose}
        placement={
          typeof document !== 'undefined' &&
          document.documentElement.dir === 'rtl'
            ? 'right'
            : 'left'
        }
      >
        <DrawerOverlay />
        <DrawerContent w="300px" maxW="300px" bg={sidebarBg}>
          <DrawerCloseButton
            zIndex="3"
            _focus={{ boxShadow: 'none' }}
            _hover={{ boxShadow: 'none' }}
          />
          <DrawerBody maxW="285px" px="0rem" pb="0">
            <Scrollbars
              autoHide
              renderTrackVertical={renderTrack}
              renderThumbVertical={renderThumb}
              renderView={renderView}
            >
              <Content routes={routes} />
            </Scrollbars>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}

Sidebar.propTypes = {
  logoText: PropTypes.string,
  routes: PropTypes.arrayOf(PropTypes.object),
  variant: PropTypes.string,
};

export default Sidebar;
