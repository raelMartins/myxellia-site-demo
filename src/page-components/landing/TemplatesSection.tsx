import {Box, Center, HStack, Stack, Text, VStack} from '@chakra-ui/react';
import Image from 'next/image';
import {FaArrowRightLong} from 'react-icons/fa6';

export const TemplatesSection = () => {
  const templates = [
    {
      url: ``,
      image: `https://s3-alpha-sig.figma.com/img/7874/b983/884f2a76a68a393929f23e9fd877fd60?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=SdfdAzk541R9Rd6qYomc4yhsNa5ARFAH2wTDgjYmGTFHsJ5VXDfLZ7GmPfuL3vb8th3xSDBv~pV02Q46wNh-9IA54x6lPyT6ChdI06-uTsQHfy28CWrSXa5a2EoRoS368HYXJcjWw6sQ8qr1nB2rI2XwXPhWHoHwNvKeGN27BUupSecy0qTZK9Td7gVOy9y4EzivPsqtXbeQ0Np7GsTYrFGpFwKvS-3yOLobPsIdYDUyG3zwI7FMxix8nszr24wUEBhvg8hqgIlqakSVEhzXM5HnMGw4UOkMD-r5bIj44HmvfGozYWegvwbCC774cdTO1yw30HWeKjwQN71He5xsdA__`,
      title: 'Brochure'
    },
    {
      url: ``,
      image: `https://s3-alpha-sig.figma.com/img/82df/5a96/7f5d7b6b3b0950837a0a949d609e5f9f?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=B4uVSV2eOqyMUG09334Q~uB22E5Xbz5A0rPeUbedzuMLg68MAWvjTN0eAvDRt0x22OabDCSaf8hz7kPJ5yhnAjJ1q7UxkvDIEzYVPE1Hfmpv5YKv1ZTJSozkZey4wnBM42BOIA0-4znQtWNnO80IEUyz-wBt1mfRbbL71w~sjYcV~ilkX64yTSp9twhA7nRH7XZCR3t13p1zzeNEnIewEYdxJ9na8lJSSfsLyxh8jbSIJPHmYdA6J6ER4I~KYvSMJh-qdF3Z3R9a3HJAApKo4vTAVywJFe5sZ~ZwG0wULlQbhJGOuueZS2NC5C8oj1js1J4gknvPVwkKOe5b6yBEWQ__`,
      title: 'Suburban Serenity'
    },
    {
      url: ``,
      image: `https://s3-alpha-sig.figma.com/img/76f7/9139/deb3742519ab61c8714d4b01d6e32df9?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=FuGZrQGZAjPiU6n91mrUnTABuJFOOMr15tf8pKjddU03tiz9~Nw254h1L3mvt6LKSXkBRabpyV8PGy7856o75qPqrErqo-al-C02euWWxhMAoHwiOmwOCY-WjF4FughF0aLLfoN1JSPJrsrguSjw1xKMfRqX28bgYbIZWOUIezrLcvVeBAINIFVhUqbLJ6ks~GQ3lLTPLnsx7Z8SkAKkgpMA4cNsoyF7-fJVTHNlqIR4tL-5y37q098dhpfxRa6tWFBg6DI80vJCpzDNt~1qf-ldWMSzprGLegNJTfNipLzcA3oAZmm5lJJXDd-UZq0UyM6i3~GG8IRSbAamcV34Fw__`,
      title: 'Mountain Lodge'
    },
    {
      url: ``,
      image: `https://s3-alpha-sig.figma.com/img/9dad/1d9d/f70db05a830e931f2d285b43dc75ffc7?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=JhQ0EzekREYcofYfaBoywMy7AJTTHFYNr-xrcN8bIYLppARyhqGbAUdMN2GQKiYEXzk~7NiaHhRjVj~nsfnMpzjltwrU8jKZIGS3~Ds49L119eZcCoSYLeb~9NsdURvrW8dAzME51AMQ09MjdtHn92Q3N59qrxbVr~CbrVDWskaQ4dt1tKSP4c4P~g2CmVF3Wahyj4wlgyPVdg7a1ECpR9x3-M5lWFoIBFXq6U3hqi72UFM5Q1VYFLnHHJTbTxVabox9MCAmPppXWT4uG2fLiHoHEJfHDzVUsi3QxwWOwBJk~Bss4uQ~1UhscRI74sHd03rtRaL294YV8R7KhncIkg__`,
      title: 'Scandinavian Elegance'
    },
    {
      url: ``,
      image: `https://s3-alpha-sig.figma.com/img/7019/9836/c7083342107223ab84ae48fac7d9dea3?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=M8JmyZhN1OWzr4~COxv8~NXTIARXRF8JY0PVR6JPrf~iV-ajCSsgAorzWtDHvh0rgc8biLooqCZV-r5EXTP3tUN3WN9fnKYzYvK4WtMkwkTF8~85-tAPtVsu~3jkwzaY1zd6FyxjY0K0CjMI09MQ7qNM2JM9clSzmZQ71AAIpVI81fex8W6OwJ-6SFqeNo8pzaEy1UJBZ3IzbREyEQWblpe3aY46zOPp5dH0xLfJgpuFGUtuUUS17qx5FADQriInlQT~uRWEAlNLzdpYuMHQqa9J~qyt6kMKBC4I4nGiB0Wc7LeWNmhM1sCCjhlAciNY2zaAiNm2X5H6UiK-vfstFQ__`,
      title: 'Industrial Loft'
    }
  ];
  return (
    <Stack
      gap={{base: `50px`, lg: `100px`}}
      p={{base: `60px 24px`, lg: `120px 64px`}}
      background={`#000000`}
      color={`#ffffff`}
    >
      <VStack align={`stretch`} gap={{base: `24px`, lg: `120px`}}>
        <Text
          fontSize={{base: `36px`, lg: `160px`}}
          fontWeight={{base: `500`, lg: `400`}}
          lineHeight={{base: `133%`, lg: `93%`}}
          maxW={{base: `829px`}}
          letterSpacing={{base: `0.72px`, lg: `auto`}}
        >
          Connect in a whole new way
        </Text>

        <Text
          fontSize={{base: `18px`, lg: `56px`}}
          fontWeight={{base: `400`}}
          lineHeight={{base: `100%`}}
          maxW={{base: `100%`, lg: `543px`}}
        >
          Templates that set you up for success{' '}
        </Text>
        <Box
          overflow={`auto`}
          css={{
            '::-webkit-scrollbar': {
              display: 'none'
            }
          }}
        >
          <HStack gap={{base: `24px`, lg: `57px`}}>
            {templates?.map((el, i) => (
              <Stack gap={`31px`} key={i}>
                <Center
                  position={`relative`}
                  width={{base: `346px`, lg: `743px`}}
                  height={{base: `223.5px`, lg: `480px`}}
                >
                  <Image src={el?.image} alt={`L`} fill style={{objectFit: `cover`}} />
                </Center>

                <Text
                  fontSize={{base: `14px`}}
                  fontWeight={{base: `400`}}
                  lineHeight={{base: `100%`}}
                >
                  {el?.title}{' '}
                  <Box as={`span`} textDecor={`underline`}>
                    →
                  </Box>
                </Text>
              </Stack>
            ))}
          </HStack>
        </Box>
      </VStack>
    </Stack>
  );
};
