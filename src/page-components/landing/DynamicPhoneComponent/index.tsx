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
      if (index === 5) {
        index = 0;
        setCount(0);
      } else {
        index++;
        setCount(index);
      }
    }, 1300);
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
        className="time_font"
        fontFamily={{base: 'SF Pro Display'}}
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
        src={`/temp_local_images/phone_locksreen.png`}
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
