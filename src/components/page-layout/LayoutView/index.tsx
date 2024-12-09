import {Stack, StackProps} from '@chakra-ui/react';
import {ReactNode} from 'react';
import {Navbar} from '../Navbar';
import Footer from '../Footer';
import { neueHaas } from '@/fonts';

interface LayoutViewProps extends StackProps {
  children: ReactNode;
  dark?: boolean;
}

const LayoutView: React.FC<LayoutViewProps> = ({children, ...rest}) => {
  return (
    <Stack gap={0} minH="100vh" className={neueHaas.className} overflow='hidden'>
      <Navbar />
      <Stack flex={1} h="full" {...rest}>
        {children}
      </Stack>
      <Footer />
    </Stack>
  );
};

export default LayoutView;
