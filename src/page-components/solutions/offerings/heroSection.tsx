import {neueHaas} from '@/fonts';
import {Button} from '@/ui-lib/ui-lib.components/Button';
import {Box, Heading, Stack, Text} from '@chakra-ui/react';

const HeroSection = () => {
  return (
    <Box data-background="#2F3FAD" bg="#2F3FAD">
      <Stack
        className={neueHaas.className}
        minH={{base: '70vh', md: '85vh'}}
        px={{base: '1.5rem', md: '3rem', lg: '5rem'}}
        align="start"
        justify="center"
        bg="linear-gradient(180deg, rgba(0, 0, 0, 0.00) 0%, #000 100%)"
        gap="2.5rem"
      >
        <Heading
          fontWeight={400}
          className={neueHaas.className}
          fontSize={{base: '60px', md: '75px', lg: '100px', xl: '120px'}}
          letterSpacing="2.4px"
          maxW="63.75rem"
          lineHeight={{base: '5rem', lg: '7.5rem', xl: '8.5rem'}}
          color="#F5F5F5"
        >
          Full-stack solutions for your business
        </Heading>
        <Text
          lineHeight={{base: '23.94px', md: '33.6px'}}
          fontSize={{base: '1.125rem', xl: '1.5rem'}}
          fontWeight={500}
          maxW="53rem"
          color="#F5F5F5"
        >
          Get a 30 days free trial of a streamlined version of our service designed to meet the
          essential needs of property development companies. It focuses on core features that
          address the primary challenges , while minimizing investment.
        </Text>
        <Button color="#2F3FAD">View all solutions</Button>
      </Stack>
    </Box>
  );
};

export default HeroSection;
