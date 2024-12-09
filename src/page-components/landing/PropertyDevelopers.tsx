import {Box, Center, Grid, Link, Stack, Text, VStack} from '@chakra-ui/react';
import Image from 'next/image';

export const PropertyDevelopers = () => {
  return (
    <Stack p={{base: `100px 24px `, lg: `120px 64px`}} gap={`35px`} data-background="#FFFFFF">
      <Text
        maxW={`851px`}
        fontSize={{base: `32px`, lg: `56px`}}
        fontWeight={{base: `500`}}
        lineHeight={{base: `125%`, lg: `115%`}}
      >
        From software developers to property developers
      </Text>
      <Box
        overflow={`auto`}
        css={{
          '::-webkit-scrollbar': {
            display: 'none'
          }
        }}
      >
        <Grid templateColumns={`1fr 1fr 1fr`} gap={`42px`}>
          <Stack
            borderRadius={{base: `7.891px`}}
            borderTop={{base: `0.7px solid`}}
            borderColor={{base: `#1E2C31`}}
            background={{base: `radial-gradient(50% 50% at 50% 50%, #C5C4C4 0%, #F6F2F2 100%)`}}
            overflow={`hidden`}
            minW={`268.5px`}
            as={Link}
            href={`https://app.veritasihomes.com`}
            rel="noreferrer noopener"
            target="_blank"
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
                src={`https://s3-alpha-sig.figma.com/img/4e3b/1b87/c885cb3b6363302e81d0f82f87abea60?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=XGAqsyIHeUsa6c3re9gpgELt72aPgCzLcUhikhQcsePqmmBnrdZWYNxITrGZ6ihrrps6LPLIAWq9Ib3V8QJXYpmF5yhufhnKZxC9tezEUcQkhwR1Cg0XkeDXOWg9fILu1DlwoZQmBulRJxP5PgBu3fIeMTDTqby6ApUhECeM~PJN9Jn7ykFY5Z9QPRV9-Ptb39Ea5vRgvJ6mI472lArn8ml9-h~fexSEOWcoZmFVM4-QUScY04aZH2ac7CcXTASamXa265-s0EfUxqluyVIl0wAqxHR0ecZVI2i6Mr3zwUJu1RyH3kzYjsyGRixp-ILpVDwVm-VaQ-xsDlkzmpwIHQ__`}
                alt="Veritasi"
                fill
                style={{objectFit: `cover`}}
              />
            </Center>
            <VStack
              align={`stretch`}
              p={`20px`}
              gap={`8px`}
              color={{base: `#292929`, lg: `#424242`}}
            >
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
            minW={`268.5px`}
            as={Link}
            href={`https://app.gidirealestateinvestment.com`}
            rel="noreferrer noopener"
            target="_blank"
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
                src={`https://s3-alpha-sig.figma.com/img/df9e/6a18/6f4677a9872afca090c6d18e07488167?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=OI~xmQ4kjLZFIqJD6E1J4kQaQGuC2FHJxtTn0IhSI7zbtAHOtV8FpsLTT38tPYyQeU8-65bCypa~vAWs6wwfOqBwndpzCUkYGhNLV2Vw6nvps57lqE2vNppfvcAfwuW3G1G9FheqnFqLU3ZUOsUX-eYYWWvJCKgyQpYvUXTwQShzSy~q5JW9ZSDv2f39c5OAzj7Ri8LOZTF6PP8Z9HthpK1DrKKhL3-4rQtdPPQi9GoHRJjGoaAJ71P25ViHVh4yk-Y8IlDm~GXGF7qNpP9M7e12V503MX9YM6IkbrCJbEvXD8Pw8tCtznHX4LVIY5WTBmzidZeSm1JIqq-eVPO~jw__`}
                alt="Gidi"
                fill
                style={{objectFit: `cover`}}
              />
            </Center>
            <VStack
              align={`stretch`}
              p={`20px`}
              gap={`8px`}
              color={{base: `#292929`, lg: `#424242`}}
            >
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
            minW={`268.5px`}
            as={Link}
            href={`https://app.adozillionhomesng.com`}
            rel="noreferrer noopener"
            target="_blank"
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
                src={`https://s3-alpha-sig.figma.com/img/aa10/44a6/e34b3137aca9a8b2ab8b275b75373984?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=EzxZEFNSzBuy2DcgcidJsIGuv3EOkgfYL~W-F0MirGZie4XWN2mQozTh~SI9uJc6HFAe7oKbobUQg4h~dbs85xxbWSvHc~ZPbT-lOWvx74PLFP6eRCSJPFTnUplJ9cyk0mAN-Hc4rlz-sceDUKc-ze9GXEY99~54RGVw~GVS~uOLojDYw3Q5yw7i7~h889BbiQ4FM-48jJ~WfSl8qCXOfusCZ1f5AzQSVBn4~HwOL~VjyTCVU4C~wiNSS~BO~xvss42LKX7pWPhFfNVxGtuIUideJfVEFJnKIALcMk1k0N3IZ3PvwcRa4zob-ChxarYzoCTnvbWUPtcPdchd1Ng43w__`}
                alt="Adozillion"
                fill
                style={{objectFit: `cover`}}
              />
            </Center>
            <VStack
              align={`stretch`}
              p={`20px`}
              gap={`8px`}
              color={{base: `#292929`, lg: `#424242`}}
            >
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
      </Box>
    </Stack>
  );
};
