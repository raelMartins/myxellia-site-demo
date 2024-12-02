import {Button2} from '@/ui-lib';
import {Box, Flex, Stack, Text, VStack} from '@chakra-ui/react';

export const ProptechSection = () => {
  return (
    <Stack gap={{base: `50px`}} p={{base: `60px 24px`, lg: `120px 64px`}}>
      <Flex
        align={`flex-start`}
        gap={{base: `12px`, lg: `150px`}}
        direction={{base: `column`, lg: `row`}}
      >
        <Box w={{base: `100%`, lg: `550px`}}>
          <Text
            fontSize={{base: `56px`}}
            fontWeight={{base: `500`}}
            lineHeight={{base: `100%`}}
            letterSpacing={{base: `-2.24px`}}
            maxW={{base: `438px`}}
          >
            Become a PropTech in Minutes
          </Text>
        </Box>
        <VStack align={`stretch`} gap={`50px`} maxW={{base: `550px`}}>
          <Text
            fontSize={{base: `16px`}}
            fontWeight={{base: `400`}}
            lineHeight={{base: `140%`}}
            letterSpacing={{base: `-0.016px`}}
          >
            From seamless onboarding and real-time access to your offerings, to easy payment
            tracking and timely push notifications when payments are due - your clients stay
            informed every step of the way.
          </Text>
          <Button2
            variation="primary"
            background={`transparent`}
            border={`1px solid`}
            color="#191919"
          >
            Explore our solutions
          </Button2>
        </VStack>
      </Flex>
    </Stack>
  );
};
