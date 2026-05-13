import React, { useContext } from 'react';

import { Box, Flex, Text, useColorModeValue } from '@chakra-ui/react';

import { RDXSocialLogo } from 'components/icons/Icons';
import { SidebarContext } from 'contexts/SidebarContext';

export function SidebarBrand() {
  const { isOpen } = useContext(SidebarContext);
  const logoColor = useColorModeValue('navy.700', 'white');
  const dividerColor = useColorModeValue(
    'rgba(135, 140, 189, 0.18)',
    'whiteAlpha.200',
  );

  return (
    <Flex align="center" direction="column" px={isOpen ? '12px' : '0'}>
      {isOpen ? (
        <Flex align="center" w="100%" my="28px">
          <RDXSocialLogo h="26px" w="170px" color={logoColor} />
        </Flex>
      ) : (
        <Flex
          align="center"
          justify="center"
          w="44px"
          h="44px"
          my="24px"
          borderRadius="14px"
          bgGradient="linear(135deg, brand.400, brand.600)"
          color="white"
          fontWeight="700"
          fontSize="lg"
          boxShadow="0 8px 20px rgba(79, 209, 197, 0.35)"
        >
          <Text letterSpacing="0.5px">R</Text>
        </Flex>
      )}
      <Box w="100%" h="1px" bg={dividerColor} mb="16px" />
    </Flex>
  );
}

export default SidebarBrand;
