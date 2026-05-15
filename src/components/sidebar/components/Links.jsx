/* eslint-disable */
import React, { useContext } from 'react';
import { NavLink, useLocation } from 'react-router-dom';

import {
  Box,
  Flex,
  Portal,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverBody,
  Text,
  Tooltip,
  useColorModeValue,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from '@chakra-ui/react';

import { SidebarContext } from 'contexts/SidebarContext';

export function SidebarLinks(props) {
  const location = useLocation();
  const { isOpen } = useContext(SidebarContext);

  const activeColor = useColorModeValue('navy.700', 'white');
  const inactiveColor = useColorModeValue(
    'secondaryGray.600',
    'secondaryGray.600',
  );
  const activeIcon = useColorModeValue('brand.500', 'white');
  const textColor = useColorModeValue('secondaryGray.700', 'secondaryGray.600');
  const sectionHeaderColor = useColorModeValue(
    'secondaryGray.700',
    'whiteAlpha.700',
  );

  const itemHoverBg = useColorModeValue(
    'rgba(112, 144, 176, 0.08)',
    'whiteAlpha.50',
  );
  const itemActiveBg = useColorModeValue(
    'rgba(79, 209, 197, 0.10)',
    'whiteAlpha.100',
  );

  const iconBoxBg = useColorModeValue('white', 'whiteAlpha.100');
  const iconBoxBgActive = useColorModeValue('brand.500', '#422AFB');
  const iconBoxShadow = useColorModeValue(
    '0 6px 14px rgba(112, 144, 176, 0.12)',
    'none',
  );
  const iconBoxShadowActive = useColorModeValue(
    '0 8px 18px rgba(79, 209, 197, 0.45)',
    '0 6px 16px rgba(0, 0, 0, 0.35)',
  );

  const nestedBorderColor = useColorModeValue(
    'rgba(135, 140, 189, 0.25)',
    'whiteAlpha.200',
  );

  const popoverBg = useColorModeValue('white', 'navy.800');
  const popoverShadow = useColorModeValue(
    '0 12px 36px rgba(112, 144, 176, 0.22)',
    '0 12px 36px rgba(0, 0, 0, 0.5)',
  );

  const { routes } = props;

  const activeRoute = (routeName) => {
    if (!routeName) return false;
    const pathname = location.pathname.toLowerCase();
    const target = routeName.toLowerCase();
    const idx = pathname.indexOf(target);
    if (idx === -1) return false;
    const endChar = pathname[idx + target.length];
    return endChar === undefined || endChar === '/';
  };

  const renderIconBox = (route, isActive, size = 36) => (
    <Flex
      align="center"
      justify="center"
      w={`${size}px`}
      h={`${size}px`}
      minW={`${size}px`}
      borderRadius="10px"
      bg={isActive ? iconBoxBgActive : iconBoxBg}
      color={isActive ? 'white' : 'gray.500'}
      boxShadow={isActive ? iconBoxShadowActive : iconBoxShadow}
      transition="all 0.2s ease"
    >
      {route.icon}
    </Flex>
  );

  const renderFlyoutItems = (items) => {
    return items
      .flatMap((item) => (item.category && item.items ? item.items : item))
      .filter(
        (item) =>
          item.layout === '/admin' ||
          item.layout === '/auth' ||
          item.layout === '/rtl',
      )
      .map((item, idx) => {
        const isItemActive = activeRoute(item.path.toLowerCase());
        return (
          <NavLink key={idx} to={item.layout + item.path}>
            <Flex
              align="center"
              px="10px"
              py="8px"
              my="2px"
              borderRadius="10px"
              bg={isItemActive ? itemActiveBg : 'transparent'}
              _hover={{ bg: isItemActive ? itemActiveBg : itemHoverBg }}
              transition="background 0.15s ease"
            >
              {item.icon && (
                <Box
                  color={isItemActive ? activeIcon : undefined}
                  me="10px"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                >
                  {item.icon}
                </Box>
              )}
              <Text
                fontSize="sm"
                color={isItemActive ? activeColor : textColor}
                fontWeight={isItemActive ? '600' : '500'}
              >
                {item.name}
              </Text>
            </Flex>
          </NavLink>
        );
      });
  };

  const createLinks = (routes, isNested = false) => {
    return routes.map((route, index) => {
      if (route.category) {
        if (!isOpen) {
          return (
            <React.Fragment key={index}>
              {createLinks(route.items, true)}
            </React.Fragment>
          );
        }
        return (
          <React.Fragment key={index}>
            <Text
              fontSize="xs"
              color={sectionHeaderColor}
              fontWeight="700"
              textTransform="uppercase"
              letterSpacing="0.08em"
              px="12px"
              pt="20px"
              pb="10px"
            >
              {route.name}
            </Text>
            {createLinks(route.items, true)}
          </React.Fragment>
        );
      } else if (route.items && !isNested) {
        const isActive = activeRoute(route.path?.toLowerCase?.() ?? '');

        if (!isOpen) {
          return (
            <Popover
              key={index}
              trigger="hover"
              placement="right-start"
              gutter={12}
              openDelay={100}
              closeDelay={150}
            >
              <PopoverTrigger>
                <Flex
                  align="center"
                  justify="center"
                  py="6px"
                  my="4px"
                  cursor="pointer"
                >
                  {renderIconBox(route, isActive, 40)}
                </Flex>
              </PopoverTrigger>
              <Portal>
                <PopoverContent
                  w="240px"
                  bg={popoverBg}
                  boxShadow={popoverShadow}
                  border="none"
                  _focus={{ boxShadow: popoverShadow }}
                  borderRadius="14px"
                >
                  <PopoverBody p="12px">
                    <Text
                      px="10px"
                      pb="8px"
                      fontSize="xs"
                      fontWeight="700"
                      textTransform="uppercase"
                      letterSpacing="0.08em"
                      color={sectionHeaderColor}
                    >
                      {route.name}
                    </Text>
                    {renderFlyoutItems(route.items)}
                  </PopoverBody>
                </PopoverContent>
              </Portal>
            </Popover>
          );
        }

        return (
          <AccordionItem border="none" key={index} mb="4px">
            <AccordionButton
              p="0"
              _hover={{ bg: 'transparent' }}
              _focus={{ boxShadow: 'none' }}
              borderRadius="12px"
            >
              <Flex
                align="center"
                w="100%"
                py="8px"
                px="10px"
                borderRadius="12px"
                bg={isActive ? itemActiveBg : 'transparent'}
                _hover={{ bg: isActive ? itemActiveBg : itemHoverBg }}
                transition="background 0.15s ease"
              >
                {renderIconBox(route, isActive)}
                <Text
                  ms="12px"
                  me="auto"
                  fontSize="sm"
                  color={isActive ? activeColor : textColor}
                  fontWeight={isActive ? '600' : '500'}
                  textAlign="left"
                >
                  {route.name}
                </Text>
                <AccordionIcon color={textColor} />
              </Flex>
            </AccordionButton>
            <AccordionPanel pl="22px" pr="0" py="6px">
              <Box
                borderLeft="1px solid"
                borderColor={nestedBorderColor}
                ps="14px"
              >
                {createLinks(route.items, true)}
              </Box>
            </AccordionPanel>
          </AccordionItem>
        );
      } else if (
        route.layout === '/admin' ||
        route.layout === '/auth' ||
        route.layout === '/rtl'
      ) {
        const isActive = activeRoute(route.path.toLowerCase());

        if (!isOpen) {
          if (isNested || !route.icon) {
            return null;
          }
          return (
            <NavLink key={index} to={route.layout + route.path}>
              <Tooltip
                label={route.name}
                placement="right"
                hasArrow
                openDelay={200}
              >
                <Flex
                  align="center"
                  justify="center"
                  py="6px"
                  my="4px"
                >
                  {renderIconBox(route, isActive, 40)}
                </Flex>
              </Tooltip>
            </NavLink>
          );
        }

        if (isNested) {
          return (
            <NavLink key={index} to={route.layout + route.path}>
              <Flex
                align="center"
                px="10px"
                py="7px"
                my="2px"
                borderRadius="10px"
                bg={isActive ? itemActiveBg : 'transparent'}
                _hover={{ bg: isActive ? itemActiveBg : itemHoverBg }}
                transition="background 0.15s ease"
              >
                {route.icon && (
                  <Box
                    color={isActive ? activeIcon : undefined}
                    me="10px"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                  >
                    {route.icon}
                  </Box>
                )}
                <Text
                  fontSize="sm"
                  color={isActive ? activeColor : textColor}
                  fontWeight={isActive ? '600' : '500'}
                >
                  {route.name}
                </Text>
              </Flex>
            </NavLink>
          );
        }

        return (
          <AccordionItem border="none" key={index} mb="4px">
            <NavLink to={route.layout + route.path}>
              <AccordionButton
                p="0"
                _hover={{ bg: 'transparent' }}
                _focus={{ boxShadow: 'none' }}
                borderRadius="12px"
              >
                <Flex
                  align="center"
                  w="100%"
                  py="8px"
                  px="10px"
                  borderRadius="12px"
                  bg={isActive ? itemActiveBg : 'transparent'}
                  _hover={{ bg: isActive ? itemActiveBg : itemHoverBg }}
                  transition="background 0.15s ease"
                >
                  {route.icon && renderIconBox(route, isActive)}
                  <Text
                    ms={route.icon ? '12px' : '0'}
                    me="auto"
                    fontSize="sm"
                    color={
                      isActive
                        ? activeColor
                        : route.icon
                          ? textColor
                          : inactiveColor
                    }
                    fontWeight={isActive ? '600' : '500'}
                    textAlign="left"
                  >
                    {route.name}
                  </Text>
                </Flex>
              </AccordionButton>
            </NavLink>
          </AccordionItem>
        );
      }
    });
  };

  const activeIndex = routes.findIndex((route) => {
    if (route.path && activeRoute(route.path.toLowerCase())) return true;
    if (
      route.items &&
      route.items.some(
        (item) => item.path && activeRoute(item.path.toLowerCase()),
      )
    )
      return true;
    return false;
  });

  if (!isOpen) {
    return <Box>{createLinks(routes)}</Box>;
  }

  return (
    <Accordion
      allowToggle
      variant="unstyled"
      defaultIndex={activeIndex !== -1 ? [activeIndex] : []}
    >
      {createLinks(routes)}
    </Accordion>
  );
}

export default SidebarLinks;
