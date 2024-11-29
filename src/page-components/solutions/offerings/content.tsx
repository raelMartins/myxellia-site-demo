import { Box, Flex, Stack, Text } from "@chakra-ui/react";
import { EntryLevel } from "./screens";

export const OfferingsContent = () => {
    return (
      <Box pt="3.25rem" fontFamily="Neue Haas Grotesk Display Pro">
        <Flex px="2.5rem" gap='2.5rem'>
          <Stack display={{base: 'none', xl: 'flex'}} gap="1.56rem" minW='17.5rem'>
            <Text color="#757575" fontSize="1rem" fontWeight={500}>
              Entry level
            </Text>
            <Text color="#757575" fontSize="1rem" fontWeight={500}>
              Fractional ownership
            </Text>
            <Text color="#757575" fontSize="1rem" fontWeight={500}>
              Fractional Alternative
            </Text>
            <Text color="#757575" fontSize="1rem" fontWeight={500}>
              Fintech as a service
            </Text>
            <Text color="#757575" fontSize="1rem" fontWeight={500}>
              Additional solutions
            </Text>
            <Text color="#757575" fontSize="1rem" fontWeight={500}>
              FAQs
            </Text>
          </Stack>
          <Stack w='full'>
              <EntryLevel/>
          </Stack>
        </Flex>
      </Box>
    );
  };
  