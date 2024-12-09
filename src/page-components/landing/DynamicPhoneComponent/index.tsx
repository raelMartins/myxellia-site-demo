import {sf_pro} from '@/fonts';
import {Box, Center, Flex, HStack, Stack, Text} from '@chakra-ui/react';
import moment from 'moment';
import Image from 'next/image';
import {useEffect, useState} from 'react';

const NotifIcon = ({boxSize = `24px`}) => {
  return (
    <Box width={boxSize} minWidth={boxSize} height={boxSize}>
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          x="0.697266"
          y="0.31958"
          width="22.6224"
          height="23.0574"
          rx="4.35046"
          fill="#191919"
        />
        <g clip-path="url(#clip0_1662_6363)">
          <g clip-path="url(#clip1_1662_6363)">
            <path d="M17.4027 6.40112H14.0557V9.74358H17.4027V6.40112Z" fill="white" />
            <path
              d="M14.0557 15.0021V9.78609L17.0936 12.8412C17.2854 13.0435 17.392 13.3096 17.4134 13.5864V18.3766H5.51758V6.41162H10.2823C10.5595 6.42227 10.826 6.53936 11.0285 6.73097L14.0664 9.78609H8.88589V15.0021H14.0557Z"
              fill="white"
            />
          </g>
        </g>
        <defs>
          <clipPath id="clip0_1662_6363">
            <rect
              width="9.6411"
              height="9.51424"
              fill="white"
              transform="translate(6.89355 7.2854)"
            />
          </clipPath>
          <clipPath id="clip1_1662_6363">
            <rect
              width="11.8852"
              height="11.9649"
              fill="white"
              transform="translate(5.51758 6.40088)"
            />
          </clipPath>
        </defs>
      </svg>
    </Box>
  );
};

export const DynamicPhoneComponent = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let index = 0;
    setInterval(() => {
      // if (index === 5) {
      //   index = 0;
      //   setCount(0);
      // } else {
      index++;
      setCount(index);
      // }
    }, 2000);
  }, []);

  return (
    <Center
      position={{base: `relative`, xl: `absolute`}}
      bottom={{base: `0px`, xl: `20px`}}
      left={{base: `0px`, xl: `-100px`}}
      width={{base: `337.24px`}}
      height={{base: `663.859px`}}
      zIndex={`1`}
    >
      <Stack
        color={{base: `rgba(255, 255, 255, 0.8)`}}
        textAlign={{base: `center`}}
        className={sf_pro.className}
        position={`absolute`}
        top={`80px`}
        left={`30px`}
        right={`30px`}
        gap={`3px`}
        zIndex={`1`}
      >
        <Text fontSize={{base: `20px`}} fontWeight={{base: `510`}}>
          {moment().format('dddd, MMMM Do')}
        </Text>
        <Text fontSize={{base: `100px`}} letterSpacing={{base: `-5px`}} fontWeight={{base: `700`}}>
          {moment().format('HH:mm')}
        </Text>
      </Stack>
      <Image
        src={`https://veerge-media.s3.us-east-1.amazonaws.com/myxellia_assets/phone_locksreen.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAVK34NDYCNI2L2G7V%2F20241209%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20241209T085329Z&X-Amz-Expires=300&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJGMEQCIBEP1LXoxw8S1309ldD%2FuS0LFAZIgfwzMEGSDJMFdWq%2BAiAp7rdiP3UJsaK%2F325MZQDaMKlSGgTz14yxJ2RkxGdJgCqBAwhyEAEaDDM2Njk0MzczOTM5NiIM%2FahLFkeDhNu8BXmhKt4ChhWdHMtaHg26iql7Gitdua8GIjSC02b1bqRRVPS1W5REJehQi%2FvTF225yZVKqLmd%2FTAvd18pGq8qqFLSe1ASsgy7V%2F%2BFu2C4YkgQBM6ad%2Bq%2FcJ1uULjcHDv%2F0DC2ZiVC2XrQM%2B96vjotonjzFB%2BtNgjrS07QFPrrQ7Lh97tp4UaaabSST6i2wF9vQuSgbVeLo2M5m%2FMknuMbp9fWWToW75heKa7zFqe4o72B9pTPQFe4FwAedPcIJkOVmVBZbiHMO8%2ByUyXVeBHHXSNji6BYEvzTPafBOPTiBSEFUEKoRHnvTwLehgSZnIJr6PwDH9uSudFVP%2B6VWCrGsLb3M9LnH%2FQpjndw0dCiQcrQSQOpdzDQY8d2jDzx2T6ZwspbeGaq752U1ZHzdGMLYTGB5xfZdN5xTS8MFLUN25PrBibUFldsvm9aCo9StPVVaRsJ9zOiwBGrRQHZjkDwAN8dl%2F0wm9jaugY6tALYdbaO%2FcHBq6vkFTkqiQ7NrZ5IkmjLtZbJcPq673GbbsU%2BiqJFiYmhiFHbimTsN4I4s%2FM9pSRh7dQWI0sAEz%2FuQsaDw%2FQfsMuKDK94EvK%2F4NjfojZ6%2Bf90o5vxXCA8Gl5C3utLYbmiPrMjKdz1mLbAAmpmM1f7Yix56bWDH5RZOVwgW%2FhaXyzXIUl%2Bfyh9J1rvt%2F2hbvRnEJodhZZb77Mr%2FkVwcKki1cDVrkOvlWFVPDarMg07nPPb3JVR33mFsoczQ9V6y7y36w2LkqDNVmenFE8FeIWvR1cipWUHKbksBMEfY5qSwvrF1Iw3CMO9W8yv2CQHc7fbZb1%2B1nAv6ChAIklU%2BIQGJV4WQ5BN0mt1K4NFFA%2Bq9UwnS3W6ngWXiB40MA7RKPZ%2B9yuAoxcv67hYp9nsgw%3D%3D&X-Amz-Signature=cc0efa6e62e6fda6171ce59c814a3dc5f188dcd49354776f64ed97982b419160&X-Amz-SignedHeaders=host&response-content-disposition=inline`}
        alt="dynamic Image"
        fill
        style={{objectFit: `contain`}}
      />
      <Stack
        position={`absolute`}
        bottom={`110px`}
        left={`37px`}
        right={`37px`}
        zIndex={`1`}
        gap={`8px`}
      >
        <Flex
          borderRadius={{base: `6.677px`}}
          background={{base: `rgba(255, 255, 255, 0.70)`}}
          backdropFilter={{base: `blur(45.50810623168945px)`}}
          gap={`8.5px`}
          p={`10px`}
          align={`flex-start`}
          w={`135%`}
          ml={`-17.5%`}
          opacity={count >= 5 ? `1` : `0`}
          transition={`.5s`}
        >
          <NotifIcon boxSize="32px" />
          <Stack gap={`1.3px`}>
            <HStack justify={`space-between`} gap={`10px`}>
              <Text
                color={`#000`}
                // fontFeatureSettings={'liga': `off`, 'clig' : `off`}
                fontSize={`12px`}
                fontWeight={`600`}
                lineHeight={`142%`} /*  */
                letterSpacing={`0.36px`}
              >
                How Did Your Inspection Go?{' '}
              </Text>
              <Text
                color={`#191919`}
                // font-feature-settings={`'liga' off, 'clig' off`}
                fontSize={`10px`}
                fontWeight={`400`}
                lineHeight={`170%`}
                opacity={`.65`}
                textAlign={`right`}
              >
                {moment().format('HH:mm')}
              </Text>
            </HStack>
            <Text
              color={`#191919`}
              // font-feature-settings={`'liga' off, 'clig' off`}
              fontSize={`12px`}
              fontWeight={`500`}
              lineHeight={`120%`}
              letterSpacing={`0.12px`}
              opacity={`.9`}
            >
              A little birdie mentioned you were on-site yesterday! We’d love to hear how your
              inspection went.
            </Text>
          </Stack>
        </Flex>
        <Flex
          borderRadius={{base: `6.677px`}}
          background={{base: `rgba(255, 255, 255, 0.70)`}}
          backdropFilter={{base: `blur(45.50810623168945px)`}}
          gap={`6px`}
          p={`9px`}
          align={`flex-start`}
          opacity={count >= 4 ? `1` : `0`}
          transition={`.5s`}
        >
          <NotifIcon />
          <Stack gap={`1.3px`}>
            <HStack justify={`space-between`} gap={`10px`}>
              <Text
                color={`#000`}
                // fontFeatureSettings={'liga': `off`, 'clig' : `off`}
                fontSize={`10px`}
                fontWeight={`600`}
                lineHeight={`121%`} /*  */
                letterSpacing={`0.3px`}
              >
                Discover The Prestige in Nairobi!
              </Text>
              <Text
                color={`#191919`}
                // font-feature-settings={`'liga' off, 'clig' off`}
                fontSize={`8px`}
                fontWeight={`400`}
                lineHeight={`150%`}
                opacity={`.65`}
                textAlign={`right`}
              >
                {moment().format('HH:mm')}
              </Text>
            </HStack>
            <Text
              color={`#191919`}
              // font-feature-settings={`'liga' off, 'clig' off`}
              fontSize={`8px`}
              fontWeight={`500`}
              lineHeight={`120%`}
              letterSpacing={`0.08px`}
              opacity={`.9`}
            >
              Hi Sam, did you hear about The Prestige, our latest development project in Nairobi,
              Kenya?
            </Text>
          </Stack>
        </Flex>
        <Flex
          borderRadius={{base: `6.677px`}}
          background={{base: `rgba(255, 255, 255, 0.70)`}}
          backdropFilter={{base: `blur(45.50810623168945px)`}}
          gap={`6px`}
          p={`9px`}
          align={`flex-start`}
          opacity={count >= 3 ? `1` : `0`}
          transition={`.5s`}
        >
          <NotifIcon />
          <Stack gap={`1.3px`}>
            <HStack justify={`space-between`} gap={`10px`}>
              <Text
                color={`#000`}
                // fontFeatureSettings={'liga': `off`, 'clig' : `off`}
                fontSize={`10px`}
                fontWeight={`600`}
                lineHeight={`121%`} /*  */
                letterSpacing={`0.3px`}
              >
                Payment Received
              </Text>
              <Text
                color={`#191919`}
                // font-feature-settings={`'liga' off, 'clig' off`}
                fontSize={`8px`}
                fontWeight={`400`}
                lineHeight={`150%`}
                opacity={`.65`}
                textAlign={`right`}
              >
                {moment().format('HH:mm')}
              </Text>
            </HStack>
            <Text
              color={`#191919`}
              // font-feature-settings={`'liga' off, 'clig' off`}
              fontSize={`8px`}
              fontWeight={`500`}
              lineHeight={`120%`}
              letterSpacing={`0.08px`}
              opacity={`.9`}
            >
              You&apos;ve received $700 in monthly rental income for your studio apartment at
              Millwak Apartments.
            </Text>
          </Stack>
        </Flex>
        <Flex
          borderRadius={{base: `6.677px`}}
          background={{base: `rgba(255, 255, 255, 0.70)`}}
          backdropFilter={{base: `blur(45.50810623168945px)`}}
          gap={`6px`}
          p={`9px`}
          align={`flex-start`}
          opacity={count >= 2 ? `1` : `0`}
          transition={`.5s`}
        >
          <NotifIcon />
          <Stack gap={`1.3px`}>
            <HStack justify={`space-between`} gap={`10px`}>
              <Text
                color={`#000`}
                // fontFeatureSettings={'liga': `off`, 'clig' : `off`}
                fontSize={`10px`}
                fontWeight={`600`}
                lineHeight={`121%`} /*  */
                letterSpacing={`0.3px`}
              >
                Payment Successful!
              </Text>
              <Text
                color={`#191919`}
                // font-feature-settings={`'liga' off, 'clig' off`}
                fontSize={`8px`}
                fontWeight={`400`}
                lineHeight={`150%`}
                opacity={`.65`}
                textAlign={`right`}
              >
                {moment().format('HH:mm')}
              </Text>
            </HStack>
            <Text
              color={`#191919`}
              // font-feature-settings={`'liga' off, 'clig' off`}
              fontSize={`8px`}
              fontWeight={`500`}
              lineHeight={`120%`}
              letterSpacing={`0.08px`}
              opacity={`.9`}
            >
              Your payment of $2,900 for the 3-bedroom unit at Astrid 2.0 has been completed.
            </Text>
          </Stack>
        </Flex>
        <Flex
          borderRadius={{base: `6.677px`}}
          background={{base: `rgba(255, 255, 255, 0.70)`}}
          backdropFilter={{base: `blur(45.50810623168945px)`}}
          gap={`6px`}
          p={`9px`}
          align={`flex-start`}
          opacity={count >= 1 ? `1` : `0`}
          transition={`.5s`}
        >
          <NotifIcon />
          <Stack gap={`1.3px`}>
            <HStack justify={`space-between`} gap={`10px`}>
              <Text
                color={`#000`}
                // fontFeatureSettings={'liga': `off`, 'clig' : `off`}
                fontSize={`10px`}
                fontWeight={`600`}
                lineHeight={`121%`} /*  */
                letterSpacing={`0.3px`}
              >
                Reminder!
              </Text>
              <Text
                color={`#191919`}
                // font-feature-settings={`'liga' off, 'clig' off`}
                fontSize={`8px`}
                fontWeight={`400`}
                lineHeight={`150%`}
                opacity={`.65`}
                textAlign={`right`}
              >
                {moment().format('HH:mm')}
              </Text>
            </HStack>
            <Text
              color={`#191919`}
              // font-feature-settings={`'liga' off, 'clig' off`}
              fontSize={`8px`}
              fontWeight={`500`}
              lineHeight={`120%`}
              letterSpacing={`0.08px`}
              opacity={`.9`}
            >
              Your payment of $3,000 for the 3-bedroom unit at Astrid 2.0 is overdue by 3 days.
              Please complete the payment to avoid any late fees.
            </Text>
          </Stack>
        </Flex>
      </Stack>
    </Center>
  );
};
