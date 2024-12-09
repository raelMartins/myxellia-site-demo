import {Button2} from '@/ui-lib';
import {Box, Center, Flex, Stack, Text, VStack} from '@chakra-ui/react';
import Image from 'next/image';
import {useEffect, useState} from 'react';
import ReactPlayer from 'react-player';

type Solution = {
  title: string;
  description: string;
  media_type: 'image' | 'video' | 'gif';
  media_url: string;
  media_dimensions: {height: number; width: number};
  background?: string;
};
export const SolutionsSection = () => {
  const [isClient, setIsClient] = useState(false);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    const section = document.getElementById('solutions') as Element;

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setPlaying(true);
          } else {
            setPlaying(false);
          }
        });
      },
      {rootMargin: `50%`}
      // {rootMargin: `100%`, threshold: 0.1}
    );
    observer.observe(section);
    return () => observer.disconnect();
  }, []);
  const solutions_arr: Solution[] = [
    {
      title: `Optimize your payment collection`,
      description: `With automated transaction logging, every payment your clients make is instantly recorded—no manual entry needed. No matter where they are in the world or what time they pay, their transactions are captured seamlessly.`,
      media_type: `video`,
      media_url: `https://veerge-media.s3.us-east-1.amazonaws.com/Payment%20collection.mov?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAVK34NDYCDSQKBNTS%2F20241209%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20241209T093751Z&X-Amz-Expires=300&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJIMEYCIQC%2F%2Bm6xTKbRojHGt05YYuBSQ3TgJcSD69qUNW0Cr4%2FAdAIhAPWB3i8%2FUeWV5CWd87MZQA05XVhmbJz5VUVeb6P6eUPkKoEDCHMQARoMMzY2OTQzNzM5Mzk2Igzsaq7d5VPfZFBaQpUq3gIoD7xKZ%2FP9tGIQXaQdGflLb2UIhIXJGkabtLIVmLJi51%2BsZjNMx9xe%2BxhnunNG%2F4ab6L38vj%2FBpST1rwPYx2OfdkLvVhtJkxOjRRb1OMIiUkK%2BtzFTXtZpIjgwg6l%2F0UFW7IUPAxbZs2hq1y2WnH%2B3SQsbui4RmP13gk3GeS34MQ5DyQV2jwQ8jloKm4Etay1Z6dQ866S0qBUIfH1lZY%2BBPyqHCfNGwGOIUv9cBaLRMYh%2FrEH4qpZVc8Q5yyWXnhyPGXnaXKRfgoj%2FTF3ipELB1CTqOt45eXcQq4cCc0re1yCpm90utGlfDITDQVzmg49lDvk5Vfoz9LQWe432FWPxlv2SQyqpsywtCyTb5c6PBHvxrLpYGtXr%2FDYdRhLxk%2FkIgObDcM6bIJyzcZwrtVmdULARFFigKojkJIfxKljtxxZzrbu8ZtrU7TYMVPZXlTIYytp2BrwIluzH6ZS9njCb2Nq6BjqyAkZR9zb%2Fr8kMm3M%2FWpu0DxJrdBnSCi9ZyvF%2FQ1chJ3KXfLdCckeOpgwtrr2rb931QrYz8deV41C6UQmC3TouKbxX4aH%2FQcKjqkwTyf4V8fPXNOmR80Nq8g4tg40ZETdt88L9nX2pa0HYxZ9TMuiLDjcsEt3qLpofKP1BIEqleGWQVisCDAxCwG99erOpxo4%2FV1QV0H3izzaCcPFYX%2B8uN6unXrNHurl5lOv0QrhQ5P4GCYDyyBZnO4pKv6XrESFkUfOctSm3t4yR3t1y3F%2FRTR8CmZ%2FpUZfa32eDqSbcPgcllayJ72gJDxPMiA9XukfOdCUZpyw3HBMCjtJiA3C25TcfGQAShoHFs5z4ZTnwHI65vzL%2FQL2xwI3Gu3Im6%2B0UEguDpMkBC5Y6ATOfJ%2B%2BFaD%2FL%2Bg%3D%3D&X-Amz-Signature=d818035f457787ab9c073ad7d7d54b25d1d696364038b267a82025a9af0e6c07&X-Amz-SignedHeaders=host&response-content-disposition=attachment`,
      media_dimensions: {height: 371, width: 660},
      background: `radial-gradient(50% 50% at 50% 50%, #470804 0%, #220402 100%)`
    },
    {
      title: `Document Organization Made Simple`,
      description: `Easily sort and organize all your clients’ documents—from agreements and payment receipts to offer letters, deeds, and project reports. Everything they need is right at their fingertips.`,
      media_type: `video`,
      media_url: `https://s3-figma-videos-production-sig.figma.com/video/1380982990654738066/TEAM/c419/9113/-ab38-4df4-aa6e-8f2e4f4109f7?Expires=1733702400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=WflpO5GeXA-4VNbVnohAhcwwY4~Y54HEV7HdoI~kT-ymeFnGHGCKdmgIamJcRG0xYNTo4r2S598M3ewkmDwh5vynaNPMWa0nUExuw6pUDVRgzRNvrS7IWBDH4t1LD3o0faIOyftvsHLuvyDRrPn5c77nt5ob5foDjIBiACEzzkQJqSsHOyfVgyp5BN1g~ECq6kn9cYqgUEsCc9ontq7nNcYRr496DfSZpYsfUr90W9s6Pcs7ZaT06bHRnytljSuclI3WYy82Rs~uCHmvMaGAy3LwQlx1mlYgmEb5D5kIdtJBn2y7LKfJClXjSmJVzIm4NtooKNVIb14IfN5nDZiZaw__`,
      media_dimensions: {height: 371, width: 660},
      background: `radial-gradient(50% 50% at 50% 50%, #470804 0%, #220402 100%)`
    },
    {
      title: `Portfolio management in a user friendly way`,
      description: `Build an application that empowers your clients to effortlessly track all their assets, monitor payment progress, and watch their portfolio value grow—offering a user-friendly way to streamline investment management like never before.`,
      media_type: `video`,
      media_url: `https://s3-figma-videos-production-sig.figma.com/video/1380982990654738066/TEAM/5386/488e/-5b7a-46ff-9abc-29f1a218d655?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=A3iYMLq0wf4SfX6qMOiLBxFFioGpOwJ~bopOnOuV3nxow9CPik9kQOxeYdly-go~N6VcDq3SRoYZuzpnCeXUKMa-BwVlD0oWltdtmoV9XGW-ej937KpQZY-sF7cXDdAxE9t6jcHThW3Swaz7iTfwKiD3puX7gaR-tvsFW7mAJmA2pFuGgrN~JcwDCn-u432qSQFgWzBuxoMxyzh-Ub8Mp3yJleObXtyxr5ULv7MCpT6ZBsIq0DfSOk~PNjhloFaaXOT9iopVSkjz-Pwx0t9dhNJjBxyNhmt-eBhG~yojDv3rYHn1RTE5fZrrAvKUEk-EYrSMZI-0lLSU789c6x5Bmw__`,
      // media_dimensions: {height: 468, width: 700},
      media_dimensions: {height: 371, width: 660},
      background: `radial-gradient(50% 50% at 50% 50%, #553B1D 0%, #2D1B05 100%)`
    },
    {
      title: `Smart Notifications`,
      description: `Automate timely reminders and updates to keep your clients informed of every essential detail—from payment deadlines to project milestones.`,
      media_type: `video`,
      media_url: `https://s3-figma-videos-production-sig.figma.com/video/1380982990654738066/TEAM/ece3/dc21/-6f8e-4010-bdbe-70fe4eee56ab?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=g0XbpA394qivuXVfQCJnz67Z2iZ1HDShX-ixfOFBtvFZAiiC6qdIufWjiMlYjm3IFSXlLwJKjN-9LNtvrst1rvQZsRHqjy-WVAsQYKC36yKzHRz3jhHqEZx68ZMuqkYS80b8hohnhSIUuYWqZNbDo8~bv4A6J4QGxwRIYIZpvMhztX1vprddMDd32p7uoIifKLmlOnKGmFuN2oFgaz68tIIGNEAaMO8rQ2mnj53MAUgTbi6UghTKWMiVzF3VndYlbnkyfI7Vunpt8-1b6qh7iX63OiSV~zFYgUxlBKBOwljkLuoGeB3oGZW5Yf5t8NbJiRJ9YjtaPK4zwiwmzJi38Q__`,
      // media_dimensions: {height: 314, width: 523},
      media_dimensions: {height: 400, width: 660},
      background: `radial-gradient(33.83% 33.83% at 50% 52.41%, #5067AF 0%, #212B49 100%)`
    },
    {
      title: `Capture Insights After Every Inspection`,
      description: `Unlike standard inspection scheduling tools, this feature goes further to enhance your client experience. Once an inspection is completed, buyers or clients receive a push notification inviting them to share feedback. This proactive approach offers real-time insights, enabling you to identify and address your business gaps.`,
      media_type: `video`,
      media_url: `https://s3-figma-videos-production-sig.figma.com/video/1380982990654738066/TEAM/1fe4/84e3/-633d-4c09-975b-9d094e8a3d7f?Expires=1733702400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=CJOhzCWrbZX5CwHJNFBh7VSJ4Rt5CgC7YeHjbYzFL3ydshsrC5YkgFqsEKHeHF4YNhoSOOjWlNtjvweh8DIKyDRpTYEhy93MwVblR9Q430erBV1iv2La3rGmSS6o5yxa0sHBeRJKcpxoZufzzo3u5bbU1iT5aP4emPNcQYU~tuLlzLaLLrNWG8fODl84r-cAq-jekQzA0-ZERwDdgHMF5I~FIN~gadGXaSglOlwobzOnH~AueN6plEMhAvn3VqyKV~2MhgkNUwv5VY59NIWoAUSf~rY4O6C42mDvuz9gAiz1j5QTlAlZGqimPBtHUoT~s5HsdJd6YbW3ski4J5T98Q__`,
      media_dimensions: {height: 371, width: 660},
      background: `radial-gradient(33.83% 33.83% at 50% 52.41%, #5067AF 0%, #212B49 100%)`
    },
    {
      title: `Penetrate a new market with fractional ownership`,
      description: `Tap into an untapped but addressable market by giving people of low purchasing power a seat at the table`,
      media_type: `video`,
      media_url: `https://s3-figma-videos-production-sig.figma.com/video/1380982990654738066/TEAM/3903/f24e/-de07-4269-ab87-759eddeebc57?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=RbI2c3PACEXyi~L~Rt4Vn3dgnGFZWq3QltjQF8J8mCO7bubczURvjUdNPM7-2KrPhetr4K9IyIazUm2bFUPmnMlahSxwDt15bwm14f1qERo9okKdpiQ88xcSHkrf8fdZT5Pw4o1Q3kIxVh25WCTcfu3Gl7te6S6x2h08MZ8-xpY~x3vKAgzkR2kSlzVOR3uvmXvbMTFG-L85M0OuCN-0u3q9O9eNfzhExKj178MZUU~E8kL4AJJ0wwbsjGgJQtD7rAb48yB9DEKqzAXgG2khL-oEmZbM6-sl9eMWW0CdJvFWjLBnvagZLxEHp1dkloAp7iH3Oa7HG5GOHM~fPeHqsw__`,
      media_dimensions: {height: 371, width: 660},
      background: `radial-gradient(50% 50% at 50% 50%, #061145 0%, #030821 84%);`
    }
  ];
  return (
    <VStack
      align={`stretch`}
      gap={{base: `50px`, lg: `100px`}}
      p={{base: `80px 24px`, lg: `86px 64px`}}
      background={`#F1F2FE`}
      id={`solutions`}
      data-background="#F1F2FE"
    >
      <Stack color={`#181F66`} gap={`24px`} maxW={{base: `882px`}}>
        <Text
          fontSize={{base: `40px`, lg: `160px`}}
          fontWeight={{base: `500`, lg: `400`}}
          lineHeight={{base: `120%`, lg: `93%`}}
          letterSpacing={{base: `0.72px`, lg: `auto`}}
        >
          Modern solutions with you in mind
        </Text>
        <Text
          fontSize={{base: `18px`, lg: `56px`}}
          fontWeight={{base: `400`}}
          lineHeight={{base: `100%`}}
          maxW={{base: `100%`, lg: `543px`}}
        >
          Build more than just a website
        </Text>
        <Button2 variation="primary" animationColor={`#181F66`}>
          Explore our solutions
        </Button2>
      </Stack>
      <Stack gap={{base: `30px`, lg: `105px`}}>
        {solutions_arr?.map((el, i) => (
          <Flex key={i} align={{md: 'center'}} direction={{base: `column`, md: `row`}} w={`100%`}>
            <Box
              order={{md: i % 2 == 1 ? `2` : `1`}}
              aspectRatio={{base: `660 / 371`}}
              w={`100%`}
              flex={`1`}
              background={el.background || `#f0f0f0`}
              overflow={`hidden`}
            >
              {el?.media_type === 'image' ? (
                <Center pos={`relative`}>
                  <Image
                    src={el?.media_url}
                    alt="Image"
                    width={el?.media_dimensions?.width}
                    height={el?.media_dimensions?.height}
                  />
                </Center>
              ) : el?.media_type === 'video' || el?.media_type === 'gif' ? (
                <Center position={`relative`}>
                  {isClient && (
                    <ReactPlayer
                      url={el?.media_url}
                      style={{
                        aspectRatio: `${el?.media_dimensions?.width} /  ${el?.media_dimensions?.height}`,
                        width: '100%',
                        backgroundColor: el.background || '#000000',
                        margin: 'auto'
                      }}
                      width={'100%'}
                      height={'100%'}
                      playing={el?.media_url && playing ? true : false}
                      loop
                    />
                  )}
                </Center>
              ) : (
                <></>
              )}
            </Box>
            <Stack
              gap={`12px`}
              p={{base: `18px 0px`, md: `40px`}}
              flex={`1`}
              order={{md: i % 2 == 1 ? `1` : `2`}}
            >
              <Text
                fontSize={`22px`}
                fontWeight={`600`}
                lineHeight={`120%`}
                letterSpacing={`-0.22px`}
              >
                {el?.title}
              </Text>
              <Text
                color={`#292929`}
                fontSize={`16px`}
                fontWeight={`500`}
                lineHeight={`140%`}
                letterSpacing={`-0.016px`}
              >
                {el?.description}
              </Text>
            </Stack>
          </Flex>
        ))}
      </Stack>
    </VStack>
  );
};
