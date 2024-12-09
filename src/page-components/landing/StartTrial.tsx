import {Button2} from '@/ui-lib';
import {Stack, Text} from '@chakra-ui/react';

export const StartTrial = () => {
  return (
    <Stack
      gap={{base: `24px`, lg: `22px`}}
      p={{base: `60px 24px `, lg: `120px 64px 44px`}}
      background={`#000000`}
      color={`#FFFFFF`}
      data-background="#000000"
    >
      <Text
        fontSize={{base: `36px`, lg: `100px`}}
        fontWeight={{base: `500`, lg: `400`}}
        lineHeight={{base: `133%`, lg: `93%`}}
        letterSpacing={{base: `0.72px`, lg: `-5px`}}
        maxW={`800px`}
        mb={{lg: `18px`}}
      >
        Start your free Application trial today
      </Text>
      <Button2 variation="secondary">Get Started</Button2>
      <Text
        fontSize={{base: `16px`}}
        fontWeight={{base: `400`}}
        lineHeight={{base: `140%`}}
        letterSpacing={{base: `-0.016px`}}
      >
        No credit card required. <br />
        Cancel anytime.
      </Text>
    </Stack>
  );
};
