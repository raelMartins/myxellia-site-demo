import {ButtonProps, Button as ChakraButton, HStack, Text} from '@chakra-ui/react';
import {FaArrowRightLong} from 'react-icons/fa6';

interface CustomButtonProps extends ButtonProps {
  variation?: 'primary' | 'secondary';
  showArrow?: boolean;
}

export const Button2: React.FC<CustomButtonProps> = ({variation, showArrow = true, ...rest}) => {
  const default_button_styles = {
    fontFamily: `Neue Haas Grotesk Display Pro`,
    fontSize: {base: `20px`, lg: `24px`},
    fontWeight: `500`,
    lineHeight: {base: `100%`, lg: `166.667%`},
    width: {base: `100%`, lg: `max-content`},
    height: `max-content`,
    transition: 'ease-in-out 0.3s',
    borderRadius: {base: `39px`, lg: `72px`},
    _hover: {opacity: rest.isDisabled ? 'auto' : '1'},
    _active: {opacity: rest.isDisabled ? 'auto' : '1'},
    _focus: {opacity: rest.isDisabled ? 'auto' : '1'}
  };

  switch (variation) {
    case 'primary':
      return (
        <ChakraButton
          {...default_button_styles}
          background="#191919"
          color="#ffffff"
          p={{base: `20px 24px`, lg: `24px 32px`}}
          {...rest}
        >
          <HStack gap={{base: `24px`}} justify={`space-between`} w={`100%`}>
            <Text>{rest.children}</Text>
            {showArrow && <FaArrowRightLong />}
          </HStack>
        </ChakraButton>
      );
    case 'secondary':
      return (
        <ChakraButton
          {...default_button_styles}
          background={`#ffffff`}
          color="#191919"
          p={{base: `20px 24px`, lg: `12px 48px`}}
          {...rest}
        >
          {rest.children}
        </ChakraButton>
      );
    default:
      return (
        <ChakraButton {...default_button_styles} p={{base: `20px 24px`, lg: `12px 48px`}} {...rest}>
          {rest.children}
        </ChakraButton>
      );
  }
};
