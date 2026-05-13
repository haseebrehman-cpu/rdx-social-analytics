import { createContext, useContext } from 'react';
import { useDisclosure } from '@chakra-ui/react';
import PropTypes from 'prop-types';

export const SidebarContext = createContext({
  isOpen: true,
  onOpen: () => {},
  onClose: () => {},
  onToggle: () => {},
});

export function SidebarProvider({ children, defaultIsOpen = true }) {
  const disclosure = useDisclosure({ defaultIsOpen });

  return (
    <SidebarContext.Provider value={disclosure}>
      {children}
    </SidebarContext.Provider>
  );
}

SidebarProvider.propTypes = {
  children: PropTypes.node,
  defaultIsOpen: PropTypes.bool,
};

export function useSidebar() {
  return useContext(SidebarContext);
}
