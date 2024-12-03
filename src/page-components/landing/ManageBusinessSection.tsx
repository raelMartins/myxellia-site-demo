import {Button2} from '@/ui-lib';
import {Box, Flex, Stack, Text} from '@chakra-ui/react';
import Image from 'next/image';
import {useEffect, useState} from 'react';

export const ManageBusinesSection = () => {
  const [slide, setSlide] = useState(0);

  useEffect(() => {
    let index = 1;
    setInterval(() => {
      if (index === 3) {
        index = 1;
        setSlide(1);
      } else {
        index++;
        setSlide(index);
      }
    }, 2000);
  }, []);

  return (
    <Flex
      p={{lg: `135px 64px`}}
      gap={{base: `0px`, lg: `105px`}}
      align={`center`}
      direction={{base: `column`, lg: `row`}}
    >
      <Box
        flex={`1`}
        order={{base: `2`, lg: `1`}}
        // padding={{base: `16px 150px 84px`}}
        padding={{base: `16px 0px 84px`}}
        aspectRatio={{base: `655 / 830`}}
        w={`100%`}
        bgImage={`https://s3-alpha-sig.figma.com/img/b227/5cc9/cd4dd21c0b57e7155c935daf3688c34d?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=EG8M3W3oRisYIwMTIgoZCHNhbWILiI0nw1jZkVMsnn9GnkpNKtn82i3mokzNuNZqcJ3vsqiEMoDURQGk93y1F~GzZo~kwT4jjqSi3eO9A03MwP99UUFnAe76agULdxU7XPUM9sveifvVX2g~hKJ5cy932TJq-JEdijT2aWaIrKLzPwc8ONKI~M8XSk8PF2yShjtogM58iEAKMNZr~0Dv~82r91VtJ57nZ5D8Ca7yqA9OmpULFRyqyV6EI9JIOsEa29jzaayeGVpA3Q5MK8O8c0-U3LqYQb1wh9GRynm6rTLlqtYdErEi1mPIUIYPWplm8VsP6qZA8-5RqeSaaD~O5A__`}
        bgPosition={`center`}
        bgSize={`cover`}
        bgRepeat={`no-repeat`}
        overflow={`hidden`}
      >
        <Box
          position={`relative`}
          w={{base: `${(354 / 655) * 100}%`}}
          mx={`auto`}
          p={`15px`}
          aspectRatio={{base: `354 / 730`}}
          borderRadius={{base: `15.689px`}}
          border={{base: `1px solid rgba(255, 255, 255, 0.10)`}}
          background={{base: `rgba(255, 255, 255, 0.10)`}}
          backdropFilter={{base: `blur(39.22222137451172px)`}}
        >
          <Box
            position={`relative`}
            w={`100%`}
            h={`100%`}
            bg={`#0D0D0D`}
            aspectRatio={{base: `354 / 730`}}
            borderRadius={{base: `9px`}}
            overflow={`hidden`}
          >
            <Image
              src={`https://s3-alpha-sig.figma.com/img/c313/2b9b/d47cb54902f56d382e60ed3b5723eb96?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=HjifB3Ixn9hTumvYOwkOZndI24ch8ykyfGRhfv-IM0fkhOYEekTt0GANqTJehAV5Ypdds5uH59jl1hfKAMBSB7SnDsiPeaqJ7y5QgQHGeT3Quv~YIbSd3qhXc-o9a9MhFw6N-hm2Q1OlYeti6Csd5K2OzhCrlkbE9y1RKdQizuxCicfSZ-RYTAPo6VzFWIjDwSlpFwjQpaIm2ci75qaRu7tHWuO0LKMGUDpi-zISl-DjTBalOy~cfN8eEBPCJdDvV0dxC7tbiWYXzK3Wjg-0Vcz2Mug9vFJsgnXzUxZaFAjUrHenCyVIgCerFqmLjz3PuWEeA9llgDiTM1knyRqHbA__`}
              alt={`image 1`}
              fill
              style={{objectFit: `contain`, opacity: slide === 1 ? `1` : `0`, transition: '.5s'}}
            />
            <Image
              src={`/temp_local_images/manage_business_account_screen.png`}
              alt={`image 2`}
              fill
              style={{objectFit: `contain`, opacity: slide === 2 ? `1` : `0`, transition: '.5s'}}
            />
            <Image
              src={`/temp_local_images/manage_business_user_screen.png`}
              alt={`image 3`}
              fill
              style={{objectFit: `contain`, opacity: slide === 3 ? `1` : `0`, transition: '.5s'}}
            />
          </Box>
        </Box>
      </Box>
      <Stack
        flex={`1`}
        gap={{base: `24px`, lg: `40px`}}
        p={{base: `80px 24px`}}
        order={{base: `1`, lg: `2`}}
      >
        <Text
          fontSize={{base: `40px`, lg: `62px`}}
          fontWeight={{base: `500`}}
          lineHeight={{base: `120%`, lg: `133%`}}
        >
          Manage your business like a pro
        </Text>
        <Text
          fontSize={{base: `18px`, lg: `20px`}}
          fontWeight={{base: `400`}}
          lineHeight={{base: `normal`, lg: `140%`}}
          mb={{base: `24px`, lg: `0px`}}
        >
          Capture leads, gain insights with detailed reports, and automate your business—all
          accessible from your desktop or mobile with the Veerge app.
          <br />
          Enjoy seamless, synchronised management at your fingertips.
        </Text>
        <Button2 bg={`#141414`} color={`#ffffff`}>
          Get started
        </Button2>
      </Stack>
    </Flex>
  );
};
