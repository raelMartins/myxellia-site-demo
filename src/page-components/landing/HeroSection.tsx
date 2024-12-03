import {Button2} from '@/ui-lib';
import {Box, Center, Flex, Stack, Text} from '@chakra-ui/react';
import Image from 'next/image';
import {DynamicPhoneComponent} from './DynamicPhoneComponent';

export const HeroSection = () => {
  return (
    <Flex
      // px={{base: `24px`, lg: `64px`}}
      px={{base: `24px`, lg: `64px`}}
      pt={{base: ` 38px`, lg: `93px`}}
      bg={{base: `#F0F0F0`}}
      direction={{base: `column`, lg: `row`}}
      gap={{base: `32px`, lg: `100px`}}
    >
      <Stack gap={{base: `24px`, lg: `20px`}}>
        <Text
          color={{base: `#424242)`}}
          fontSize={{base: `48px`, lg: `72px`}}
          fontWeight={{base: `400`}}
          lineHeight={{base: `115%`}}
          letterSpacing={{base: `1.44px`}}
          textTransform={{base: `uppercase`}}
        >
          <Box as={`span`} fontWeight={`700`}>
            CREATE AN APPLICATION
          </Box>{' '}
          FOR YOUR REAL ESTATE COMPANY
        </Text>
        <Text
          color={{base: `#424242`}}
          fontSize={{base: `24px`}}
          fontWeight={{base: `500`}}
          lineHeight={{base: `140%`}}
        >
          Try for free as long as you’re a property development company.
        </Text>
        <Box mt={{base: `0px`, lg: `24px`}}>
          <Button2 variation="primary">Get started for free</Button2>
        </Box>
        <Text
          color={{base: `#525252`}}
          fontSize={{base: `16px`}}
          fontWeight={{base: `500`}}
          lineHeight={{base: `200%`}} /* 200% */
        >
          No credit card required.
        </Text>
      </Stack>
      <Flex
        w={{lg: `840px`}}
        position={`relative`}
        align={`flex-end`}
        justify={{base: `center`, lg: `flex-start`}}
      >
        <DynamicPhoneComponent />
        <Center
          position={`relative`}
          aspectRatio={`524 / 731`}
          w={`550px`}
          // minW={`524px`}
          display={{base: `none`, xl: `flex`}}
        >
          <Image
            // src={`https://s3-alpha-sig.figma.com/img/f421/933f/23a5ac32891eb4a0a4fdc3a5f6349b04?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=C3bY1kf7BveEHPAPia24V6UUPw0Q5N81eCH1yryhWUrTdJSYcDEltOEE155PW15qSsoAPdoo2RPhmURlmWLuRuphsLCrm-zJ2UB7bBteYWpewEdj51bIDy37CHs6LWGcqE6u8R-ThFMKpHbBgxkgv4tQUgmr6aGaB6bTfQ53pRnJ1y2P42CnUzBZMf8foX73Tx6Ap35El2qN3y19BXo-06-hyxxkyPBzW13EJ0xDFlvhdv3R8AkXqCVJfyaCcTLAN6PTVXtNA6Zq0wQUxBM1a5MMwRgFvXyKa7HIAcmI6e7aynw6uY9Xj8stwk~-wPwxZf83CmfhEtHXUNJEKd8SPQ__`}
            // src={`/temp_local_images/hero_image.jpg`}
            src={`/temp_local_images/hero_image_cropped.png`}
            alt={`hero image`}
            fill
            style={{objectFit: `cover`}}
          />
        </Center>
      </Flex>
    </Flex>
  );
};
