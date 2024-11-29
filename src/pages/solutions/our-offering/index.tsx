import { OfferingsContent } from "@/page-components/solutions/offerings/content";
import HeroSection from "@/page-components/solutions/offerings/heroSection";
import { Box } from "@chakra-ui/react";

const OurOfferings = () => {
        return (
          <Box h='full' minH='100vh' fontFamily="euclid" pt={{base: '4rem', md: 0}} bg='#000'>
            {/* <Navbar /> */}
            <HeroSection />
            <OfferingsContent/>
          </Box>
        );

      
}

export default OurOfferings