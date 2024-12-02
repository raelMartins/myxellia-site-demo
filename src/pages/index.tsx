import {FeaturesSection} from '@/page-components/landing/FeaturesSection';
import {HeroSection} from '@/page-components/landing/HeroSection';
import {InfrastructureSection} from '@/page-components/landing/InfrastructureSection';
import {ProptechSection} from '@/page-components/landing/ProptechSection';
import {SolutionsSection} from '@/page-components/landing/SolutionsSection';
import {TemplatesSection} from '@/page-components/landing/TemplatesSection';
import {Box} from '@chakra-ui/react';

export default function Home() {
  return (
    <Box fontFamily={{base: `"Neue Haas Grotesk Display Pro"`}}>
      <HeroSection />
      <FeaturesSection />
      <ProptechSection />
      <TemplatesSection />
      <InfrastructureSection />
      <SolutionsSection />
    </Box>
  );
}
