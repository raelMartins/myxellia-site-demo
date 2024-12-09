import {Button2} from '@/ui-lib';
import {Grid, Stack, Text} from '@chakra-ui/react';

export const FeaturesSection = () => {
  return (
    <Stack
      gap={{base: `50px`}}
      p={{base: `100px 24px `, lg: `193px 64px`}}
      background={`#2F3FAD`}
      color={`#FFFFFF`}
      data-background="#2F3FAD"
    >
      <Text
        fontSize={{base: `40px`, lg: `64px`}}
        fontWeight={{base: `500`}}
        lineHeight={{base: `120%`}}
        letterSpacing={{base: `0.8px`, lg: `1.28px`}}
        maxW={`600px`}
      >
        The one platform, behind everything
      </Text>
      <Grid
        templateColumns={{base: `1fr`, md: `1fr 1fr`, lg: `1fr 1fr 1fr`}}
        gap={{base: `32px`, lg: `63px`}}
      >
        <Stack pt={`17px`} borderTop={`1px solid`} gap={`8px`}>
          <Text fontSize={`20px`} fontWeight={`600`} lineHeight={` 200%`}>
            Build an application
          </Text>
          <Text
            fontSize={{base: `18px`, lg: `16px`}}
            fontWeight={{base: `500`}}
            lineHeight={{base: `160%`}} /* 28.8px */
            letterSpacing={{base: `1.08px`, lg: `0.96px`}}
          >
            Design a mobile or web app that covers your clients’ entire journey without writing a
            single line of code.
          </Text>
        </Stack>
        <Stack pt={`17px`} borderTop={`1px solid`} gap={`8px`}>
          <Text fontSize={`20px`} fontWeight={`600`} lineHeight={` 200%`}>
            Manage your business
          </Text>
          <Text
            fontSize={{base: `18px`, lg: `16px`}}
            fontWeight={{base: `500`}}
            lineHeight={{base: `160%`}} /* 28.8px */
            letterSpacing={{base: `1.08px`, lg: `0.96px`}}
          >
            Streamline your day-to-day with built-in business solutions, tailored to your needs.
          </Text>
        </Stack>
        <Stack pt={`17px`} borderTop={`1px solid`} gap={`8px`}>
          <Text fontSize={`20px`} fontWeight={`600`} lineHeight={` 200%`}>
            Sell smarter, not harder
          </Text>
          <Text
            fontSize={{base: `18px`, lg: `16px`}}
            fontWeight={{base: `500`}}
            lineHeight={{base: `160%`}} /* 28.8px */
            letterSpacing={{base: `1.08px`, lg: `0.96px`}}
          >
            Penetrate a new market and establish your business for exponential growth with features
            like fractional ownership.
          </Text>
        </Stack>
      </Grid>
      <Button2
        variation={`secondary`}
        bg={{base: `transparent`, lg: `#FFFFFF`}}
        color={{base: `#ffffff`, lg: `#191919`}}
        border={{base: `1px solid`, lg: `none`}}
      >
        Get Started
      </Button2>
    </Stack>
  );
};
