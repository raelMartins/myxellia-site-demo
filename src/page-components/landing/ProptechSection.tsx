import {Button2} from '@/ui-lib';
import {Box, Center, Flex, HStack, Show, Stack, Text, VStack} from '@chakra-ui/react';
import Image from 'next/image';
import {useEffect, useState} from 'react';
import ReactPlayer from 'react-player';

export const ProptechSection = () => {
  const [isClient, setIsClient] = useState(false);
  const [count, setCount] = useState(1);
  const [resetInterval, setResetInterval] = useState(``);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const features = [
    {
      title: `Offerings`,
      image: `https://s3-alpha-sig.figma.com/img/e6d4/af46/8ad43a2496515aec5666e292126c4592?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=BBhlKd3eF00Io0l5pQJEM--gaQmItTwkMWXHSYqUSEvmGvWSO3pm60-n7Nv--RlFKakHF3Sxqb5RyCjg9vg7LefeE~BaovQjpy~YYeASRNbvHNiiv~PhffVbIbKqg5PC3K-pzuqFo27Yb9luRYNYEnbJz1gDlZJ146rzJ6w1XFHv0nus-4WZBg~rUWMBg0JCwMtpQ7sKvwnQN66AGdl1Pik~6Xm8J2FK8LsQB1u4szZUG2uvJeZyRmI~Iv~nFweVqg3BIporQolwywj6V2ryMSFeRDKJABZs4p87LqF97wbXXHJj6tPWQu9OjgU4oj8fJQEmiwn-019NKYL-kBkMgA__`,
      video: ``,
      media_type: `image`
    },
    {
      title: `Authentication`,
      image: `https://s3-alpha-sig.figma.com/img/16f7/4946/90866fc624eb8af4a10d4ed88ba0d76b?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=RU5J2HJ~ectUteaGqtwvbNJxIDu0gRi3IFvivvzCfggNh-czDt52RipprTFgpiGabog8etm3onpymQJuEvaCXjPnLLea0H3-lJFCwg0dahDqYCAQwcyw-ccS--6Mp~3l5EbFbAZOr2OoKKoXZv59DkKAmSCtMLTdmG7oWxyCjsSDsP5MB2j6evgtzN9VvuY0mK4tX6-4ItCDKY3wQEb6Y8DXuPYjl4LaUdU1W-As8eJc2wPpNiETaQnN5d-vjuGaHJAZV4-Z7lgzEKUd4zuiK83RXt~0sgNNKP7KtVuTpBn0h3OTiNsYuzETIfx9U90qhFh-HnlyzQN1aZMbKNK91A__`,
      video: `https://s3-figma-videos-production-sig.figma.com/video/1380982990654738066/TEAM/9c4e/40fb/-68c2-4c2d-97f8-9b2f911eaaae?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=LB3g8R-Nh44BEM6PzKGVuiZTghmRAJ3BibAqsl-2eEqILX7kPIJ8UNo8Hp~GaxonyLEWEitvcYG0qRrt9anrCcl1V-8zcwmbEKSeoW-NOONF9ISf~PaBXpnK9YWX3rXPk-M0VMYlVbWJ64tv6UKqsGCOxtWGi5F0hMMQxmUP~lCLcj4IzdUMcxIfA0jmTZNAA0mNyizbAtSYPQLnn4vxIl8~2XRD7YWaS2aAw7g4SRl5tWRdGEF6J66ImVYwFjHyEfgvK6Lui8f8ju~~Lpdj9iY4kpOIynjuhIofJQRHqbO97q3raNzYFrPjiqWivWDx82Fatu0jfBXdZ9kfojek9A__`,
      media_type: `video`
    },
    {
      title: `Schedule Inspection`,
      image: `https://s3-alpha-sig.figma.com/img/a711/14fe/1c506f6e46290e08972c7e34d397fe04?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=FX-0qUZg~9jlv30~N2RhOV9ghDYA8SrZaVkHjxjF79zUQ3QcLpX42SzFJnvOFYqOYbFH-k75Ltcbhsp0NrUp6fD0pcDPnNJku-wapa7iJs1gYG2Wgn~xCLn8d~YYSYug17lyyfcqOb-oupitfIFf2dudyNZI91WjO8ZBzgJFB5B7F1OeJoqWNR5fV2MRajXvWBUv1ZeH9S9OCbZv3NEdy6fUEVwQIYE2jdJQ5Rr8qakA5D1byuamT~LrONaMn8SCgiP9j9eNqvW8-DLfsKe4QiNQ4wyMem35EjST3Jn8Gd5YZJn49dPly96c0slBxWM55gpHH6nX7JCCoXffABN4XA__`,
      video: ``,
      media_type: `image`
    },
    {
      title: `Portfolio`,
      image: `https://s3-alpha-sig.figma.com/img/4033/31ea/3a766b5b20d3ec2b4ed3aae3960113b5?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=on9wevsXNukQX544kLC9kxFQQ5KwA~8xfJExCbAyF178y7NrC~11FMk4hNb4dKKEtOZ42loVNPGdJNV4uR~6I1s6k2om6ezk9m5Ut7o95N1VUCbNYACRIqWRF4WiNzcEv9VfaudqZJJwkQA0p1XEntPEkFDV4DlM-OfnoWIEe9XVGMeFgx1IKNWlCHR0UmZFNdZ3T2QfO9i8dUrNSosdPfUcBz6-C9l7UylrHTvZlK4muTMquDCXRSqgcu1OomCFX77MHjnHEEV1TCLPip85iDkhWBazvqAyTayCDBnnun-TTK14rAQU3gEVCLeZ4rKU~O~rwpuz06QNOqZl-DYFaw__`,
      video: ``,
      media_type: `image`
    },
    {
      title: `KYC`,
      image: `https://s3-alpha-sig.figma.com/img/e6d4/af46/8ad43a2496515aec5666e292126c4592?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=BBhlKd3eF00Io0l5pQJEM--gaQmItTwkMWXHSYqUSEvmGvWSO3pm60-n7Nv--RlFKakHF3Sxqb5RyCjg9vg7LefeE~BaovQjpy~YYeASRNbvHNiiv~PhffVbIbKqg5PC3K-pzuqFo27Yb9luRYNYEnbJz1gDlZJ146rzJ6w1XFHv0nus-4WZBg~rUWMBg0JCwMtpQ7sKvwnQN66AGdl1Pik~6Xm8J2FK8LsQB1u4szZUG2uvJeZyRmI~Iv~nFweVqg3BIporQolwywj6V2ryMSFeRDKJABZs4p87LqF97wbXXHJj6tPWQu9OjgU4oj8fJQEmiwn-019NKYL-kBkMgA__`,
      video: ``,
      media_type: `image`
    },
    {
      title: `Fractional  Ownership`,
      image: `https://s3-alpha-sig.figma.com/img/b482/cf54/8dd268c1780c29f27764b7d376fa21f3?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=OP7wzt0duOVeR-OdUqmGDIxAUNW-~2MzZ2NLqvQwd0nRDrJJJdpMZQ1bIKQ9NVzk-CLDNLFB7BE~YxpLodUAFX43baRe0x2zGY9l9fQxsOdrFHFX6Sn8jHROWchK91vIQHID-6uP8LosHlDUx~AdtNtMn9bIoc9Wumb~IDes4~GYDfrkOiPnCHjASxb1E-~l1ebXEUvEaXmABQrtGHwVnpWeBAZdPuHrFwTysbxS8K9TXvXrVV3fmal50m4qI-KQmTGEho0jlEkpya0OrlwIufztFSOByeg~wNn3jJHwyb5Py6Qpa5VmS4yETGpKxLtvL5jki4JS~ueUzAz5iY8R3A__`,
      video: ``,
      media_type: `image`
    },
    {
      title: `Wallet`,
      image: `https://s3-alpha-sig.figma.com/img/ae9b/3121/a239a117428cae08c39716b206948033?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=BJ7H7BB2OT6KZ4gRvP11CPC67FPcpRdiJOZkKrhrvsB5AhiuCNg01YU4A5O1ScbUPxaVRQzPN8SOSOD3e9qaWVDanYrHgRe2GfgThK4ohHklT1FiZ5L3BkzQb9V6tNaWh2TUoXUDRSGaAJbmGRPTUFuMt8G3maNO38UIwr5hJiuRIm-rH38DBVonOxl-XpTEd2JUgvUXquYNTOU5N8DtlYk~BM8SgYwBF7Fld-hKGVb3M6baA1hvp3ntIIwEhgGUKOXTSPfSyyE~hZ3y1nvVhjDAGXopaAyV3jO-0ot1pgBHqj6o2PqfkpcZFz-wxjEG4MOg6mO86E8VO~IPKOmf-g__`,
      video: ``,
      media_type: `image`
    },
    {
      title: `Co-ownership`,
      image: `https://s3-alpha-sig.figma.com/img/6ec6/29e0/d760bf6f885c54828d1d47ca4341eb6d?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=I9Y68KkUiKGG9TDL7QQFCro4RG2Oc1~nD9bXWSYPfbY-IOjbdUPTokVGkp0LBWm4Aj~IcD08k-Ow23Kl2~645B-tH2NErD63cG20yzNM3AlwstiyjB5kIMt8aPLtV0OCVQKYGWxmVO8f0RoNLRWZkR3jCd8hIlmib-Iw9UenM6EGrEmNPk4GQQWsUUF~27Ss0NTutfS95ina~YqxPEBxltUPq95jEhMdzCseH8b8LAX2eybzjTLHI-WOCrFxt82CYsD57LQM0OYoZnGMt8K51NKoFmvnw~V3qOk7jhyGzwuv6vvOR6LI40sbnu8ooe58XRhf1j7aVw9Zwj-fGR6K3w__`,
      video: ``,
      media_type: ``
    }
  ];
  useEffect(() => {
    let rifle_interval: any;
    let index = count || 1;
    rifle_interval = setInterval(() => {
      if (index === features?.length) {
        index = 1;
        setCount(1);
      } else {
        index++;
        setCount(index);
      }
    }, 5000);
    return () => {
      clearInterval(rifle_interval);
    };
  }, [count]);

  const handle_click = (ind: number) => {
    setCount(ind);
  };

  return (
    <Stack gap={{base: `50px`}} p={{base: `60px 24px`, lg: `120px 64px`}}>
      <Flex
        align={`flex-start`}
        gap={{base: `12px`, lg: `150px`}}
        direction={{base: `column`, lg: `row`}}
      >
        <Box w={{base: `100%`, lg: `550px`}}>
          <Text
            fontSize={{base: `56px`}}
            fontWeight={{base: `500`}}
            lineHeight={{base: `100%`}}
            letterSpacing={{base: `-2.24px`}}
            maxW={{base: `438px`}}
          >
            Become a PropTech in Minutes
          </Text>
        </Box>
        <VStack align={`stretch`} gap={`50px`} maxW={{base: `550px`, md: `100%`}}>
          <Text
            fontSize={{base: `16px`}}
            fontWeight={{base: `400`}}
            lineHeight={{base: `140%`}}
            letterSpacing={{base: `-0.016px`}}
          >
            From seamless onboarding and real-time access to your offerings, to easy payment
            tracking and timely push notifications when payments are due - your clients stay
            informed every step of the way.
          </Text>
          <Button2 variation="primary" invertAnimation>
            Explore our solutions
          </Button2>
        </VStack>
      </Flex>
      <Show below={`lg`}>
        <Box
          overflow={`auto`}
          css={{
            '::-webkit-scrollbar': {
              display: 'none'
            }
          }}
        >
          <HStack gap={{base: `16px`}}>
            {features?.map((el, i) => (
              <Stack key={i} w={`346px`}>
                <Text
                  fontSize={`30px`}
                  fontWeight={`400`}
                  lineHeight={`133%`}
                  letterSpacing={`-1.6px`}
                >
                  {el.title}
                </Text>
                <Box
                  aspectRatio={{base: `346 / 223`}}
                  w={`346px`}
                  flex={`1`}
                  background={`#f0f0f0`}
                  overflow={`hidden`}
                >
                  {el?.media_type === 'image' ? (
                    <Center pos={`relative`} w={`346px`} height={`223px`}>
                      <Image src={el?.image} alt="Image" fill style={{objectFit: `cover`}} />
                    </Center>
                  ) : el?.media_type === 'video' ? (
                    <Center position={`relative`}>
                      {isClient && (
                        <ReactPlayer
                          url={el?.video}
                          style={{
                            aspectRatio: `346 /  223`,
                            width: '100%',
                            backgroundColor: '#000000',
                            margin: 'auto'
                          }}
                          width={'100%'}
                          height={'100%'}
                          playing={el?.video ? true : false}
                          loop
                        />
                      )}
                    </Center>
                  ) : (
                    <></>
                  )}
                </Box>
              </Stack>
            ))}
          </HStack>
        </Box>
      </Show>
      <Show above={`lg`}>
        <Flex gap={`150px`} justify={`space-between`}>
          <Stack gap={`18px`}>
            {features?.map((el, i) => (
              <Stack
                key={i}
                fontSize={`40px`}
                fontWeight={`400`}
                lineHeight={`100%`}
                letterSpacing={`-1.6px`}
                cursor={`pointer`}
                w={`max-content`}
                onClick={() => handle_click(i + 1)}
                position={`relative`}
              >
                <Text>
                  {el.title}
                  {` `}{' '}
                  <Box
                    as={`span`}
                    transition={`.6s`}
                    ml={`10px`}
                    opacity={i + 1 === count ? `1` : `0`}
                  >
                    →
                  </Box>
                </Text>
                <Box
                  h={`1.5px`}
                  bg={`#000`}
                  borderRadius={`1px`}
                  w={i + 1 === count ? `100%` : `0%`}
                  transition={`.6s`}
                />
              </Stack>
            ))}
          </Stack>
          <Center
            aspectRatio={{base: `790 / 500`}}
            w={`100%`}
            flex={`1`}
            background={`#f0f0f0`}
            overflow={`hidden`}
            position={`relative`}
          >
            {features?.map((el, i) => (
              <>
                {el?.media_type === 'image' ? (
                  <Image
                    src={el?.image}
                    alt="Image"
                    fill
                    style={{
                      objectFit: `cover`,
                      transition: `.6s`,
                      opacity: i + 1 === count ? `1` : `0`
                    }}
                  />
                ) : el?.media_type === 'video' ? (
                  isClient && (
                    <ReactPlayer
                      url={el?.video}
                      style={{
                        aspectRatio: `790 /  500`,
                        width: '100%',
                        backgroundColor: '#000000',
                        margin: 'auto',
                        transition: `.6s`,
                        opacity: i + 1 === count ? `1` : `0`
                      }}
                      width={'100%'}
                      height={'100%'}
                      playing={el?.video ? true : false}
                      loop
                    />
                  )
                ) : (
                  <></>
                )}
              </>
            ))}
          </Center>
        </Flex>
      </Show>
    </Stack>
  );
};
