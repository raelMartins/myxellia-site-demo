import {AddIcon, MinusIcon} from '@chakra-ui/icons';
import {
  Accordion,
  AccordionButton,
  AccordionItem,
  AccordionPanel,
  Box,
  Flex,
  Text
} from '@chakra-ui/react';

export const FrequentlyAskedQuestions = () => {
  return (
    <Flex
      direction={{base: `column`, lg: `row`}}
      gap={{base: `24px`, lg: `116px`}}
      p={{base: `60px 24px `, lg: `119px 64px 88px`}}
      background={`#000000`}
      color={`#FFFFFF`}
      align={`flex-start`}
      id={`faq`}
      data-background="#000000"
    >
      <Text
        maxW={`536px`}
        minW={{base: `auto`, lg: `536px`}}
        minH={{lg: `331px`}}
        fontSize={{base: `36px`, lg: `62.5px`}}
        fontWeight={{base: `500`}}
        lineHeight={{base: `133%`}}
        letterSpacing={{base: `0.72px`, lg: `auto`}}
      >
        Frequently asked questions
      </Text>
      <Accordion allowMultiple width={`100%`}>
        <AccordionItem width={`100%`} borderColor={`#4F4F4F`}>
          {({isExpanded}) => (
            <>
              <AccordionButton py={`31px`} px={`0px`}>
                <Box
                  as="span"
                  flex="1"
                  textAlign="left"
                  fontSize={{base: `22px`}}
                  fontWeight={{base: `600`}}
                  lineHeight={{base: `120%`}}
                  letterSpacing={{base: `-0.22px`}}
                >
                  Why should I have an application? And why now?
                </Box>
                {isExpanded ? <MinusIcon fontSize="12px" /> : <AddIcon fontSize="12px" />}
              </AccordionButton>
              <AccordionPanel
                pb={`17px`}
                fontSize={{base: `16px`}}
                fontWeight={{base: `500`}}
                lineHeight={{base: `140%`}}
                letterSpacing={{base: `-0.016px`}}
                px={`0px`}
              >
                The world is evolving rapidly, and property development companies face a critical
                moment to define and shape their future. We’re at a time when delighting
                clients—whether current property owners or potential buyers—is more essential than
                ever. Markets are becoming increasingly competitive, investment is harder to secure,
                and buyers have more choices than ever before. Businesses that fail to adapt risk
                being left behind. If you&apos;re not constantly innovating to create an
                exceptional, user-friendly experience for your clients while gaining deeper insights
                into your operations, staying competitive in this new landscape will be a challenge.
              </AccordionPanel>
            </>
          )}
        </AccordionItem>
        <AccordionItem width={`100%`} borderColor={`#4F4F4F`}>
          {({isExpanded}) => (
            <>
              <AccordionButton py={`31px`} px={`0px`}>
                <Box
                  as="span"
                  flex="1"
                  textAlign="left"
                  fontSize={{base: `22px`}}
                  fontWeight={{base: `600`}}
                  lineHeight={{base: `120%`}}
                  letterSpacing={{base: `-0.22px`}}
                >
                  Why Myxellia?
                </Box>
                {isExpanded ? <MinusIcon fontSize="12px" /> : <AddIcon fontSize="12px" />}
              </AccordionButton>
              <AccordionPanel
                pb={`17px`}
                fontSize={{base: `16px`}}
                fontWeight={{base: `500`}}
                lineHeight={{base: `140%`}}
                letterSpacing={{base: `-0.016px`}}
                px={`0px`}
              >
                Myxellia is the most comprehensive, scalable, and efficient solution available. It’s
                purpose-built for property development companies, standing far above other options
                that lack a real estate focus. Myxellia consistently delivers an unmatched
                experience for companies in the property sector, providing the unique tools and
                insights required to excel.
              </AccordionPanel>
            </>
          )}
        </AccordionItem>
        <AccordionItem width={`100%`} borderColor={`#4F4F4F`}>
          {({isExpanded}) => (
            <>
              <AccordionButton py={`31px`} px={`0px`}>
                <Box
                  as="span"
                  flex="1"
                  textAlign="left"
                  fontSize={{base: `22px`}}
                  fontWeight={{base: `600`}}
                  lineHeight={{base: `120%`}}
                  letterSpacing={{base: `-0.22px`}}
                >
                  Do my clients need an application?
                </Box>
                {isExpanded ? <MinusIcon fontSize="12px" /> : <AddIcon fontSize="12px" />}
              </AccordionButton>
              <AccordionPanel
                pb={`17px`}
                fontSize={{base: `16px`}}
                fontWeight={{base: `500`}}
                lineHeight={{base: `140%`}}
                letterSpacing={{base: `-0.016px`}}
                px={`0px`}
              >
                It’s more than just an app—it’s a complete operating system for your sales process.
                Even if your clients don’t initially use it, their information will be there the
                moment they decide to. Imagine a banking app: even if you download it for the first
                time, all your past transactions appear. Myxellia provides this seamless experience
                for property transactions, giving clients instant access to their history and
                current activities when they need it.
              </AccordionPanel>
            </>
          )}
        </AccordionItem>
        <AccordionItem width={`100%`} borderColor={`#4F4F4F`}>
          {({isExpanded}) => (
            <>
              <AccordionButton py={`31px`} px={`0px`}>
                <Box
                  as="span"
                  flex="1"
                  textAlign="left"
                  fontSize={{base: `22px`}}
                  fontWeight={{base: `600`}}
                  lineHeight={{base: `120%`}}
                  letterSpacing={{base: `-0.22px`}}
                >
                  How does pricing work?
                </Box>
                {isExpanded ? <MinusIcon fontSize="12px" /> : <AddIcon fontSize="12px" />}
              </AccordionButton>
              <AccordionPanel
                pb={`17px`}
                fontSize={{base: `16px`}}
                fontWeight={{base: `500`}}
                lineHeight={{base: `140%`}}
                letterSpacing={{base: `-0.016px`}}
                px={`0px`}
              >
                There is a one-time fee for the theme you choose, along with a monthly subscription
                based on your specific business needs
              </AccordionPanel>
            </>
          )}
        </AccordionItem>
      </Accordion>
    </Flex>
  );
};
