import {AspectRatio, Box, Flex, Heading, Image, Stack, Text} from '@chakra-ui/react';
import BoxContainer from '../../../../components/BoxContainer';
import {useEffect, useState} from 'react';
import useInView from '@/ui-lib/ui-lib.hooks/useInView';
import {neueHaas} from '@/fonts';

export const EntryLevel = () => {
  const [isOpen, setIsOpen] = useState<number>(0);
  const inView = useInView('entryLevel');
  const videoView = useInView('videoView');
  const [screenHeight, setScreenHeight] = useState<number>(0);

  useEffect(() => {
    setScreenHeight(window.innerHeight);

    window.addEventListener('resize', () => {
      setScreenHeight(window.innerHeight);
    });
  }, []);

  console.log(screenHeight);
  return (
    <Box
      bg="#1C1D21"
      rounded={{base: '0.5rem', xl: '.9375rem'}}
      w="full"
      fontFamily=""
      pt={{base: '1.5rem', xl: '3.67rem'}}
      px={{base: '.9375rem', xl: '2.8rem'}}
      pb={{base: '1.5rem', xl: '2.11rem'}}
      minH="46.54rem"
    >
      <Stack gap={{base: '1.5rem', xl: '4.25rem'}} color="#FFF">
        <Flex
          direction={{base: 'column', xl: 'row'}}
          align="start"
          justify="space-between"
          gap="1.25rem"
        >
          <Heading
            color="#fff"
            className={neueHaas.className}
            fontSize={{base: '2rem', lg: '3rem', xl: '4rem'}}
            fontWeight={400}
            lineHeight={{base: '2rem', xl: '4rem'}}
            maxW={{xl: '23.25rem'}}
            whiteSpace={{md: 'nowrap', xl: 'unset'}}
          >
            Our minimum viable offering
          </Heading>
          <Stack gap="1rem" maxW={{base: 'full', xl: '25rem', '2xl': '30rem'}}>
            <Text color="#FFF">
              This is a simple & intuitive interface that focuses on delivering core functionality
              that addresses specific pain point for your clients with as few features as possible.
              This lets you test before investing in full-scale development.
            </Text>
            <Text textDecoration="underline" color="#FFF">
              Read docs
            </Text>
          </Stack>
        </Flex>
        <Stack
          direction={{base: 'column', xl: 'row'}}
          align="start"
          justify="space-between"
          gap="1.425rem"
        >
          <Stack w="full" gap="10px" maxW={{xl: '25.875em'}}>
            {ENTRYINFO?.map((item, idx) => {
              return (
                <BoxContainer
                  info={item}
                  key={idx}
                  isOpen={isOpen === idx}
                  onClick={() => setIsOpen(idx)}
                />
              );
            })}
          </Stack>
          <Box
            id="entryLevel"
            bg={inView ? `url(https://d1x2tneac0i3nn.cloudfront.net/bgImage.png)` : '#1C1D21'}
            rounded="0.5rem"
            w="full"
            h={{base: '15rem', sm: '21.89rem', xl: '28.8rem'}}
            bgSize="cover"
            position="relative"
            overflow="hidden"
            p={{
              base: '17.657px 16.829px 17.254px 16.362px;',
              xl: '34.029px 32.433px 33.253px 31.535px'
            }}
            bgPos="center"
            maxW={{xl: '50rem'}}
          >
            <Box
              position="relative"
              overflow="hidden"
              id="videoView"
              maxW={{base: '80%', md: '67.5%', xl: '97.5%', '2xl': '80%'}}
              w="100%"
              left="50%"
              top={{base: '60%', md: '55%'}}
              transform="translate(-50%, -50%)"
              objectFit="contain"
              bg="rgba(0, 0, 0, 0.3)"
              p=".75rem"
              rounded="8px"
            >
              {videoView && (
                <AspectRatio ratio={{base: 266 / 160, md: 514 / 308}}>
                  <video
                    style={{
                      borderRadius: '8px',
                      pointerEvents: 'none'
                    }}
                    autoPlay
                    loop
                    muted
                    src="https://d1x2tneac0i3nn.cloudfront.net/-09c4-453b-b3b7-f00be87a249b.mp4"
                  >
                    Your browser does not support the video
                  </video>
                </AspectRatio>
              )}
            </Box>
          </Box>
        </Stack>
      </Stack>
    </Box>
  );
};

export const FractionalOwners = () => {
  return (
    <Box
      bg="#E0D8EC"
      rounded={{base: '0.5rem', xl: '.9375rem'}}
      w="full"
      fontFamily=""
      pt={{base: '1.5rem', xl: '3.67rem'}}
      px={{base: '.9375rem', xl: '2.8rem'}}
      pb={{base: '1.5rem', xl: '2.11rem'}}
      minH="52.5rem"
    >
      <Stack gap={{base: '1.5rem', xl: '4.25rem'}}>
        <Flex
          direction={{base: 'column', xl: 'row'}}
          align="start"
          justify="space-between"
          gap=".25rem"
        >
          <Heading
            className={neueHaas.className}
            fontSize={{base: '2rem', lg: '3rem', xl: '4rem'}}
            fontWeight={400}
            lineHeight={{base: '2.8rem', xl: '4rem'}}
            maxW={{xl: '33.9rem'}}
          >
            Fractional ownership as a service
          </Heading>
          <Stack gap="1rem" maxW={{base: 'full', xl: '25rem', '2xl': '26.5rem'}}>
            <Text color="#606060">
              This is a simple & intuitive interface that focuses on delivering core functionality
              that addresses specific pain point for your clients with as few features as possible.
              Unlock a new market by dividing property ownership into smaller, affordable units,
              giving individuals with lower purchasing power an opportunity to participate.ible.
              This lets you test before investing in full-scale development.
            </Text>
            <Text textDecoration="underline" fontSize="14px" fontWeight={500}>
              Read documentation
            </Text>
          </Stack>
        </Flex>
        <Flex
          direction={{base: 'column', xl: 'row'}}
          align="start"
          justify="space-between"
          gap="1rem"
        >
          <Image
            src="https://d1x2tneac0i3nn.cloudfront.net/Item.png"
            alt="fractional owners"
            loading="lazy"
            width="100%"
            height="100%"
            objectFit="cover"
            rounded="12.75px"
            maxW={{xl: '60%'}}
            minH={{base: '354.179px', lg: '577px'}}
            maxH={{base: '354.179px', lg: '577px'}}
          />
          <Box
            bg="#1B2A41"
            rounded="1.5rem"
            position="relative"
            w="full"
            h="full"
            overflow="hidden"
            minH={{base: '354.179px', lg: '577px'}}
            maxH={{base: '354.179px', lg: '577px'}}
          >
            <Image
              src="https://d1x2tneac0i3nn.cloudfront.net/a334e558f3c4aca5100609c2c47621ff.png"
              alt="fraction preview"
              loading="lazy"
              position="absolute"
              w="100%"
              h={{base: '40rem', xl: '60rem'}}
              left="50%"
              top={{base: '70%', xl: '65%'}}
              transform="translate(-50%, -50%)"
              objectFit="cover"
            />
          </Box>
        </Flex>
      </Stack>
    </Box>
  );
};

export const FractionalJunior = () => {
  return (
    <Box
      rounded={{base: '0.5rem', xl: '.9375rem'}}
      w="full"
      fontFamily=""
      pt={{base: '1.5rem', xl: '3.67rem'}}
      px={{base: '.375rem', xl: '2.8rem'}}
      pb={{base: '1.5rem', xl: '2.11rem'}}
    >
      <Stack gap={{base: '1.5rem', xl: '4.25rem'}} color="#FFF">
        <Flex
          direction={{base: 'column', xl: 'row'}}
          align="start"
          justify="space-between"
          gap=".75rem"
        >
          <Heading
            className={neueHaas.className}
            fontSize={{base: '2rem', lg: '3rem', xl: '4rem'}}
            fontWeight={400}
            lineHeight={{base: '2rem', xl: '4rem'}}
            maxW={{xl: '34rem'}}
          >
            Fractional Junior
          </Heading>
          <Stack gap="1rem" maxW={{base: 'full', xl: '25rem', '2xl': '30rem'}}>
            <Text>
              With Fractional Junior, parents can come together to invest in fractions of a
              property, pooling their resources to create a secure financial future for their
              children, much like a long-term investment plan for their growth and well-being.
            </Text>
            <Text textDecoration="underline" fontSize="14px" fontWeight={500}>
              Read documentation
            </Text>
          </Stack>
        </Flex>
        <Stack
          direction={{base: 'column', xl: 'row'}}
          align="stretch"
          justify="space-between"
          gap="1.425rem"
          h="full"
        >
          <Stack w="full" gap="1.4rem" minW={{xl: '23.575em'}}>
            {FRACTIONALINFO?.map((info, idx) => {
              return (
                <Stack
                  bg={info?.bg}
                  w="full"
                  key={idx}
                  rounded="15px"
                  color="#000"
                  p={{base: '10.378px', xl: '32px 45.985px 60.33px 26px'}}
                  h={{base: '11.07rem', xl: '12.58rem'}}
                  gap="6px"
                  justify={{base: 'center', xl: 'unset'}}
                >
                  <Text fontWeight={500} fontSize="1.125rem">
                    {info?.label}
                  </Text>
                  <Text fontSize="14px">{info?.description}</Text>
                </Stack>
              );
            })}
          </Stack>
          <Image
            src="https://d1x2tneac0i3nn.cloudfront.net/Fractional Junior.png"
            alt="fractional junior"
            loading="lazy"
            width="100%"
            height="auto"
            objectFit="cover"
            rounded="12.75px"
            maxW={{xl: '60%'}}
          />
        </Stack>
      </Stack>
    </Box>
  );
};

export const SecondaryMarket = () => {
  const inView = useInView('secondaryMarket');

  return (
    <Box
      id="secondaryMarket"
      bg={
        inView
          ? `url(https://d1x2tneac0i3nn.cloudfront.net/499e85c037a181580d03011b16c9257e.jpeg)`
          : '#1C1F6C'
      }
      rounded={{base: '0.5rem', xl: '.9375rem'}}
      w="full"
      fontFamily=""
      pt={{base: '1.5rem', xl: '3.18rem'}}
      px={{base: '.9375rem', xl: '2.8rem'}}
      pb={{base: '1.5rem', xl: '2.11rem'}}
      h="640.515px"
      bgSize="cover"
      position="relative"
      overflow="hidden"
    >
      <Stack flex={1} h="full" justify={{base: 'center', xl: 'start'}} gap=".75rem" color="#fff">
        <Heading
          className={neueHaas.className}
          fontSize={{base: '2rem', lg: '3rem', xl: '4rem'}}
          fontWeight={400}
          lineHeight={{xl: '4rem'}}
          maxW={{xl: '34rem'}}
          m={0}
        >
          Secondary Marketplace
        </Heading>
        <Stack gap="1rem" maxW={{base: 'full', xl: '25rem', '2xl': '30rem'}}>
          <Text>
            Offer your clients a dynamic marketplace that enables them to seamlessly sell
            properties, fractional ownership shares, or timeshares they’ve acquired through you.
            This added flexibility empowers clients to manage their investments and realize value on
            their terms.
          </Text>
          <Text textDecoration="underline" fontSize="14px" fontWeight={500}>
            Read documentation
          </Text>
        </Stack>
        <Image
          src="https://d1x2tneac0i3nn.cloudfront.net/Container.png"
          alt="gradient"
          loading="lazy"
          position="absolute"
          w="100%"
          h={{base: '227.429px', xl: '100%'}}
          maxW={{base: '13.04rem', xl: '587.895px'}}
          top={0}
          right={0}
        />
      </Stack>
    </Box>
  );
};

export const FintechService = () => {
  const [isOpen, setIsOpen] = useState<number>(0);
  const inView = useInView('fintechService');

  return (
    <Box
      bg="#1C1D21"
      rounded={{base: '0.5rem', xl: '.9375rem'}}
      w="full"
      fontFamily=""
      pt={{base: '1.5rem', xl: '3.67rem'}}
      px={{base: '.9375rem', xl: '2.8rem'}}
      pb={{base: '1.5rem', xl: '2.11rem'}}
    >
      <Stack gap={{base: '1.5rem', xl: '4.25rem'}} color="#FFF">
        <Flex
          direction={{base: 'column', xl: 'row'}}
          align="start"
          justify="space-between"
          gap="1.25rem"
        >
          <Heading
            className={neueHaas.className}
            fontSize={{base: '2rem', lg: '3rem', xl: '4rem'}}
            fontWeight={400}
            lineHeight={{base: '2rem', xl: '4rem'}}
            maxW={{xl: '23.25rem'}}
            color="#FFF"
          >
            Fintech as a service
          </Heading>
          <Stack gap="1rem" maxW={{base: 'full', xl: '25rem', '2xl': '30rem'}}>
            <Text>
              An all-in-one suite of financial and payment solutions designed to streamline your
              business operations. This comprehensive toolkit enables you to handle all
              payment-related needs, optimize revenue management, and explore or introduce
              innovative business models with ease.
            </Text>
            <Text textDecoration="underline" fontSize="14px" fontWeight={500}>
              Read documentation
            </Text>
          </Stack>
        </Flex>
        <Stack
          direction={{base: 'column', xl: 'row'}}
          align="stretch"
          justify="space-between"
          gap="1.425rem"
          h="full"
        >
          <Stack w="full" gap="10px" maxW={{xl: '21.875em'}}>
            {FINTECHINFO?.map((item, idx) => {
              return (
                <BoxContainer
                  info={item}
                  key={idx}
                  isOpen={isOpen === idx}
                  onClick={() => setIsOpen(idx)}
                />
              );
            })}
          </Stack>
          <Box
            id="fintechService"
            bg={
              inView
                ? `linear-gradient(rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0.75)), url(https://d1x2tneac0i3nn.cloudfront.net/Desktop-84.png)`
                : '#1C1D21'
            }
            bgGradient="rgba(0, 0, 0, 0.75)"
            rounded="0.5rem"
            w="full"
            fontFamily=""
            pt={{base: '1.5rem', xl: '3.18rem'}}
            px={{base: '.9375rem', xl: '2.8rem'}}
            pb={{base: '1.5rem', xl: '2.11rem'}}
            h="461.25px"
            bgSize="contain"
            position="relative"
            overflow="hidden"
          >
            <Image
              src="https://d1x2tneac0i3nn.cloudfront.net/PaymentModal.png"
              alt="fraction preview"
              loading="lazy"
              position="absolute"
              w="100%"
              h="100%"
              left="50%"
              top="50%"
              transform="translate(-50%, -50%)"
              objectFit="contain"
            />
          </Box>
        </Stack>
      </Stack>
    </Box>
  );
};

const ENTRYINFO = [
  {
    label: 'Portfolio',
    description:
      'This empowers your clients to effortlessly track all their investments & monitor payment progress  in a user-friendly way'
  },
  {
    label: 'Documents',
    description:
      'Empowering your clients with easy, fingertip access to all documents related to their purchase.'
  },
  {
    label: 'Schedule Inspection',
    description:
      'Clients can schedule inspections and share feedback on their experience, helping you identify opportunities for improvement.'
  },
  {
    label: 'Real Time Allocation',
    description: `Empowers buyers with clear visualization of their apartment's location, enhancing informed decision-making, especially for off-plan or remote purchases.`
  }
];

const FRACTIONALINFO = [
  {
    bg: '#DEFF00',
    label: 'Co-ownership',
    description:
      "Co-ownership provides a structured way for clients to purchase property alongside family or friends, with ownership shares allocated by percentage. It's like a streamlined, split-payment solution for real estate."
  },
  {
    bg: '#FFF',
    label: 'Timeshares',
    description:
      'This is a shared ownership model commonly used for vacation properties, where multiple individuals purchase the right to use a property for a specific period each year.'
  }
];

const FINTECHINFO = [
  {
    label: 'Instant Payment Validation',
    description:
      'This enables your property subscribers to set ip bank withdrawals according to their payment plans or financial circumstances, whether on a monthly, weekly, or even daily basis.'
  },
  {
    label: 'International Payments',
    description:
      'Accept payments anytime, anywhere, without limitations. With Myxellia, your customers can make payments from wherever they are, freeing your property development company from geographical constraints.'
  },
  {
    label: 'Autopay',
    description:
      'Effortlessly automate recurring deposits with Autopay. Allow your subscribers to set up automatic debits from their bank accounts that align with their payment plans—monthly, weekly, or daily.'
  },
  {
    label: 'Wallets',
    description:
      'Elevate your transactions with our all-in-one in-app wallet. This enables your clients to make seamless payments, while you can process dividend payments directly into their wallets.'
  },
  {
    label: 'Locked Savings',
    description:
      'Empower your clients to secure their future homes with locked savings toward property purchases. With this feature, your customers can save consistently and confidently with you, knowing their funds are dedicated solely to acquiring their dream property'
  }
];
