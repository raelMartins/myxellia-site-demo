import {Box, Flex, Stack, Text} from '@chakra-ui/react';
import {
  EntryLevel,
  FintechService,
  FractionalJunior,
  FractionalOwners,
  SecondaryMarket
} from './screens';
import {useRef} from 'react';
import useIsInViewport from '@/ui-lib/ui-lib.hooks/useInViewport';
import {neueHaas} from '@/fonts';

export const OfferingsContent = () => {
  const entryRef = useRef<HTMLDivElement | null>(null);
  const fractionRef = useRef<HTMLDivElement | null>(null);
  const juniorRef = useRef<HTMLDivElement | null>(null);
  const finRef = useRef<HTMLDivElement | null>(null);

  const entryCheck = useIsInViewport(entryRef);
  const fractionCheck = useIsInViewport(fractionRef);
  const juniorCheck = useIsInViewport(juniorRef);
  const finCheck = useIsInViewport(finRef);

  return (
    <Box pt="3.25rem" className={neueHaas.className}>
      <Flex px={{base: '.75rem', lg: '2.5rem'}} gap="2.5rem">
        <Stack
          display={{base: 'none', lg: 'flex'}}
          gap="1.56rem"
          minW="22.5%"
          position="sticky"
          maxH="max-content"
          top="1rem"
        >
          <Text
            color={entryCheck ? '#FFF' : '#757575'}
            fontSize="1rem"
            fontWeight={entryCheck ? 600 : 500}
            cursor="pointer"
            onClick={() => entryRef?.current?.scrollIntoView({behavior: 'smooth'})}
          >
            Entry level
          </Text>
          <Text
            color={fractionCheck ? '#FFF' : '#757575'}
            fontSize="1rem"
            fontWeight={fractionCheck ? 600 : 500}
            cursor="pointer"
            onClick={() => fractionRef?.current?.scrollIntoView({behavior: 'smooth'})}
          >
            Fractional ownership
          </Text>
          <Text
            color={juniorCheck ? '#FFF' : '#757575'}
            fontSize="1rem"
            fontWeight={juniorCheck ? 600 : 500}
            cursor="pointer"
            onClick={() => juniorRef?.current?.scrollIntoView({behavior: 'smooth'})}
          >
            Fractional Alternative
          </Text>
          <Text
            color={finCheck ? '#FFF' : '#757575'}
            fontSize="1rem"
            fontWeight={finCheck ? 600 : 500}
            cursor="pointer"
            onClick={() => finRef?.current?.scrollIntoView({behavior: 'smooth'})}
          >
            Fintech as a service
          </Text>
          <Text color="#757575" fontSize="1rem" fontWeight={500}>
            Additional solutions
          </Text>
          <Text color="#757575" fontSize="1rem" fontWeight={500}>
            FAQs
          </Text>
        </Stack>
        <Stack gap="2.5rem" w="full" pb="2.5rem">
          <Box w="full" ref={entryRef}>
            <EntryLevel />
          </Box>
          <Box w="full" ref={fractionRef}>
            <FractionalOwners />
          </Box>
          <Box w="full" ref={juniorRef}>
            <FractionalJunior />
          </Box>
          <Box>
            <SecondaryMarket />
          </Box>
          <Box w="full" ref={finRef}>
            <FintechService />
          </Box>
        </Stack>
      </Flex>
    </Box>
  );
};
