import { useContext } from 'react';
import { Box, Flex, Text, useColorModeValue } from '@chakra-ui/react';

import Brand from 'components/sidebar/components/Brand';
import Links from 'components/sidebar/components/Links';
import { SidebarContext } from 'contexts/SidebarContext';

function SidebarContent(props) {
  const { routes } = props;
  const { isOpen } = useContext(SidebarContext);
  const tagColor = useColorModeValue('secondaryGray.600', 'whiteAlpha.600');
  const tagDividerColor = useColorModeValue(
    'rgba(135, 140, 189, 0.18)',
    'whiteAlpha.200',
  );

  return (
    <Flex
      direction="column"
      minH="100%"
      pt="20px"
      pb="20px"
      px={isOpen ? '14px' : '8px'}
    >
      <Brand />
      <Box flex="1" mt="8px">
        <Links routes={routes} />
      </Box>

      <Box mt="16px" pt="12px" borderTop="1px solid" borderColor={tagDividerColor}>
        {isOpen ? (
          <Text
            fontSize="xs"
            color={tagColor}
            textAlign="center"
            letterSpacing="0.02em"
          >
          &copy;  A Solution By{' '}
            <Text as="span" fontWeight="700">
              AI Team
            </Text>
          </Text>
        ) : (
          <Text
            fontSize="2xs"
            color={tagColor}
            textAlign="center"
            fontWeight="700"
            letterSpacing="0.05em"
          >
            AI
          </Text>
        )}
      </Box>
    </Flex>
  );
}

export default SidebarContent;
