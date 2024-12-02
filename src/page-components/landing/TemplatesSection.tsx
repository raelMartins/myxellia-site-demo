import {Stack, Text, VStack} from '@chakra-ui/react';

export const TemplatesSection = () => {
  return (
    <Stack
      gap={{base: `50px`, lg: `100px`}}
      p={{base: `60px 24px`, lg: `120px 64px`}}
      background={`#000000`}
      color={`#ffffff`}
    >
      <VStack align={`stretch`} gap={{base: `24px`, lg: `120px`}}>
        <Text
          fontSize={{base: `36px`, lg: `160px`}}
          fontWeight={{base: `500`, lg: `400`}}
          lineHeight={{base: `133%`, lg: `93%`}}
          maxW={{base: `829px`}}
          letterSpacing={{base: `0.72px`, lg: `auto`}}
        >
          Connect in a whole new way
        </Text>

        <Text
          fontSize={{base: `18px`, lg: `56px`}}
          fontWeight={{base: `400`}}
          lineHeight={{base: `100%`}}
          maxW={{base: `100%`, lg: `543px`}}
        >
          Templates that set you up for success{' '}
        </Text>
      </VStack>
    </Stack>
  );
};
