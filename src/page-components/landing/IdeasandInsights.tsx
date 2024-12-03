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
      <Grid templateColumns={{base: `1fr`, lg: `1fr 1fr`}} gap={{base: `32px`, lg: `25px 10px `}}>
        <Stack
          borderRadius={{base: `7.5px`}}
          borderTop={{base: `0.7px solid`}}
          borderColor={{base: `#1E2C31`}}
          background={{base: `radial-gradient(50% 50% at 50% 50%, #3344BA 0%, #27348F 100%)`}}
          overflow={`hidden`}
        >
          <Center aspectRatio={`386.5 / 290`} position="relative" transition={`.5s`}>
            <Image
              src={`https://s3-alpha-sig.figma.com/img/827b/35c1/bb16393e66569431d249bf5634bfed86?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ZWVa6-jDcpVKrlQ6vbu-Qad64v10i1arQZOV~vyPAxjfk-w9JcF8lUeTYY5olidWwgT2yhYZhe8cCjIDYBh2zhxFZAwuxXgTmEbIDjQkyA-y9FnMCV1JHOcflEZb23UCVKNYmL3b7vQNNwnHmb1v8mGFctIYICqmYSSeuY9RcbH4Noh-WWtgPcI3LFENVHx~gMBXh6BsmgsIv0lRcZpArpa8cvmHiiOqOphmyzzKTjVQ8ThNK~uCBdYyhXj1TByqgvSC0IQxci1PKzevJ5YQ0yRjFKtrCY3qpGhkGj4r4V36oxlR5Ge-3UG9rM8sbEf58AsWzErjPPVJ3Rwmkl~fyQ__`}
              alt="The Genesis"
              fill
              style={{objectFit: `cover`}}
            />
          </Center>
          <VStack align={`stretch`} p={`18px 20px`} gap={`8px`}>
            <Text
              fontSize={{base: `20px`, lg: `13px`}}
              fontWeight={{base: `500`, lg: `600`}}
              lineHeight={{base: `120%`, lg: `140%`}}
              letterSpacing={{base: `0.186px`}}
            >
              The Genesis
            </Text>
            <Text
              fontSize={{base: `12px`, lg: `11px`}}
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
              src={`https://s3-alpha-sig.figma.com/img/dd65/7baf/56c727d6ed6b7a685a24fe6ad31efdb2?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=AoZPL0rpBtQdIcpbx-XFO1OH1Md2xjBC-9nAEw2azpMOrOp5PUdNgAtHFkeVXFrRe8HdC4EHtRm9HslSO5I9E-DWiq75GkFfJlRGNED9TcucyXbwQn0aElPP68SPRPvEATJt7u6WClmrUPj2sm1IlgFTbrBzRiE56aUTRzWg0Sy~STCH1sfhPEmk0bV3q~Gmkapkg0x8Kldfqt0g5DFtckwIq1cUev0v2aYoQg5Z57hgOMx4GlcikB1HAfc1D0fSKCIkROsXI13gy63siIHL8B9FrpOGyq1~Vm-jwmTo5cA9iDhlyjQphRPb2I7ex5YuE5i1iU6EfNy~PNPV~OLR0A__`}
              alt="Why Myxellia instead of building"
              fill
              style={{objectFit: `cover`}}
            />
          </Center>
          <VStack align={`stretch`} p={`18px 20px`} gap={`8px`}>
            <Text
              fontSize={{base: `20px`, lg: `13px`}}
              fontWeight={{base: `500`, lg: `600`}}
              lineHeight={{base: `120%`, lg: `140%`}}
              letterSpacing={{base: `0.186px`}}
            >
              Why Myxellia instead of building
            </Text>
            <Text
              fontSize={{base: `12px`, lg: `11px`}}
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
              src={`https://s3-alpha-sig.figma.com/img/dd65/7baf/56c727d6ed6b7a685a24fe6ad31efdb2?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=AoZPL0rpBtQdIcpbx-XFO1OH1Md2xjBC-9nAEw2azpMOrOp5PUdNgAtHFkeVXFrRe8HdC4EHtRm9HslSO5I9E-DWiq75GkFfJlRGNED9TcucyXbwQn0aElPP68SPRPvEATJt7u6WClmrUPj2sm1IlgFTbrBzRiE56aUTRzWg0Sy~STCH1sfhPEmk0bV3q~Gmkapkg0x8Kldfqt0g5DFtckwIq1cUev0v2aYoQg5Z57hgOMx4GlcikB1HAfc1D0fSKCIkROsXI13gy63siIHL8B9FrpOGyq1~Vm-jwmTo5cA9iDhlyjQphRPb2I7ex5YuE5i1iU6EfNy~PNPV~OLR0A__`}
              alt="automated payment plans"
              fill
              style={{objectFit: `cover`}}
            />
          </Center>
          <VStack align={`stretch`} p={`18px 20px`} gap={`8px`}>
            <Text
              fontSize={{base: `20px`, lg: `13px`}}
              fontWeight={{base: `500`, lg: `600`}}
              lineHeight={{base: `120%`, lg: `140%`}}
              letterSpacing={{base: `0.186px`}}
            >
              We have automated payment plans. Now, we’re engineering
            </Text>
            <Text
              fontSize={{base: `12px`, lg: `11px`}}
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
              src={`https://s3-alpha-sig.figma.com/img/827b/35c1/bb16393e66569431d249bf5634bfed86?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ZWVa6-jDcpVKrlQ6vbu-Qad64v10i1arQZOV~vyPAxjfk-w9JcF8lUeTYY5olidWwgT2yhYZhe8cCjIDYBh2zhxFZAwuxXgTmEbIDjQkyA-y9FnMCV1JHOcflEZb23UCVKNYmL3b7vQNNwnHmb1v8mGFctIYICqmYSSeuY9RcbH4Noh-WWtgPcI3LFENVHx~gMBXh6BsmgsIv0lRcZpArpa8cvmHiiOqOphmyzzKTjVQ8ThNK~uCBdYyhXj1TByqgvSC0IQxci1PKzevJ5YQ0yRjFKtrCY3qpGhkGj4r4V36oxlR5Ge-3UG9rM8sbEf58AsWzErjPPVJ3Rwmkl~fyQ__`}
              alt="fractional ownership"
              fill
              style={{objectFit: `cover`}}
            />
          </Center>
          <VStack align={`stretch`} p={`18px 20px`} gap={`8px`}>
            <Text
              fontSize={{base: `20px`, lg: `13px`}}
              fontWeight={{base: `500`, lg: `600`}}
              lineHeight={{base: `120%`, lg: `140%`}}
              letterSpacing={{base: `0.186px`}}
            >
              Why do startups struggle with fractional ownership?
            </Text>
            <Text
              fontSize={{base: `12px`, lg: `11px`}}
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
