import {Button2} from '@/ui-lib';
import {Box, Flex, Stack, Text} from '@chakra-ui/react';

export const HeroSection = () => {
  return (
    <Flex
      px={{base: `24px`, lg: `64px`}}
      pt={{base: ` 38px`, lg: `93px`}}
      bg={{base: `#F0F0F0`, lg: `#FFFFFF`}}
      direction={{base: `column`, lg: `row`}}
    >
      <Stack flex={`1`} gap={{base: `24px`, lg: `20px`}}>
        <Text
          color={{base: `#424242)`}}
          fontSize={{base: `48px`, lg: `72px`}}
          fontWeight={{base: `400`}}
          lineHeight={{base: `115%`}}
          letterSpacing={{base: `1.44px`}}
          textTransform={{base: `uppercase`}}
        >
          <Box as={`span`} fontWeight={`700`}>
            CREATE AN APPLICATION
          </Box>{' '}
          FOR YOUR REAL ESTATE COMPANY
        </Text>
        <Text
          color={{base: `#424242`}}
          fontSize={{base: `24px`}}
          fontWeight={{base: `500`}}
          lineHeight={{base: `140%`}}
        >
          Try for free as long as you’re a property development company.
        </Text>
        <Box mt={{base: `0px`, lg: `24px`}}>
          <Button2 variation="primary">Get started for free</Button2>
        </Box>
        <Text
          color={{base: `#525252`}}
          fontSize={{base: `16px`}}
          fontWeight={{base: `500`}}
          lineHeight={{base: `200%`}} /* 200% */
        >
          No credit card required.
        </Text>
      </Stack>
      <Box flex={`1.2`}></Box>
    </Flex>
  );
};
