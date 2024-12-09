import {neueHaas} from '@/fonts';
import {ButtonProps, Button as ChakraButton} from '@chakra-ui/react';
import {ReactNode} from 'react';
import {FaArrowRightLong} from 'react-icons/fa6';

interface customProps extends ButtonProps {
  children: ReactNode;
  color?: string;
  [key: string]: any;
}

export const Button = ({children, color, ...rest}: customProps) => {
  return (
    <ChakraButton
      className={neueHaas.className}
      bg={rest?.bg || '#FFF'}
      rounded="72px"
      py={{base: '20px', md: '12px'}}
      px={{base: '24px', md: '32px'}}
      h={{base: '66px', md: '88px'}}
      fontSize={{base: '20px', md: '24px'}}
      w="full"
      maxW={{base: 'full', md: '295px'}}
      justifyContent="space-between"
      color={color}
      fontWeight={500}
      {...rest}
    >
      {children}
      {rest?.noArrow ? null : <FaArrowRightLong fill={color || '#2F3FAD'} />}
    </ChakraButton>
  );
};
