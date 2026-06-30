// Chakra Imports
import {
  Box,
  Flex,
  IconButton,
  Icon,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import PropTypes from 'prop-types';
import { useState, useEffect, useContext, useCallback } from 'react';
import { IoMenuOutline } from 'react-icons/io5';
import AdminNavbarLinks from 'components/navbar/NavbarLinksAdmin';
import { SidebarContext } from 'contexts/SidebarContext';

export default function AdminNavbar(props) {
  const [scrolled, setScrolled] = useState(false);

  const changeNavbar = useCallback(() => {
    setScrolled(window.scrollY > 1);
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', changeNavbar);

    return () => {
      window.removeEventListener('scroll', changeNavbar);
    };
  }, [changeNavbar]);

  const { secondary, message } = props;
  const { isOpen, onToggle } = useContext(SidebarContext);

  // Here are all the props that may change depending on navbar's type or state.(secondary, variant, scrolled)
  // let mainText = useColorModeValue('navy.700', 'white');
  let menuIconColor = useColorModeValue('gray.700', 'white');
  let navbarPosition = 'fixed';
  let navbarFilter = 'none';
  let navbarBackdrop = 'blur(20px)';
  let navbarShadow = 'none';
  let navbarBg = useColorModeValue(
    'rgba(244, 247, 254, 0.2)',
    'rgba(11,20,55,0.5)',
  );
  let navbarBorder = 'transparent';
  let secondaryMargin = '0px';
  let paddingX = '15px';
  let gap = '0px';

  return (
    <Box
      position={navbarPosition}
      boxShadow={navbarShadow}
      bg={navbarBg}
      borderColor={navbarBorder}
      filter={navbarFilter}
      backdropFilter={navbarBackdrop}
      backgroundPosition="center"
      backgroundSize="cover"
      borderRadius="16px"
      borderWidth="1.5px"
      borderStyle="solid"
      transitionDelay="0s, 0s, 0s, 0s"
      transitionDuration=" 0.25s, 0.25s, 0.25s, 0s"
      transition-property="box-shadow, background-color, filter, border"
      transitionTimingFunction="linear, linear, linear, linear"
      alignItems={{ base: 'stretch', md: 'center' }}
      display={secondary ? 'block' : 'flex'}
      minH="75px"
      lineHeight="25.6px"
      mt={secondaryMargin}
      zIndex="100"
      pb="8px"
      pt="8px"
      px={{ base: paddingX, md: '20px' }}
      top={{ base: '12px', md: '16px', lg: '20px' }}
      left={{
        base: '12px',
        md: isOpen ? '24px' : '12px',
        xl: isOpen ? '320px' : '80px',
      }}
      right={{ base: '12px', md: '12px' }}
    >
      <Flex
        w="100%"
        flexDirection={{
          base: 'column',
          md: 'row',
        }}
        alignItems={{ base: 'flex-start', md: 'center' }}
        gap={{ base: '8px', md: '0' }}
        mb={gap}
      >
        <Flex alignItems="center" mb={{ base: '8px', md: '0px' }}>
          <IconButton
            aria-label="Toggle sidebar"
            variant="ghost"
            size="lg"
            onClick={onToggle}
            icon={
              <Icon
                as={IoMenuOutline}
                w="30px"
                h="30px"
                color={menuIconColor}
              />
            }
            _focus={{ boxShadow: '10px 10px 10px 10px rgba(0, 0, 0, 0.1)' }}
            borderRadius="10px"
          />
          {/* <Breadcrumb>
            <BreadcrumbItem color={secondaryText} fontSize='md'>
              <BreadcrumbLink href='#' color={secondaryText}>
                Pages
              </BreadcrumbLink>
            </BreadcrumbItem>

            <BreadcrumbItem color={secondaryText} fontSize='md'>
              <BreadcrumbLink href='#' color={secondaryText}>
                {brandText}
              </BreadcrumbLink>
            </BreadcrumbItem>
          </Breadcrumb> */}
          {/* Here we create navbar brand, based on route name */}
          {/* <Link
						color={mainText}
						href='#'
						bg='inherit'
						borderRadius='inherit'
						fontWeight='bold'
						fontSize='34px'
						_hover={{ color: { mainText } }}
						_active={{
							bg: 'inherit',
							transform: 'none',
							borderColor: 'transparent'
						}}
						_focus={{
							boxShadow: 'none'
						}}>
						{brandText}
					</Link> */}
        </Flex>
        <Box ms={{ base: '0', md: 'auto' }} w={{ base: '100%', md: 'auto' }}>
          <AdminNavbarLinks
            onOpen={props.onOpen}
            logoText={props.logoText}
            secondary={props.secondary}
            fixed={props.fixed}
            scrolled={scrolled}
          />
        </Box>
      </Flex>
      {secondary ? <Text color="white">{message}</Text> : null}
    </Box>
  );
}

AdminNavbar.propTypes = {
  brandText: PropTypes.string,
  variant: PropTypes.string,
  secondary: PropTypes.bool,
  fixed: PropTypes.bool,
  onOpen: PropTypes.func,
};
