'use client';
import LayoutView from '@/components/page-layout/LayoutView';
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
import useFontLoaded from '@/ui-lib/ui-lib.hooks/useFontLoaded';
import {Box} from '@chakra-ui/react';
import Head from 'next/head';

export default function Home() {
  const isFontLoaded = useFontLoaded();

  if (!isFontLoaded) {
    return <div>Loading...</div>;
  }

  return (
    <LayoutView>
      <Head>
        <title>Myxellia | Homepage</title>
      </Head>
      <Box>
        <HeroSection />
        <Box w='full' data-background='#2F3FAD'>
          <FeaturesSection />
        </Box>
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
    </LayoutView>
  );
}
