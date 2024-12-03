import {FeaturesSection} from '@/page-components/landing/FeaturesSection';
import {FrequentlyAskedQuestions} from '@/page-components/landing/FrequentlyAskedQuestions';
import {HeroSection} from '@/page-components/landing/HeroSection';
import {IdeasAndInsights} from '@/page-components/landing/IdeasandInsights';
import {InfrastructureSection} from '@/page-components/landing/InfrastructureSection';
import {ManageBusinesSection} from '@/page-components/landing/ManageBusinessSection';
import {PropertyDevelopers} from '@/page-components/landing/PropertyDevelopers';
import {ProptechSection} from '@/page-components/landing/ProptechSection';
import {SolutionsSection} from '@/page-components/landing/SolutionsSection';
import {StartTrial} from '@/page-components/landing/StartTrial';
import {TemplatesSection} from '@/page-components/landing/TemplatesSection';
import {WebsiteCreation} from '@/page-components/landing/WebsiteCreation';
import {Box} from '@chakra-ui/react';

export default function Home() {
  return (
    <Box fontFamily={{base: `"Neue Haas Grotesk Display Pro"`}} maxW={`1440px`} mx={`auto`}>
      <HeroSection />
      <FeaturesSection />
      <ProptechSection />
      <TemplatesSection />
      <PropertyDevelopers />
      <InfrastructureSection />
      <SolutionsSection />
      <ManageBusinesSection />
      <WebsiteCreation />
      <IdeasAndInsights />
      <FrequentlyAskedQuestions />
      <StartTrial />
    </Box>
  );
}
