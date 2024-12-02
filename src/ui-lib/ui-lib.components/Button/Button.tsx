import {Button as ChakraButton} from '@chakra-ui/react';
import {ChakraProps} from '@chakra-ui/system';
import {ReactNode} from 'react';
import {FaArrowRightLong} from 'react-icons/fa6';

export const Button = ({children, ...rest}: {children: ReactNode}) => {
  return (
    <ChakraButton
      fontFamily="Neue Haas Grotesk Display Pro"
      bg={rest?.bg || '#FFF'}
      rounded="72px"
      py={{base: '20px', md: '12px'}}
      px={{base: '24px', md: '32px'}}
      h={{base: '66px', md: '88px'}}
      fontSize={{base: '20px', md: '24px'}}
      w="full"
      maxW={{base: 'full', md: '295px'}}
      justifyContent="space-between"
      color={rest?.color}
      fontWeight={500}
      {...rest}
    >
      {children}
      <FaArrowRightLong fill={rest?.color} />
    </ChakraButton>
  );
};
