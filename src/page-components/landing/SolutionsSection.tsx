import {Button2} from '@/ui-lib';
import {Box, Center, Flex, Stack, Text, VStack} from '@chakra-ui/react';
import Image from 'next/image';
import ReactPlayer from 'react-player';

type Solution = {
  title: string;
  description: string;
  media_type: 'image' | 'video' | 'gif';
  media_url: string;
  media_dimensions: {height: number; width: number};
  background?: string;
};
export const SolutionsSection = () => {
  const solutions_arr: Solution[] = [
    {
      title: `Optimize your payment collection`,
      description: `With automated transaction logging, every payment your clients make is instantly recorded—no manual entry needed. No matter where they are in the world or what time they pay, their transactions are captured seamlessly.`,
      media_type: `image`,
      media_url: `https://s3-alpha-sig.figma.com/img/f61c/c21e/252a845688a7609fbc705eb3ad652ae2?Expires=1733702400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=dQ-ICoH-KaNvTrjOB7P3CrWhF9JzCUeMhIDAqOtBEXkGZBCcRfxBY7igTKUtdxSyHkIJPN~Vk63XosznwOk9a-k-mE8MS4AkvQCvnH2yrJXy2O03vWryl2tiGeM8aiB4VT0wWz0GIrKTEpDl1QCJGTLsqsf2IinNEWBiVLDl-aCfJRo5nIztjOqmMuX23KrNPEdIQbQx9yZ7uTSg5hjsB0M1BoYG6H8N162XA73AhoXBld-xxTnLgoRs43KMskYbeKhhycYb6Bov9RxpzpqVPnYzkKzZbepz32mWwjKkDp0lqS0duPBZEaQxmaIpQ3YMm38vUAj3A0n0bSLCNBdrEQ__`,
      media_dimensions: {height: 787, width: 400},
      background: `radial-gradient(50% 50% at 50% 50%, #470804 0%, #220402 100%)`
    },
    {
      title: `Document Organization Made Simple`,
      description: `Easily sort and organize all your clients’ documents—from agreements and payment receipts to offer letters, deeds, and project reports. Everything they need is right at their fingertips.`,
      media_type: `video`,
      media_url: `https://s3-figma-videos-production-sig.figma.com/video/1380982990654738066/TEAM/c419/9113/-ab38-4df4-aa6e-8f2e4f4109f7?Expires=1733702400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=WflpO5GeXA-4VNbVnohAhcwwY4~Y54HEV7HdoI~kT-ymeFnGHGCKdmgIamJcRG0xYNTo4r2S598M3ewkmDwh5vynaNPMWa0nUExuw6pUDVRgzRNvrS7IWBDH4t1LD3o0faIOyftvsHLuvyDRrPn5c77nt5ob5foDjIBiACEzzkQJqSsHOyfVgyp5BN1g~ECq6kn9cYqgUEsCc9ontq7nNcYRr496DfSZpYsfUr90W9s6Pcs7ZaT06bHRnytljSuclI3WYy82Rs~uCHmvMaGAy3LwQlx1mlYgmEb5D5kIdtJBn2y7LKfJClXjSmJVzIm4NtooKNVIb14IfN5nDZiZaw__`,
      media_dimensions: {height: 371, width: 660},
      background: `radial-gradient(50% 50% at 50% 50%, #470804 0%, #220402 100%)`
    },
    {
      title: `Portfolio management in a user friendly way`,
      description: `Build an application that empowers your clients to effortlessly track all their assets, monitor payment progress, and watch their portfolio value grow—offering a user-friendly way to streamline investment management like never before.`,
      media_type: `image`,
      media_url: `https://s3-alpha-sig.figma.com/img/88b1/a85d/08b0a0af2a0329dbe098096271e127b2?Expires=1733702400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=DxJKS-j0c2qxIZTYDAGjRLfi8oHEi1UvCunOxP7S-x-3NpH4gbelgwfQa1N4YCkLvo-ZZ0yv4TezaWf4-5VeUNidj3c-BF0Oq~Vb-kHQ6FotE6YR~YYXe7b9cvlypYA4uZp2hQK-GrEHdtRW3~rzZ0zlLqi~YhGnL9u7PkEBdPqdosAWumP5qL0TnEa6p82eyK0Fb5fkBHdRdNI7xuVuGpuuqagJlm-XGwVvP3~ZtaCdKU2P1V5rhmm6Sat3M6RS9NvGpEdlFfCzwfVuHyTvwLExTeGgh3JgZoQ3HquyJdpzoJ0wIHA5ghJq9I~pCxhFFR8Lsv23IjUuiEIzcPhMZw__`,
      media_dimensions: {height: 468, width: 700},
      background: `radial-gradient(50% 50% at 50% 50%, #553B1D 0%, #2D1B05 100%)`
    },
    {
      title: `Smart Notifications`,
      description: `Automate timely reminders and updates to keep your clients informed of every essential detail—from payment deadlines to project milestones.`,
      media_type: `image`,
      media_url: `https://s3-alpha-sig.figma.com/img/88b1/a85d/08b0a0af2a0329dbe098096271e127b2?Expires=1733702400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=DxJKS-j0c2qxIZTYDAGjRLfi8oHEi1UvCunOxP7S-x-3NpH4gbelgwfQa1N4YCkLvo-ZZ0yv4TezaWf4-5VeUNidj3c-BF0Oq~Vb-kHQ6FotE6YR~YYXe7b9cvlypYA4uZp2hQK-GrEHdtRW3~rzZ0zlLqi~YhGnL9u7PkEBdPqdosAWumP5qL0TnEa6p82eyK0Fb5fkBHdRdNI7xuVuGpuuqagJlm-XGwVvP3~ZtaCdKU2P1V5rhmm6Sat3M6RS9NvGpEdlFfCzwfVuHyTvwLExTeGgh3JgZoQ3HquyJdpzoJ0wIHA5ghJq9I~pCxhFFR8Lsv23IjUuiEIzcPhMZw__`,
      media_dimensions: {height: 314, width: 523},
      background: `radial-gradient(33.83% 33.83% at 50% 52.41%, #5067AF 0%, #212B49 100%)`
    },
    {
      title: `Capture Insights After Every Inspection`,
      description: `Unlike standard inspection scheduling tools, this feature goes further to enhance your client experience. Once an inspection is completed, buyers or clients receive a push notification inviting them to share feedback. This proactive approach offers real-time insights, enabling you to identify and address your business gaps.`,
      media_type: `video`,
      media_url: `https://s3-figma-videos-production-sig.figma.com/video/1380982990654738066/TEAM/1fe4/84e3/-633d-4c09-975b-9d094e8a3d7f?Expires=1733702400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=CJOhzCWrbZX5CwHJNFBh7VSJ4Rt5CgC7YeHjbYzFL3ydshsrC5YkgFqsEKHeHF4YNhoSOOjWlNtjvweh8DIKyDRpTYEhy93MwVblR9Q430erBV1iv2La3rGmSS6o5yxa0sHBeRJKcpxoZufzzo3u5bbU1iT5aP4emPNcQYU~tuLlzLaLLrNWG8fODl84r-cAq-jekQzA0-ZERwDdgHMF5I~FIN~gadGXaSglOlwobzOnH~AueN6plEMhAvn3VqyKV~2MhgkNUwv5VY59NIWoAUSf~rY4O6C42mDvuz9gAiz1j5QTlAlZGqimPBtHUoT~s5HsdJd6YbW3ski4J5T98Q__`,
      media_dimensions: {height: 371, width: 660},
      background: `radial-gradient(33.83% 33.83% at 50% 52.41%, #5067AF 0%, #212B49 100%)`
    },
    {
      title: `Penetrate a new market with fractional ownership`,
      description: `Tap into an untapped but addressable market by giving people of low purchasing power a seat at the table`,
      media_type: `image`,
      media_url: `https://s3-alpha-sig.figma.com/img/88b1/a85d/08b0a0af2a0329dbe098096271e127b2?Expires=1733702400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=DxJKS-j0c2qxIZTYDAGjRLfi8oHEi1UvCunOxP7S-x-3NpH4gbelgwfQa1N4YCkLvo-ZZ0yv4TezaWf4-5VeUNidj3c-BF0Oq~Vb-kHQ6FotE6YR~YYXe7b9cvlypYA4uZp2hQK-GrEHdtRW3~rzZ0zlLqi~YhGnL9u7PkEBdPqdosAWumP5qL0TnEa6p82eyK0Fb5fkBHdRdNI7xuVuGpuuqagJlm-XGwVvP3~ZtaCdKU2P1V5rhmm6Sat3M6RS9NvGpEdlFfCzwfVuHyTvwLExTeGgh3JgZoQ3HquyJdpzoJ0wIHA5ghJq9I~pCxhFFR8Lsv23IjUuiEIzcPhMZw__`,
      media_dimensions: {height: 371, width: 660},
      background: `radial-gradient(50% 50% at 50% 50%, #061145 0%, #030821 84%);`
    }
  ];
  return (
    <VStack
      align={`stretch`}
      gap={{base: `50px`, lg: `100px`}}
      p={{base: `80px 24px`, lg: `86px 64px`}}
      background={`#F1F2FE`}
    >
      <Stack color={`#181F66`} gap={`24px`} maxW={{base: `882px`}}>
        <Text
          fontSize={{base: `40px`, lg: `160px`}}
          fontWeight={{base: `500`, lg: `400`}}
          lineHeight={{base: `120%`, lg: `93%`}}
          letterSpacing={{base: `0.72px`, lg: `auto`}}
        >
          Modern solutions with you in mind
        </Text>
        <Text
          fontSize={{base: `18px`, lg: `56px`}}
          fontWeight={{base: `400`}}
          lineHeight={{base: `100%`}}
          maxW={{base: `100%`, lg: `543px`}}
        >
          Build more than just a website
        </Text>
        <Button2 variation="primary" background={{base: `#191919`, lg: `#181F66`}}>
          Explore our solutions
        </Button2>
      </Stack>
      <Stack gap={{base: `30px`, lg: `105px`}}>
        {solutions_arr?.map((el, i) => (
          <Flex key={i} align={{lg: 'center'}} direction={{base: `column`, lg: `row`}} w={`100%`}>
            <Box
              order={{lg: i % 2 == 1 ? `2` : `1`}}
              aspectRatio={{base: `660 / 371`}}
              w={`100%`}
              flex={`1`}
              background={el.background || `#f0f0f0`}
              overflow={`hidden`}
            >
              {el?.media_type === 'image' ? (
                <Center pos={`relative`}>
                  <Image
                    src={el?.media_url}
                    alt="Image"
                    width={el?.media_dimensions?.width}
                    height={el?.media_dimensions?.height}
                  />
                </Center>
              ) : el?.media_type === 'video' || el?.media_type === 'gif' ? (
                <Center position={`relative`}>
                  <ReactPlayer
                    url={el?.media_url}
                    style={{
                      aspectRatio: `${el?.media_dimensions?.width} /  ${el?.media_dimensions?.height}`,
                      width: '100%',
                      backgroundColor: '#000000',
                      margin: 'auto'
                    }}
                    width={'100%'}
                    height={'100%'}
                    playing={true}
                    loop
                  />
                </Center>
              ) : (
                <></>
              )}
            </Box>
            <Stack
              gap={`12px`}
              p={{base: `18px 0px`, lg: `40px`}}
              flex={`1`}
              order={{lg: i % 2 == 1 ? `1` : `2`}}
            >
              <Text
                fontSize={`22px`}
                fontWeight={`600`}
                lineHeight={`120%`}
                letterSpacing={`-0.22px`}
              >
                {el?.title}
              </Text>
              <Text
                color={`#292929`}
                fontSize={`16px`}
                fontWeight={`500`}
                lineHeight={`140%`}
                letterSpacing={`-0.016px`}
              >
                {el?.description}
              </Text>
            </Stack>
          </Flex>
        ))}
      </Stack>
    </VStack>
  );
};
