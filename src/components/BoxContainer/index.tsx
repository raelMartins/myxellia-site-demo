import { Box, BoxProps, Flex, Image, Text } from '@chakra-ui/react';
import { motion } from 'framer-motion';

const MotionBox = motion<BoxProps>(Box);

interface BoxContainerProps {
  isOpen: boolean;
  info?: {
    label: string;
    description?: string;
  };
  [key: string]: any;
}

const BoxContainer: React.FC<BoxContainerProps> = ({ isOpen, info, ...rest }) => {
  return (
    <MotionBox
      initial={{ height: '3.33rem' }}
      animate={{ height: isOpen ? '13.23rem' : '3.33rem' }}
      transition={{ type: 'spring', stiffness: 250, damping: 30 }}
      cursor={isOpen ? 'none' : 'pointer'}
      bg={isOpen ? '#CDC4FF' : '#323236' }
      rounded="9px"
      p="1.07rem 1.125rem"
      {...rest}
    >
      <Box w="full">
        <Flex w="full" justify="space-between" pb={isOpen ? '.95rem' : 0}>
          <Text
            fontWeight={500}
            fontSize={isOpen ? '1.1875rem' : '.9375rem'}
            color={isOpen ? '#000' : '#FFF'}
          >
            {info?.label}
          </Text>
          {!isOpen && <Image src="/plus-icon.svg" alt={info?.label} />}
        </Flex>
        {isOpen ? <Text pr="2.9rem">{info?.description}</Text> : null}
      </Box>
    </MotionBox>
  );
};

export default BoxContainer;
