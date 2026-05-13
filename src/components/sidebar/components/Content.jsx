import React, { useContext } from 'react';
import { Box, Flex } from '@chakra-ui/react';

import Brand from 'components/sidebar/components/Brand';
import Links from 'components/sidebar/components/Links';
import { SidebarContext } from 'contexts/SidebarContext';

function SidebarContent(props) {
  const { routes } = props;
  const { isOpen } = useContext(SidebarContext);

  return (
    <Flex
      direction="column"
      height="100%"
      pt="20px"
      pb="24px"
      px={isOpen ? '14px' : '8px'}
    >
      <Brand />
      <Box flex="1" mt="8px">
        <Links routes={routes} />
      </Box>
    </Flex>
  );
}

export default SidebarContent;
