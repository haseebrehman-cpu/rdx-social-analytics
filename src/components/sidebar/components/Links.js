/* eslint-disable */
import React from "react";
import { NavLink, useLocation } from "react-router-dom";
// chakra imports
import {
  Box,
  Flex,
  HStack,
  Text,
  useColorModeValue,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from "@chakra-ui/react";

export function SidebarLinks(props) {
  //   Chakra color mode
  let location = useLocation();
  let activeColor = useColorModeValue("gray.700", "white");
  let inactiveColor = useColorModeValue(
    "secondaryGray.600",
    "secondaryGray.600"
  );
  let activeIcon = useColorModeValue("brand.500", "white");
  let textColor = useColorModeValue("secondaryGray.500", "white");
  let brandColor = useColorModeValue("brand.500", "brand.400");

  const { routes } = props;

  // verifies if routeName is the one active (in browser input)
  const activeRoute = (routeName) => {
    return location.pathname.includes(routeName);
  };

  // this function creates the links from the secondary accordions (for example auth -> sign-in -> default)
  const createLinks = (routes, isNested = false) => {
    return routes.map((route, index) => {
      if (route.category) {
        return (
          <React.Fragment key={index}>
            <Text
              fontSize={"md"}
              color={activeColor}
              fontWeight='bold'
              mx='auto'
              ps={{
                sm: "10px",
                xl: "16px",
              }}
              pt='18px'
              pb='12px'>
              {route.name}
            </Text>
            {createLinks(route.items, true)}
          </React.Fragment>
        );
      } else if (route.items && !isNested) {
        return (
          <AccordionItem border='none' key={index}>
            <AccordionButton
              display='flex'
              alignItems='center'
              justifyContent='center'
              _hover={{ bg: "none" }}
              _focus={{ boxShadow: "none" }}
              borderRadius='8px'
              w='100%'
              py='5px'
              ps='10px'>
              <HStack
                spacing={
                  activeRoute(route.path.toLowerCase()) ? "22px" : "26px"
                }
                w='100%'>
                <Flex w='100%' alignItems='center' justifyContent='center'>
                  <Box
                    color={
                      activeRoute(route.path.toLowerCase())
                        ? activeIcon
                        : textColor
                    }
                    me='18px'>
                    {route.icon}
                  </Box>
                  <Text
                    me='auto'
                    color={
                      activeRoute(route.path.toLowerCase())
                        ? activeColor
                        : textColor
                    }
                    fontWeight={
                      activeRoute(route.path.toLowerCase())
                        ? "bold"
                        : "normal"
                    }>
                    {route.name}
                  </Text>
                </Flex>
                <AccordionIcon color={textColor} />
              </HStack>
            </AccordionButton>
            <AccordionPanel ps='20px' pb='10px'>
              <Box borderLeft='1px solid' borderColor={useColorModeValue("secondaryGray.400", "whiteAlpha.300")} ps='10px'>
                {createLinks(route.items, true)}
              </Box>
            </AccordionPanel>
          </AccordionItem>
        );
      } else if (
        route.layout === "/admin" ||
        route.layout === "/auth" ||
        route.layout === "/rtl"
      ) {
        const linkContent = (
          <HStack
            spacing={
              activeRoute(route.path.toLowerCase()) ? "22px" : "26px"
            }
            py='5px'
            ps='10px'
            w="100%">
            <Flex w='100%' alignItems='center' justifyContent='center'>
              {route.icon && (
                <Box
                  color={
                    activeRoute(route.path.toLowerCase())
                      ? activeIcon
                      : textColor
                  }
                  me='18px'>
                  {route.icon}
                </Box>
              )}
              <Text
                me='auto'
                color={
                  activeRoute(route.path.toLowerCase())
                    ? activeColor
                    : (route.icon ? textColor : inactiveColor)
                }
                fontWeight={
                  activeRoute(route.path.toLowerCase()) ? "bold" : "normal"
                }>
                {route.name}
              </Text>
            </Flex>
            {!isNested && (
              <Box
                h='36px'
                w='4px'
                bg={
                  activeRoute(route.path.toLowerCase())
                    ? brandColor
                    : "transparent"
                }
                borderRadius='5px'
              />
            )}
          </HStack>
        );

        if (isNested) {
          return (
            <NavLink key={index} to={route.layout + route.path}>
              {linkContent}
            </NavLink>
          );
        }

        return (
          <AccordionItem border='none' key={index}>
            <NavLink to={route.layout + route.path}>
              <AccordionButton
                p='0px'
                _hover={{ bg: "none" }}
                _focus={{ boxShadow: "none" }}>
                {linkContent}
              </AccordionButton>
            </NavLink>
          </AccordionItem>
        );
      }
    });
  };
  const activeIndex = routes.findIndex(route => {
    if (route.path && activeRoute(route.path.toLowerCase())) return true;
    if (route.items && route.items.some(item => item.path && activeRoute(item.path.toLowerCase()))) return true;
    return false;
  });

  //  BRAND
  return (
    <Accordion allowToggle variant="unstyled" defaultIndex={activeIndex !== -1 ? [activeIndex] : []}>
      {createLinks(routes)}
    </Accordion>
  );
}

export default SidebarLinks;
