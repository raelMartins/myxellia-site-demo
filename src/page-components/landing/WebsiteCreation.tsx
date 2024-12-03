import {Button2} from '@/ui-lib';
import {Box, HStack, ListItem, OrderedList, Stack, Text} from '@chakra-ui/react';

export const WebsiteCreation = () => {
  return (
    <Box p={{base: `120px 24px `, lg: `100px 64px`}}>
      <Stack maxWidth={{base: `950.48px`}} mx={`auto`} gap={{base: `34px`, lg: `84px`}}>
        <Text
          color={{base: `#000`}}
          textAlign={{lg: `center`}}
          fontSize={{base: `32px`, lg: `62.375px`}}
          fontWeight={{base: `500`}}
          lineHeight={{base: `120%`, lg: `133%`}}
        >
          How to create a website for free
        </Text>
        <OrderedList
          fontSize={{base: `16px`, lg: `20px`}}
          fontWeight={{base: `600`}}
          lineHeight={{base: `140%`}}
          letterSpacing={{base: `0.16px`, lg: `0.197px`}}
        >
          <ListItem mb={`32px`}>
            Register Your Account.{` `}
            <Box as={`span`} fontWeight={`500`}>
              Sign up on behalf of your property development company and await approval for your
              account.
            </Box>
          </ListItem>
          <ListItem mb={`32px`}>
            Receive Approval.{` `}
            <Box as={`span`} fontWeight={`500`}>
              Once approved, you’ll receive an email confirmation. Then, you’re ready to proceed.
            </Box>
          </ListItem>
          <ListItem mb={`32px`}>
            Add Development Projects.{` `}
            <Box as={`span`} fontWeight={`500`}>
              Log in and start adding your projects to the platform.
            </Box>
          </ListItem>
          <ListItem mb={`32px`}>
            Select & Customize a Template.{` `}
            <Box as={`span`} fontWeight={`500`}>
              Choose from a variety of fully-functional templates, customize it to reflect your
              brand, and publish.
            </Box>
          </ListItem>
          <ListItem mb={`32px`}>
            Migrate Your Client Base.{` `}
            <Box as={`span`} fontWeight={`500`}>
              Bring your existing clients into the new app smoothly.
            </Box>
          </ListItem>
          <ListItem>
            Promote & Expand.{` `}
            <Box as={`span`} fontWeight={`500`}>
              Use the built-in tools to drive traffic, promote your app, and grow your reach.{' '}
            </Box>
          </ListItem>
        </OrderedList>
        <HStack justify={`center`}>
          <Button2 background={`#141414`} color={`#ffffff`} showArrow={false}>
            Get Started
          </Button2>
        </HStack>
      </Stack>
    </Box>
  );
};
