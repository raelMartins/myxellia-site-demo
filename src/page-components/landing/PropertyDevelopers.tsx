import {Box, Center, Grid, Stack, Text, VStack} from '@chakra-ui/react';
import Image from 'next/image';

export const PropertyDevelopers = () => {
  return (
    <Stack p={{base: `100px 24px `, lg: `120px 64px`}} gap={`35px`}>
      <Text
        maxW={`851px`}
        fontSize={{base: `32px`, lg: `56px`}}
        fontWeight={{base: `500`}}
        lineHeight={{base: `125%`, lg: `115%`}}
      >
        From software developers to property developers
      </Text>
      <Grid templateColumns={`1fr 1fr 1fr`} gap={`42px`}>
        <Stack
          borderRadius={{base: `7.891px`}}
          borderTop={{base: `0.7px solid`}}
          borderColor={{base: `#1E2C31`}}
          background={{base: `radial-gradient(50% 50% at 50% 50%, #C5C4C4 0%, #F6F2F2 100%)`}}
          overflow={`hidden`}
        >
          <Center
            aspectRatio={`409 / 307`}
            position="relative"
            filter={`grayscale(1)`}
            _hover={{filter: `grayscale(0)`}}
            cursor={`pointer`}
            transition={`.5s`}
          >
            <Image
              src={`https://s3-alpha-sig.figma.com/img/1f8a/0f04/96c2ecbb45355575d046376b57dbc2dc?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=fwfjTuNAIUfqcv8q-0aXNMJ6ZXsH5YKWtM0FOq78L1WPbbFUnq~A5ok1wxxu-HTKy15qrUXvasLujflCAlNXXsra2eSOImPzl27vO3BbAdq~7Bgt3WgI6WlveqNhdFeEFr3wzUhOyAd9TVnzbENrvxDWfaklUBEQUUj7CFb0KweNbfY46dPUQFBsamvrgXJySz0GjHzwjd~z-J-Fj2oHBqAKYWF7ktDT5DsjTwESiyn-LW6lXEMf-8kGteUAcICNll1EtNazqdrU0ucOppVfbYf~Sa3xyCF0Xk6Owq8cMKEHaeP7Nb3IVK3BHCREG~VKyr3HyOLCPzI557VlBK~VZQ__`}
              alt="Veritasi"
              fill
              style={{objectFit: `cover`}}
            />
          </Center>
          <VStack align={`stretch`} p={`20px`} gap={`8px`} color={{base: `#292929`, lg: `#424242`}}>
            <Text
              fontSize={{base: `16px`, lg: `13px`}}
              fontWeight={{base: `600`}}
              lineHeight={{base: `115%`, lg: `140%`}}
              letterSpacing={{base: `0.197px`}}
            >
              The Myxellia Effect on Veritasi
            </Text>
            <Text
              fontSize={{base: `16px`, lg: `12px`}}
              fontWeight={{base: `500`}}
              lineHeight={{base: `140%`, lg: `125%`}}
              letterSpacing={{base: `0.473px`}}
            >
              With Myxellia’s digital solutions.{' '}
              <Box as={`span`} fontWeight={`700`}>
                Veritasi
              </Box>{' '}
              is set to transform the client journey, optimizing every touchpoint for an
              unparalleled user experience.
            </Text>
          </VStack>
        </Stack>
        <Stack
          borderRadius={{base: `7.891px`}}
          borderTop={{base: `0.7px solid`}}
          borderColor={{base: `#1E2C31`}}
          background={{base: `radial-gradient(50% 50% at 50% 50%, #C5C4C4 0%, #F6F2F2 100%)`}}
          overflow={`hidden`}
        >
          <Center
            aspectRatio={`409 / 307`}
            position="relative"
            filter={`grayscale(1)`}
            _hover={{filter: `grayscale(0)`}}
            cursor={`pointer`}
            transition={`.5s`}
          >
            <Image
              src={`https://s3-alpha-sig.figma.com/img/4bca/4b43/9d4a1b5431c497cfc3cba274cf53f0ed?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=OUC7dcXeO-5ejW0gcc1vPDWdpF6qYytPzhqzULyRZaK3XLmRYyXtvXgoOBf337QijhMuK6gmNTf1s6QeLeQSMN1UcTgYXfaNvEADbyjEQAai2qBSDJ4fvWHPKjT5W-Zt3iadskcu0O2Ajid5IowhEa8dS~4DGhzmSi7Lv4UbCQWbX0ZkuBpu6swl8B4QeSxOCrlVP9M078B3imKCmu73tN1F~AGHt1hdGPVNZXDc0fEZUVYs9mVvg6cTydTjvMPcMnvMe1ysuB3cdANRHonI9ArwFI3KHIS35BOP68cy0zhs0JK~8z9A~JmJ-xYL5S4iV-pwJp1SJPfqhunjFnxs0Q__`}
              alt="Gidi"
              fill
              style={{objectFit: `cover`}}
            />
          </Center>
          <VStack align={`stretch`} p={`20px`} gap={`8px`} color={{base: `#292929`, lg: `#424242`}}>
            <Text
              fontSize={{base: `16px`, lg: `13px`}}
              fontWeight={{base: `600`}}
              lineHeight={{base: `115%`, lg: `140%`}}
              letterSpacing={{base: `0.197px`}}
            >
              A New Standard in Client Management
            </Text>
            <Text
              fontSize={{base: `16px`, lg: `12px`}}
              fontWeight={{base: `500`}}
              lineHeight={{base: `140%`, lg: `125%`}}
              letterSpacing={{base: `0.473px`}}
            >
              How {` `}
              <Box as={`span`} fontWeight={`700`}>
                Gidi Real Estate Investment
              </Box>{' '}
              is redefining customer experience in property development
            </Text>
          </VStack>
        </Stack>
        <Stack
          borderRadius={{base: `7.891px`}}
          borderTop={{base: `0.7px solid`}}
          borderColor={{base: `#1E2C31`}}
          background={{base: `radial-gradient(50% 50% at 50% 50%, #C5C4C4 0%, #F6F2F2 100%)`}}
          overflow={`hidden`}
        >
          <Center
            aspectRatio={`409 / 307`}
            position="relative"
            filter={`grayscale(1)`}
            _hover={{filter: `grayscale(0)`}}
            cursor={`pointer`}
            transition={`.5s`}
          >
            <Image
              src={`https://s3-alpha-sig.figma.com/img/aa10/44a6/e34b3137aca9a8b2ab8b275b75373984?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=EiodcbrDxVLInpu84LzgKVoJSssgyWm5m-5XGe6BNlrOROkbf8YxDIVAIF8uEpGyNg3Ut5q3KJpK80bHyOQGWi17F4ZbOT0J7~dqkkeVvprK~adYYyWwlBy-SYAwAQt0MaZSYeoMNtEUCC6Nx2nCfP0ywKdwVYw6ohCHVTlpZJPhrahB5~tW~3OhDEcacIzky4yMNkJU6X-QbxW0mXY5CeR88wNvw2qQxfyRRojeZ8~mfGHjOsAJi9lFnU80uxu1l3JCG1Km10l3QXmxWEkMzM4goMCEOpSXmnn1Y7K2VHJn6e8t-ZuozcW7HvIcJn45XB9gUghNtz8iTlpJB-oDXQ__`}
              alt="Adozillion"
              fill
              style={{objectFit: `cover`}}
            />
          </Center>
          <VStack align={`stretch`} p={`20px`} gap={`8px`} color={{base: `#292929`, lg: `#424242`}}>
            <Text
              fontSize={{base: `16px`, lg: `13px`}}
              fontWeight={{base: `600`}}
              lineHeight={{base: `115%`, lg: `140%`}}
              letterSpacing={{base: `0.197px`}}
            >
              A Fresh Take on Client-Centered Service
            </Text>
            <Text
              fontSize={{base: `16px`, lg: `12px`}}
              fontWeight={{base: `500`}}
              lineHeight={{base: `140%`, lg: `125%`}}
              letterSpacing={{base: `0.473px`}}
            >
              How{' '}
              <Box as={`span`} fontWeight={`700`}>
                Adozillion Homes
              </Box>{' '}
              enhances customer lifetime value through fractional ownership
            </Text>
          </VStack>
        </Stack>
      </Grid>
    </Stack>
  );
};
