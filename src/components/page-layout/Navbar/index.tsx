import {Button2} from '@/ui-lib';
import {ChevronDownIcon, HamburgerIcon} from '@chakra-ui/icons';
import {
  Box,
  Center,
  Drawer,
  DrawerCloseButton,
  DrawerContent,
  DrawerOverlay,
  Flex,
  HStack,
  Link,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Stack,
  Text,
  useDisclosure
} from '@chakra-ui/react';
import {ManageBusinessSVG, MyxelliaLogo, OfferingSVG, PaymentSVG} from './svgs';
import {neueHaas} from '@/fonts';
import {useEffect, useState} from 'react';

const SolutionsMenu = ({closeDrawer = () => {}, dark = false}) => {
  return (
    <Menu>
      <MenuButton>
        <HStack
          color={{base: dark ? '#FFF' : '#424242'}}
          cursor={`pointer`}
          fontSize={{base: `16px`}}
          fontWeight={{base: `600`}}
          lineHeight={{base: `150%`}}
          p={`8px`}
          gap={`8px`}
        >
          <Text>Solutions</Text>
          <ChevronDownIcon />
        </HStack>
      </MenuButton>
      <MenuList maxW={`335px`}>
        <Stack gap={`24px`}>
          <MenuItem
            as={Link}
            textDecor={`none`}
            _hover={{textDecor: `none`}}
            href={`/solutions/our-offering`}
            onClick={closeDrawer}
          >
            <HStack align={`flex-start`} gap={`8px`}>
              <OfferingSVG />
              <Stack gap={`4px`} flex={`1`}>
                <Text
                  color={`#292929`}
                  fontSize={`16px`}
                  fontWeight={`600`}
                  lineHeight={`150%`} /*  */
                  _hover={{textDecor: `none`}}
                >
                  Our Offering
                </Text>
                <Text color={`#424242)`} fontSize={`14px`} fontWeight={`500`} lineHeight={`140%`}>
                  Discover the Unexpected by Delving into Our Offerings
                </Text>
              </Stack>
            </HStack>
          </MenuItem>
          <MenuItem
            as={Link}
            textDecor={`none`}
            _hover={{textDecor: `none`}}
            href={`#solutions`}
            onClick={closeDrawer}
          >
            <HStack align={`flex-start`} gap={`8px`}>
              <PaymentSVG />
              <Stack gap={`4px`} flex={`1`}>
                <Text
                  color={`#292929`}
                  fontSize={`16px`}
                  fontWeight={`600`}
                  lineHeight={`150%`} /*  */
                  _hover={{textDecor: `none`}}
                >
                  Payment
                </Text>
                <Text color={`#424242)`} fontSize={`14px`} fontWeight={`500`} lineHeight={`140%`}>
                  The future of online payments is here.{' '}
                </Text>
              </Stack>
            </HStack>
          </MenuItem>
          <MenuItem
            as={Link}
            textDecor={`none`}
            _hover={{textDecor: `none`}}
            href={`#manage-business`}
            onClick={closeDrawer}
          >
            <HStack align={`flex-start`} gap={`8px`}>
              <ManageBusinessSVG />
              <Stack gap={`4px`} flex={`1`}>
                <Text
                  color={`#292929`}
                  fontSize={`16px`}
                  fontWeight={`600`}
                  lineHeight={`150%`} /*  */
                  _hover={{textDecor: `none`}}
                >
                  Manage your business
                </Text>
                <Text color={`#424242)`} fontSize={`14px`} fontWeight={`500`} lineHeight={`140%`}>
                  Your Business, Under Control—Manage It Effectively.{' '}
                </Text>
              </Stack>
            </HStack>
          </MenuItem>
          <MenuItem
            as={Link}
            textDecor={`none`}
            _hover={{textDecor: `none`}}
            href={`#templates`}
            onClick={closeDrawer}
          >
            <HStack align={`flex-start`} gap={`8px`}>
              <OfferingSVG />
              <Stack gap={`4px`} flex={`1`}>
                <Text
                  color={`#292929`}
                  fontSize={`16px`}
                  fontWeight={`600`}
                  lineHeight={`150%`} /*  */
                  _hover={{textDecor: `none`}}
                >
                  Templates
                </Text>
                <Text color={`#424242)`} fontSize={`14px`} fontWeight={`500`} lineHeight={`140%`}>
                  No Limits—Over 100 Website Templates to Explore.{' '}
                </Text>
              </Stack>
            </HStack>
          </MenuItem>
        </Stack>
      </MenuList>
    </Menu>
  );
};

export const Navbar = () => {
  const drawer_disclosure = useDisclosure();
  const [background, setBackground] = useState<string | null>(null);
  useEffect(() => {
    const sections = document.querySelectorAll('div[data-background]');

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const background = entry.target.getAttribute('data-background');
            setBackground(background);
          } else {
            setBackground(null);
          }
        });
      },
      {rootMargin: `-100%`}
      // {rootMargin: `100%`, threshold: 0.1}
    );
    sections.forEach(section => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  const isDark =
    background?.includes('black') ||
    background?.includes('#2F3FAD') ||
    background?.includes('#000000') ||
    background?.includes('#191919');

  return (
    <>
      <Flex
        padding={{base: `22px 24px`, lg: `14px 64px`}}
        justify={{base: `space-between`}}
        align={{base: `center`}}
        className={neueHaas.className}
        position="fixed"
        w="full"
        bg={background ? background : 'rgba(0, 0, 0, 0.02)'}
        backdropFilter="blur(4px)"
        zIndex={90}
      >
        <HStack gap={`20px`}>
          <Link href="/">
            <MyxelliaLogo
              color={isDark ? '#FFF' : '#000'}
              logoColor={isDark ? '#FFF' : '#1919D8'}
            />
          </Link>

          <Box display={{base: `none`, lg: `flex`}}>
            <SolutionsMenu closeDrawer={() => drawer_disclosure.onClose()} dark={isDark} />
          </Box>
          <Text
            color={{base: isDark ? '#FFF' : '#424242'}}
            cursor={`pointer`}
            fontSize={{base: `16px`}}
            fontWeight={{base: `600`}}
            lineHeight={{base: `150%`}}
            display={{base: `none`, lg: `block`}}
            p={`8px`}
          >
            Partners Program
          </Text>
        </HStack>
        <HStack gap={`14px`}>
          <Text
            color={{base: isDark ? '#FFF' : '#424242'}}
            cursor={`pointer`}
            fontSize={{base: `16px`}}
            fontWeight={{base: `600`}}
            lineHeight={{base: `150%`}}
            display={{base: `none`, lg: `block`}}
            p={`8px`}
          >
            Live Account
          </Text>
          <Box
            bg={`#D9D9D9`}
            w={`1px`}
            borderColor={``}
            display={{base: `none`, lg: `flex`}}
            h={`100%`}
            minH={`25px`}
          />
          <Button2
            p={{base: `12px 16px`}}
            bg={isDark ? '#FFF' : '#141414'}
            color={isDark ? '#000' : '#FFF'}
            fontSize={{base: `14px`}}
            fontWeight={{base: `600`}}
            lineHeight={{base: `115%`, lg: `150%`}}
          >
            Get started{' '}
            <Box as={`span`} ml={`3px`} display={{base: `none`, lg: `inline-block`}}>
              {` `} for Free
            </Box>
          </Button2>
          <HamburgerIcon
            fontSize={`20px`}
            display={{base: `block`, lg: `none`}}
            onClick={drawer_disclosure.onOpen}
          />
        </HStack>
      </Flex>
      <Drawer
        isOpen={drawer_disclosure.isOpen}
        onClose={drawer_disclosure.onClose}
        placement="right"
        size={`sm`}
      >
        <DrawerOverlay />
        <DrawerContent>
          <HStack justify={`space-between`} p={`22px 24px`}>
            <MyxelliaLogo />
            <Center>
              <DrawerCloseButton position={`relative`} top={`0px`} right={`0px`} />
            </Center>
          </HStack>
          <Stack h={`100%`} p={`24px`} gap={`24px`} w={`100%`}>
            <SolutionsMenu closeDrawer={() => drawer_disclosure.onClose()} />
            <Text
              color={{base: isDark ? '#FFF' : '#424242'}}
              cursor={`pointer`}
              fontSize={{base: `16px`}}
              fontWeight={{base: `600`}}
              lineHeight={{base: `150%`}}
              p={`8px`}
            >
              Partners Program
            </Text>
            <Stack mt={`auto`} gap={`24px`} w={`100%`}>
              <Button2
                p={{base: `20px 24px`}}
                bg={isDark ? '#FFF' : '#141414'}
                color={isDark ? '#000' : '#FFF'}
                fontSize={{base: `20px`}}
                fontWeight={{base: `500`}}
                lineHeight={{base: `100%`}}
                w={{base: `100%`, lg: `100%`}}
              >
                Get started for FREE
              </Button2>
              <Button2
                p={{base: `20px 24px`}}
                color={isDark ? '#FFF' : '#141414'}
                bg={isDark ? '#000' : '#FFF'}
                border={`1px solid`}
                fontSize={{base: `20px`}}
                fontWeight={{base: `500`}}
                lineHeight={{base: `100%`}}
                w={{base: `100%`, lg: `100%`}}
              >
                Live Acccount
              </Button2>
            </Stack>
          </Stack>
        </DrawerContent>
      </Drawer>
    </>
  );
};
