import LayoutView from "@/components/page-layout/LayoutView";
import { OfferingsContent } from "@/page-components/solutions/offerings/content";
import { FootNote } from "@/page-components/solutions/offerings/footnote";
import HeroSection from "@/page-components/solutions/offerings/heroSection";
import { Box } from "@chakra-ui/react";
import Head from "next/head";

const OurOfferings = () => {
  return (
    <LayoutView bg='#000'>
      <Head>
        <title>Our Offerings | Myxellia</title>
        <meta name="description" content="Myxellia's offerings" />
      </Head>
      <HeroSection />
      <Box w='full' data-background='black'>
        <OfferingsContent />
        <FootNote />
      </Box>
    </LayoutView>
  );
};

export default OurOfferings;
