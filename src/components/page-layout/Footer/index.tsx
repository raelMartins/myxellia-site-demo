import React from 'react';
import {Image, Box, GridItem, VStack, Text, HStack, SimpleGrid, Link} from '@chakra-ui/react';
import {neueHaas} from '@/fonts';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <Box
      w="full"
      bg="#000"
      pt={{base: '22px', md: '59px'}}
      pb={{base: '22px', md: '109px'}}
      fontFamily="Euclid Circular B"
      color="#FFF"
      data-background="#000000"
    >
      <SimpleGrid
        columnGap={{base: '20px', md: '30px'}}
        rowGap={{base: '50px', md: '15px'}}
        columns={{base: 2, md: 3}}
        w={{base: '90%', md: '95%'}}
        mx="auto"
        justifyContent="space-between"
      >
        <GridItem>
          <VStack spacing={'16px'} align={'stretch'}>
            <Box w="full">
              <Text w="fit-content" mb="8px" fontWeight={500} className={neueHaas.className}>
                Help
              </Text>
            </Box>
            {/* <Link target='_blank' rel='noreferrer' href='https://veerge-support.myxellia.io/'>
              <Box w='full'>
                <Text w='fit-content' color='#0A142F' opacity={0.65} className='hover-underline-animation'>Contact us</Text>
              </Box>
            </Link> */}
            <Link href="mailto:hello@myxellia.io">
              <Box w="full">
                <Text w="fit-content" opacity={0.65} className="hover-underline-animation">
                  Contact us
                </Text>
              </Box>
            </Link>
            <Link target="_blank" rel="noreferrer" href="https://veerge.myxellia.io/dashboard">
              <Box w="full">
                <Text w="fit-content" opacity={0.65} className="hover-underline-animation">
                  Explore Themes
                </Text>
              </Box>
            </Link>
            <Link href="/schedule">
              <Box w="full">
                <Text w="fit-content" opacity={0.65} className="hover-underline-animation">
                  Schedule Demo
                </Text>
              </Box>
            </Link>
            <Link href="/refer">
              <Box w="full">
                <Text w="fit-content" opacity={0.65} className="hover-underline-animation">
                  Refer a property developer
                </Text>
              </Box>
            </Link>
            <Link href="/feedback">
              <Box w="full">
                <Text w="fit-content" opacity={0.65} className="hover-underline-animation">
                  Give Feedback
                </Text>
              </Box>
            </Link>
            <Link href="/suggest_idea">
              <Box w="full">
                <Text w="fit-content" opacity={0.65} className="hover-underline-animation">
                  Suggest an idea
                </Text>
              </Box>
            </Link>
          </VStack>
        </GridItem>
        <GridItem>
          <VStack spacing={'16px'} align={'stretch'} fontFamily="Euclid Circular B">
            <Box w="full">
              <Text w="fit-content" mb="8px" fontWeight={500} className={neueHaas.className}>
                Company
              </Text>
            </Box>
            <Link
              href="https://veerge-support.myxellia.io/blog/why_veerge"
              target="_blank"
              rel="noreferrer"
            >
              <Box w="full">
                <Text w="fit-content" opacity={0.65} className="hover-underline-animation">
                  Why us?
                </Text>
              </Box>
            </Link>
            <Link
              href="https://veerge-support.myxellia.io/blog/why_veerge#our_mission"
              target="_blank"
              rel="noreferrer"
            >
              <Box w="full">
                <Text w="fit-content" opacity={0.65} className="hover-underline-animation">
                  Our mission
                </Text>
              </Box>
            </Link>
            <Link
              href="https://veerge-support.myxellia.io/blog/why_veerge#our_value"
              target="_blank"
              rel="noreferrer"
            >
              <Box w="full">
                <Text w="fit-content" opacity={0.65} className="hover-underline-animation">
                  Our Values
                </Text>
              </Box>
            </Link>
            <Link
              href="https://veerge-support.myxellia.io/blog/why_veerge#our_culture"
              target="_blank"
              rel="noreferrer"
            >
              <Box w="full">
                <Text w="fit-content" opacity={0.65} className="hover-underline-animation">
                  Our culture
                </Text>
              </Box>
            </Link>
            <Link target="_blank" rel="noreferrer" href="https://veerge-support.myxellia.io">
              <Box w="full">
                <Text w="fit-content" opacity={0.65} className="hover-underline-animation">
                  Help Centre
                </Text>
              </Box>
            </Link>
          </VStack>
        </GridItem>
        <GridItem colSpan={{base: 2, md: 1}}>
          <Box mt={{base: 'unset', md: '200px'}} fontWeight={500} fontSize={'16px'}>
            <HStack spacing={'15px'} align={'center'}>
              <Link
                target="_blank"
                rel="noreferrer"
                href="https://www.instagram.com/veerge.io?igshid=MmVlMjlkMTBhMg=="
              >
                <Image
                  boxSize="1.5rem"
                  src="https://d1x2tneac0i3nn.cloudfront.net/instagram.svg"
                  alt="instagram"
                  loading="lazy"
                />
              </Link>
              <Link
                target="_blank"
                rel="noreferrer"
                href="https://www.linkedin.com/company/veerge/"
              >
                <Image
                  src="https://d1x2tneac0i3nn.cloudfront.net/linkedin.svg"
                  loading="lazy"
                  alt="linkedin"
                  boxSize="1.5rem"
                />
              </Link>
              <Link href="mailto:Hello@myxellia.io">
                <Image
                  src="https://d1x2tneac0i3nn.cloudfront.net/email.svg"
                  loading="lazy"
                  alt="mail"
                  boxSize="1.5rem"
                />
              </Link>
            </HStack>
            <HStack
              mt="14px"
              color={'#A3A3A3'}
              spacing={'30px'}
              className={neueHaas.className}
              textTransform="capitalize"
            >
              <Link
                target="_blank"
                rel="noreferrer"
                href={'https://veerge-support.myxellia.io/terms'}
              >
                <Text fontSize={'14px'} fontWeight={600}>
                  Terms of use{' '}
                </Text>
              </Link>
              <Link
                target="_blank"
                rel="noreferrer"
                href={'https://veerge-support.myxellia.io/privacy'}
              >
                <Text fontSize={'14px'} fontWeight={600}>
                  Privacy policy
                </Text>
              </Link>
            </HStack>
            <Text
              mt="10px"
              letterSpacing="-0.2px"
              fontWeight={400}
              color="#919191"
              className={neueHaas.className}
            >
              Copyright © {currentYear} Myxellia Inc. All rights reserved.
            </Text>
          </Box>
        </GridItem>
      </SimpleGrid>
    </Box>
  );
};

export default Footer;
