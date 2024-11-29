import {Box, Flex, Heading, Stack, Text} from '@chakra-ui/react';
import BoxContainer from '../../../../components/BoxContainer';
import {useState} from 'react';

export const EntryLevel = () => {
  const [isOpen, setIsOpen] = useState(null);

  return (
    <Box
      bg="#1C1D21"
      rounded={{base: '0.5rem', xl: '.9375rem'}}
      w="full"
      fontFamily=""
      pt={{base: '1.5rem', xl: '3.67rem'}}
      px={{base: '.9375rem', xl: '2.8rem'}}
      pb={{base: '1.5rem', xl: '2.11rem'}}
    >
      <Stack gap={{base: '1.5rem', xl: '4.25rem'}} color="#FFF">
        <Flex direction={{base: 'column', xl: 'row'}} align="start" justify="space-between">
          <Heading
            color="#fff"
            fontFamily="Neue Haas Grotesk Display Pro"
            fontSize={{base: '2rem', lg: '3rem', xl: '4rem'}}
            fontWeight={400}
            lineHeight="4rem"
            maxW={{xl: '23.25rem'}}
          >
            Our minimum viable offering
          </Heading>
          <Stack gap="1rem" maxW={{base: 'full', xl: '25rem', '2xl': '30rem'}}>
            <Text color="#FFF">
              This is a simple & intuitive interface that focuses on delivering core functionality
              that addresses specific pain point for your clients with as few features as possible.
              This lets you test before investing in full-scale development.
            </Text>
            <Text textDecoration="underline" color="#FFF">
              Read docs
            </Text>
          </Stack>
        </Flex>
        <Flex direction={{base: 'column', xl: 'row'}} align="start" justify="space-between">
          <Stack w="full" gap="10px" maxW={{xl: '21.875em'}}>
            {OVERVIEWINFO?.map((item, idx) => {
              return (
                <BoxContainer
                  info={item}
                  key={idx}
                  isOpen={isOpen === idx}
                  onClick={() => setIsOpen(idx)}
                />
              );
            })}
          </Stack>
          <Stack gap="1rem" maxW={{base: 'full', xl: '25rem', '2xl': '30rem'}}>
            <Text color="#FFF">
              This is a simple & intuitive interface that focuses on delivering core functionality
              that addresses specific pain point for your clients with as few features as possible.
              This lets you test before investing in full-scale development.
            </Text>
            <Text textDecoration="underline" color="#FFF">
              Read docs
            </Text>
          </Stack>
        </Flex>
      </Stack>
    </Box>
  );
};

const OVERVIEWINFO = [
  {
    label: 'Portfolio',
    description:
      'This empowers your clients to effortlessly track all their investments & monitor payment progress  in a user-friendly way',
  },
  {
    label: 'Documents',
    description:
      'Empowering your clients with easy, fingertip access to all documents related to their purchase.',
  },
  {
    label: 'Schedule Inspection',
    description:
      'Clients can schedule inspections and share feedback on their experience, helping you identify opportunities for improvement.',
  },
  {
    label: 'Real Time Allocation',
    description: `Empowers buyers with clear visualization of their apartment's location, enhancing informed decision-making, especially for off-plan or remote purchases.`,
  },
];
