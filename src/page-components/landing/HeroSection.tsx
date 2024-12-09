import {Button2} from '@/ui-lib';
import {Box, Center, Flex, Stack, Text} from '@chakra-ui/react';
import Image from 'next/image';
import {DynamicPhoneComponent} from './DynamicPhoneComponent';
import {neueHaas} from '@/fonts';

export const HeroSection = () => {
  return (
    <Flex
      // px={{base: `24px`, lg: `64px`}}
      px={{base: `24px`, lg: `64px`}}
      pt={{base: ` 38px`, lg: `93px`}}
      bg={{base: `#F0F0F0`}}
      direction={{base: `column`, lg: `row`}}
      gap={{base: `32px`, lg: `100px`}}
      // data-background='#F0F0F0'
    >
      <Stack gap={{base: `24px`, lg: `20px`}}>
        <Text
          color={{base: `#424242)`}}
          fontSize={{base: `48px`, lg: `72px`}}
          fontWeight={{base: `400`}}
          lineHeight={{base: `115%`}}
          letterSpacing={{base: `1.44px`}}
          textTransform={{base: `uppercase`}}
          className={neueHaas.className}
        >
          <Box as={`span`} fontWeight={`700`} className={neueHaas.className}>
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
            src={`https://veerge-media.s3.us-east-1.amazonaws.com/myxellia_assets/hero_image_cropped.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAVK34NDYCNQWUD7U4%2F20241209%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20241209T084535Z&X-Amz-Expires=300&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJIMEYCIQC1CWMnPiAwFhj7Wfq8s2H3s2FmUoHdP3X7sFYlDXb1FwIhAMOEExD%2F%2FfcE1874KQgxTpKNkhR2JQb2kOuL1pJkBAPoKoEDCHIQARoMMzY2OTQzNzM5Mzk2IgwFLm68X6zYBNIrkssq3gI%2Bs0EwE5%2F0SHoHb%2Fhu8JETSdWm%2BRzSmQBGLKW94Z%2BP8glFS%2FLflfWzyt%2FKFJhVWsr1jMb4h5R7jD5HSXOdICwVqLDun5KS2wTLuaUa7F0k0BQYOxjGYA1BI5pz356cRASA8THHyQEM7TvojY0oqHM%2FmauDP2vpExwUpSVq5xE13bxIfWWPrc2p2i5AGJMyvsH32b9o0yfA4DSXlh87jnFDJjqMjtAr4jZaDQF1vivw3b%2BxA0HsUtZtKFvhRNKngEIRWXrS%2F5tVho%2BGIW%2Ftqyzdqx2OkImOkteSvMs%2BHcli8s1D4gfxCvhDC2GUJflYkH3knCb1TIQujS3Gak%2BXGN%2FY3CLilfdF1mx8aLU1%2BUuEKZMrW0EYpviIxmUPnS02laT8zO4lncviBUhefhNdnZz3R600HFFj9KF1NZm4mKBjA4ynZ4mEjWGXoHOiHIlIHUVL7lltR1CK%2F%2B02TjARlDCb2Nq6BjqyAqVlXBnZnD4laqzRkMF54knLstOmGJsPO0c4Pfr5qn%2FJfFxzaSNy8BAEjlrZ50v3313SX2AIYCHGUuiKhWqJfGUZNA4bIx4jaxhVi2mk9TZeFrpO1qg7ga1qY1p8Ov494yF44Dr4%2BabLbZ1cWE4YZ5dDmYomZQ9quZcyesKPFYYWDZpF%2BGi1gVvA9aBMH33sfqDMwiKVCniF4jQLeWBydMtmOlBJs2HZK1bXe2SaWtKp2%2BkOwojRWrUbjCzP%2F7Wci%2FUuLcbNEW1XWoz8scqA6jpA1w5N3zQ7ad7kdtuyAX0arP5bNgCtGGPZyj4%2F0dgNHwSG34wP8ZqOGb965Pr8C9uQh5nNn0YGTQNN9U5w1cwQXClf3QXMN3WFA3qgfWdOIgCwrmv6W0MJG72KUX9AV2Np%2FA%3D%3D&X-Amz-Signature=92395248f7952764a60420b08e1d82f5562f702646e3d4760c090584d2ad398f&X-Amz-SignedHeaders=host&response-content-disposition=inline`}
            alt={`hero image`}
            fill
            style={{objectFit: `cover`}}
          />
        </Center>
      </Flex>
    </Flex>
  );
};
