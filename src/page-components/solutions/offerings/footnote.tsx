import {neueHaas} from '@/fonts';
import {Button} from '@/ui-lib/ui-lib.components/Button';
import {Heading, Stack, Text} from '@chakra-ui/react';

export const FootNote = () => {
  return (
    <Stack
      py="4rem"
      px={{base: '1.5rem', md: '2.5rem', xl: '4rem'}}
      className={neueHaas.className}
      gap="1.75rem"
      color="#FFF"
      position="relative"
      minH="34.5rem"
    >
      <Heading
        className={neueHaas.className}
        fontWeight={500}
        fontSize={{base: '2.25rem', md: '4rem', xl: '6.25rem'}}
        lineHeight={{base: '2.25rem', md: '4rem', xl: '6.25rem'}}
        letterSpacing="2px"
        maxW="880px"
      >
        Test the waters with no commitment
      </Heading>
      <Text fontWeight={500} letterSpacing="0.8px" lineHeight="1.5rem" maxW="744px">
        Becoming a tech first business can be intimidating for any business, which is why we have
        made it easy to get started with guidance, customizable solutions, and no financial
        commitments.
      </Text>
      <Button
        noArrow
        w={{base: 'full', lg: '210px'}}
        textAlign="center"
        justifyContent="center"
        h={{base: '60px', lg: '64px'}}
      >
        Get started
      </Button>
    </Stack>
  );
};
