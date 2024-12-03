import {Center, Flex, Grid, Stack, Text, VStack} from '@chakra-ui/react';
import Image from 'next/image';

export const IdeasAndInsights = () => {
  return (
    <Flex
      direction={{base: `column`, lg: `row`}}
      gap={{base: `24px`, lg: `70px`}}
      p={{base: `60px 24px `, lg: `90px 90px`}}
      background={`#2F3FAD`}
      color={`#FFFFFF`}
      align={`flex-start`}
    >
      <Text
        maxW={`437px`}
        minW={{base: `auto`, lg: `437px`}}
        fontSize={{base: `36px`, lg: `62.5px`}}
        fontWeight={{base: `500`}}
        lineHeight={{base: `133%`}}
        letterSpacing={{base: `0.72px`, lg: `auto`}}
      >
        Our ideas and insights
      </Text>
      <Grid templateColumns={{base: `1fr`, md: `1fr 1fr`}} gap={{base: `32px`, md: `25px 10px `}}>
        <Stack
          borderRadius={{base: `7.5px`}}
          borderTop={{base: `0.7px solid`}}
          borderColor={{base: `#1E2C31`}}
          background={{base: `radial-gradient(50% 50% at 50% 50%, #3344BA 0%, #27348F 100%)`}}
          overflow={`hidden`}
        >
          <Center aspectRatio={`386.5 / 290`} position="relative" transition={`.5s`}>
            <Image
              src={`/temp_local_images/ideas_insights_1.jpg`}
              alt="The Genesis"
              fill
              style={{objectFit: `cover`}}
            />
          </Center>
          <VStack align={`stretch`} p={`18px 20px`} gap={`8px`}>
            <Text
              fontSize={{base: `20px`, md: `13px`}}
              fontWeight={{base: `500`, md: `600`}}
              lineHeight={{base: `120%`, md: `140%`}}
              letterSpacing={{base: `0.186px`}}
            >
              The Genesis
            </Text>
            <Text
              fontSize={{base: `12px`, md: `11px`}}
              fontWeight={{base: `500`}}
              lineHeight={{base: `125%`}}
              letterSpacing={{base: `0.447px`}}
            >
              See the big picture more clearly. Access dozens of metrics across every key aspect of
              your business.
            </Text>
          </VStack>
        </Stack>
        <Stack
          borderRadius={{base: `7.5px`}}
          borderTop={{base: `0.7px solid`}}
          borderColor={{base: `#1E2C31`}}
          background={{base: `radial-gradient(50% 50% at 50% 50%, #3344BA 0%, #27348F 100%)`}}
          overflow={`hidden`}
        >
          <Center aspectRatio={`386.5 / 290`} position="relative" transition={`.5s`}>
            <Image
              src={`/temp_local_images/ideas_insights_2.jpg`}
              alt="Why Myxellia instead of building"
              fill
              style={{objectFit: `cover`}}
            />
          </Center>
          <VStack align={`stretch`} p={`18px 20px`} gap={`8px`}>
            <Text
              fontSize={{base: `20px`, md: `13px`}}
              fontWeight={{base: `500`, md: `600`}}
              lineHeight={{base: `120%`, md: `140%`}}
              letterSpacing={{base: `0.186px`}}
            >
              Why Myxellia instead of building
            </Text>
            <Text
              fontSize={{base: `12px`, md: `11px`}}
              fontWeight={{base: `500`}}
              lineHeight={{base: `125%`}}
              letterSpacing={{base: `0.447px`}}
            >
              Capture leads, convert them into clients and streamline your workflow with a complete
              CRM solution built right into your site.
            </Text>
          </VStack>
        </Stack>
        <Stack
          borderRadius={{base: `7.5px`}}
          borderTop={{base: `0.7px solid`}}
          borderColor={{base: `#1E2C31`}}
          background={{base: `radial-gradient(50% 50% at 50% 50%, #3344BA 0%, #27348F 100%)`}}
          overflow={`hidden`}
        >
          <Center aspectRatio={`386.5 / 290`} position="relative" transition={`.5s`}>
            <Image
              src={`/temp_local_images/ideas_insights_3.jpg`}
              alt="automated payment plans"
              fill
              style={{objectFit: `cover`}}
            />
          </Center>
          <VStack align={`stretch`} p={`18px 20px`} gap={`8px`}>
            <Text
              fontSize={{base: `20px`, md: `13px`}}
              fontWeight={{base: `500`, md: `600`}}
              lineHeight={{base: `120%`, md: `140%`}}
              letterSpacing={{base: `0.186px`}}
            >
              We have automated payment plans. Now, we’re engineering
            </Text>
            <Text
              fontSize={{base: `12px`, md: `11px`}}
              fontWeight={{base: `500`}}
              lineHeight={{base: `125%`}}
              letterSpacing={{base: `0.447px`}}
            >
              Capture leads, convert them into clients and streamline your workflow with a complete
              CRM solution built right into your site.
            </Text>
          </VStack>
        </Stack>
        <Stack
          borderRadius={{base: `7.5px`}}
          borderTop={{base: `0.7px solid`}}
          borderColor={{base: `#1E2C31`}}
          background={{base: `radial-gradient(50% 50% at 50% 50%, #3344BA 0%, #27348F 100%)`}}
          overflow={`hidden`}
        >
          <Center aspectRatio={`386.5 / 290`} position="relative" transition={`.5s`}>
            <Image
              src={`/temp_local_images/ideas_insights_4.jpg`}
              alt="fractional ownership"
              fill
              style={{objectFit: `cover`}}
            />
          </Center>
          <VStack align={`stretch`} p={`18px 20px`} gap={`8px`}>
            <Text
              fontSize={{base: `20px`, md: `13px`}}
              fontWeight={{base: `500`, md: `600`}}
              lineHeight={{base: `120%`, md: `140%`}}
              letterSpacing={{base: `0.186px`}}
            >
              Why do startups struggle with fractional ownership?
            </Text>
            <Text
              fontSize={{base: `12px`, md: `11px`}}
              fontWeight={{base: `500`}}
              lineHeight={{base: `125%`}}
              letterSpacing={{base: `0.447px`}}
            >
              See the big picture more clearly. Access dozens of metrics across every key aspect of
              your business.
            </Text>
          </VStack>
        </Stack>
      </Grid>
    </Flex>
  );
};
