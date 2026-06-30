import { useContext } from 'react';

import { Box, Flex, useColorModeValue } from '@chakra-ui/react';

import { SidebarContext } from 'contexts/SidebarContext';
import logoDark from 'assets/img/Dark.svg';
import logoLight from 'assets/img/Light.svg';
import miniLogo from 'assets/img/minilogo.svg';

export function SidebarBrand() {
  const { isOpen } = useContext(SidebarContext);
  const dividerColor = useColorModeValue(
    'rgba(135, 140, 189, 0.18)',
    'whiteAlpha.200',
  );
  const logo = useColorModeValue(logoLight, logoDark);

  return (
    <Flex align="center" direction="column" px={isOpen ? '12px' : '0'}>
      {isOpen ? (
        <Flex align="center" w="100%" mb="28px" justify="center">
          <img src={logo} alt="RDX Social" width={110} height={110} />
        </Flex>
      ) : (
        <img src={miniLogo} alt="RDX Social" width={100} height={100} style={{ padding: '10px' }}/>
      )}
      <Box w="100%" h="1px" bg={dividerColor} mb="16px" />
    </Flex>
  );
}

export default SidebarBrand;
