import {Box, Center, HStack, Stack, Text, VStack} from '@chakra-ui/react';
import Image from 'next/image';

export const TemplatesSection = () => {
  const templates = [
    {
      url: ``,
      image: `https://veerge-media.s3.us-east-1.amazonaws.com/myxellia_assets/theme_1.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAVK34NDYCKA6JZ7H2%2F20241209%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20241209T092532Z&X-Amz-Expires=300&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJGMEQCIFQLStDSvr%2BVxjiBKdFza0TWD61Zmu1HR8tX6Hw6mU4RAiAxWouGIhywfdqSqV6%2BVV73vGBKpyaUXk6lWaGwJCg5fyqBAwhzEAEaDDM2Njk0MzczOTM5NiIMUq%2B6QJVRz9qPbpbaKt4CGcVjkjCeEhT30espKOvj1QmYi3iDZBucUo8uNyye3Yvhr5R9M4mJefPAAH6VGYGkySqq%2FmMNTqYXJwwC1mFM623o3mEmI6b3lHueoLYss3cwPLDT6rwteJw54cgKWvi1stzGiN%2BxH4KMvzuBXqNhb1AHBAGXJvsXMe4c4gQnpLG7b3BOjZVMyoknBvaIaohEJIx284K6cGv1yuwckzWaqRNXnIRmTIaVpJS0uwLp99Oj7KJq9u53bGU8cF8laIYoDST9%2FtLTxLQGi5fnHnS04x%2BgG4Ry5o7POIY3f3%2BW15xoWswpBSLjEqUnA294jNoQWcvvHvW5Hbc%2B1ZPAnHcKIp5JRwbo4e8aa0S1KptAJKtOw%2B50eQ0rh4IWSEqTiEewhSsDF0rFP%2FyZcT%2F71aFjoifpyoWDH3H8BloJDhr8WAM0Vqq38%2BuTK7KSlEP7s4Xn8WAypih7u09L%2Fwp773Mwm9jaugY6tALsAa%2BUrRZAlUjcMEb9RfogiZF4BBiTqbxrZoBKl9NMdmZiADaXaxmh1LBTSw5cw9ooeg0UKzZpvAgzkMumr8yXsTgm2AbmalBSsYjJmRD23%2B4zqtVT2TeFaVozJjlpKtHZl7IupQtJVMPw1K8SFgaOxg8B3iZs63oyP%2BTGzbWcJmFo7WiXfxrbiKmEgCDdbibTm5oslq%2BD%2B3mp9Mlq5WhiICgamzHvAP6bp2F75a4OqV3eHKcVGlwv%2B%2FLX36nosKwJezMOoLDphi5W3%2BjFb9119LpIiJxN3Bm767ppZ3f77FDg9BNba1z869kc96tM6bqrjV4oVaPnkoQHOB24HQtkc5K2LtlwqNYKA4QztmxuTKq%2BsZFUR5sZYqkPUSITpEPktP%2F20J5XEE3ST6aq7EETN3mcxQ%3D%3D&X-Amz-Signature=e0b6af9e61d8bb5f7e7b3c266d7939269d93adc06a9bb93220aecc3af1d05ce4&X-Amz-SignedHeaders=host&response-content-disposition=inline`,
      title: 'Brochure'
    },

    {
      url: ``,
      image: `https://veerge-media.s3.us-east-1.amazonaws.com/myxellia_assets/theme_3.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAVK34NDYCEP5QGYB4%2F20241209%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20241209T092635Z&X-Amz-Expires=300&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJHMEUCIFHdAHsmEbwS7HG%2BfSE6xamxMyU5Q6FhS9nctftpRyMbAiEA%2FRVPjtP2%2F7hzxYSwmTjhrlglE9ocFLQnnMkmQPnODF8qgQMIcxABGgwzNjY5NDM3MzkzOTYiDO0KCPUY56ZxOV%2BODireAnJP%2ByfJM7dYq0Mt6ePWixaQ5MLFmu%2FVZcvNARYQ8UJd78EjhssAJwIoYPvyEAE8wyper9yTOx%2BMV02vc10NIjTjxqloKe8jmTiVSwV5aXUYeaTrSg71FCe3fKqHyTMu2ZNAv0WGimbP4ebfqQfJgNlZoQuNGwZ29Mbyak7VgQMpynnh0ebU63iY95ZfSee8AKRFjy8v8tEYsQkougft%2Fu3lI4SXxdSpAbmYuqPF8dikWQyaK6ZanFeHg3FxLLofthX3hAVpwLQprNW4U4V3xQRgIaPUE5xt7IcxjrSAhkUAoG0DwkEvqVxQJMeX8YUVQfGX%2BTqSYEO06g5%2FB3bcr%2BKq4he40M2SKyT9pY29jVUC6lutm6Iv7s8CERyv0uU48Ae5RdbVYuh5UfovIaTioQbA0%2FiSPxCTFiSXNjrd%2B10hxSpCxIgzDyZp9IwQXoaaP3M1GqfbrZm2MDDYxkOqMJvY2roGOrMCIhXp6a5yQhc%2F%2BHYRtuuOkJiqKzsO0pqxT0kOYTOAU4T%2BpBnkDahfvL1tiHedEf%2FNEgkWDBrDhprLdxwqIUhsmlXKtVYTUtlhNZ1ytn1xH20kCTXbQvOrFyd9dzlMk1CaLika4BV1MfUm4B2lAsrQd3FLWIT82K%2FNhdBqUHnUBSXHp3krlc20qt00YvtmJU5cZbWgRoaa%2BnrQST1YPx9jQ1oOs80zajxKHsG8ikjGquSwDqR5uZYBz1klg%2BhfTNJx9%2F6zckvrV7sJ1uPHCg%2BqDcMTfpI6iN0fQX6hCbxZDvP8u6BhGRmrf%2Fh8VD%2BV8%2FXmRDqW7rDWDvmQsH3QZv65OGN%2FBf9%2FLqEhQrglgNg3Zab5kiLxJ51gKJp0K9Rx07Ip6GrknsfNlBW2hE22ocSoPJHsiw%3D%3D&X-Amz-Signature=837c2e60ec5829d3ac5c7611bce21f33b0deeeb0a6d8197e7ae977cc439f7544&X-Amz-SignedHeaders=host&response-content-disposition=inline`,
      title: 'Mountain Lodge'
    },
    {
      url: ``,
      image: `https://veerge-media.s3.us-east-1.amazonaws.com/suburban_serenity_home_page.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAVK34NDYCPCK3RTCN%2F20241209%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20241209T093538Z&X-Amz-Expires=300&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJHMEUCIQCvy26m0OzaFuvUG8Rf6m2EM7fnlLyGd%2FIejeIzr34QdAIgLafdZSbrwuw56zAZcVWpcBkESFV98uIAPjg4kSCSVD8qgQMIcxABGgwzNjY5NDM3MzkzOTYiDJxUsbnbQRXqqQbtKSreAiZ6f8TgFm0TDQctpYoYHBosOgTyuHiReiHpOhROZeHthvJZ6l%2FppzR7HWxciaVTSVfGzveziB3qrt67F0PS4TZQBcuxOOflrtHT4O%2B76UL6ShM55BBXEGQM%2BG1lUjAIkG6JLvHQhdnToNae62UZB0PpOEl5fCcd0P4ynLy6MOfWyCyJXnudrHy6HKrdsH4%2BZCgSh00MdVa7vUDbYOBlccrPrsdfGVNJpUKkvgqrGu7l0u4jfNI6%2FR%2FJ%2B6AcMzMXykPgmEyws9o5qA0o69JxCEeqCo5ibdHOj5MNSRUTxwIJENdwClVLFazW0jaxVeB7WwU6lbGimnu7HKJVUo7SACjOZvdVUlmgjR9k3637%2Bk8gMOkiNJbMA8Pg6cFuHqO2qLI5fYvg05pTxDzy%2Bvv2oJppL2aifuEdUfRPCq1w78M9XfmrsLpFaAnU2jvEnVf7TL%2BmB2py2a0Hsqt%2BcdSqMJvY2roGOrMC3rabiDI9W%2B84rR%2BPMYAtwfBTdLudyLC30EjkoPCFJ7NPQrr0wC6hPUbXsflzAnr1W%2FvXnJodcY%2Bt8moru2yH4rA92VeXULxIZTCFKywytD6pEhdh%2Bb%2BxYMHmmGe6kieJGbWFsEMKfMB2BuvgYGlCu3kl2VgzT621ZJsBcmx5wf0ucyJKPDpiMUoI9yhWBWRWcgSsBUkfXcCVHcAnw5a8SA42Bf3fyj4rIQsxdHMqOPyZne1g6OsA6TjUBrcI1n4AX5JTR8J6tN4VptVO2lPOCVgm3qdHhFdK8wa6S9Bycki47Zb4JuSDAcJ7sXtUA38urvLjLCoWxG6cUWKjuA%2Fhimxzuo744dasjihX0tr1OuJ898uy5D2%2BQEdEq5CHuSmAdcWdUsfHnWeU7zscqD5Jyt%2Bn5A%3D%3D&X-Amz-Signature=1b7056cfd31837789d9c20181d2eef8a3a5eaaee808f144ef2313f0afcb052dd&X-Amz-SignedHeaders=host&response-content-disposition=inline`,
      title: 'Suburban Serenity'
    },
    {
      url: ``,
      image: `https://veerge-media.s3.us-east-1.amazonaws.com/nordic_hygge.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAVK34NDYCDBX3WVIR%2F20241209%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20241209T093501Z&X-Amz-Expires=300&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJHMEUCIQD8WxvKJ90tt86comrfJSKV8RoT%2FkQN9YMrL9g1Emj2bgIgZgabJG7%2BKcrzhmiItDLfqnVyhaqgtib9a40ZPG7n5AgqgQMIcxABGgwzNjY5NDM3MzkzOTYiDBS56PAIjg9wXcOJdyreAqQAbgJkXlW21FrvHhOTy%2BHMJrQcfaZ338aYr4oXsId3UxOd0TJIw93QlIK%2BuNCFBRzUVw0SECHF%2F1G6sMizfMqJ7VXgTlqcgSVEyeDwk%2FNlcGoKaOEDsZkWEWpe7mSHkfYvV4JnJhNMluemvoTBVHVy2F8gOjwZK5UN6fnz%2BM0gKAXUG0yfGxRuB90Zfbi02PNUyk9Nkx%2FXFO9qUMUMc3VAweZsnSCNmT87W8VlTiGM4RRlTqoz4dDq6CSDdBj8qFtwoaBkjsw1Dpa1PPJCQs%2FJMM0ZiDivQj5S4MqLFdE0V8bb1aZDmhwbh33lRR2qjk3Yv92VSJx4wYbWQ4cYVQH0dYLrMeuTv6udTIttaz83iK8SfAG41%2FNeCciDNZZwXhq0je04Lxcw6zMi0gvuqMxRiiYI63JydZ5LrThi8HaOnaSeNL7bLn3Bp3j07C8ZkBEKo6P%2FSGZMXD1saz2aMJvY2roGOrMC8M2zUVmYc9JZddiH73IQgnXZxzTjwJwBTYB3eYEjAgct%2FG7YQPLK8%2FDonE%2F%2FkJG%2FlHkdZq%2BNPHtKIv6KJIEXR1JEgz2TUPbAaV2Q1i03cN41ljFLXFc5fHNjTgpP8noVrz%2BbaUZnBYHFLbUPj4y8PI2poy5r7q5Ho7zjl3157vN2mDv6beq%2BYa22%2BtkYg%2BTdcDEmlw40z18FnV%2Bka%2FcJBCSqhhrnn%2BNXdTsGKNCOH1FkPNvrmhOba%2FcAF8sg8hhct1YaOX1fLfeaVGpsf7zvTlL%2FqhylczjLs7VDJMZVRelkHGdkFZUn%2FE2oK%2BeBM1ExsXOnsFA%2B%2FIZTeT5SyiTrPuSuSw5aX1XA9utV4Q60I%2BDOQ2yXpk6NHGg7SAJFXG0VYiFC%2BTIbvaxlHlsoGrRx17p1Dg%3D%3D&X-Amz-Signature=bbb3fa3eab67e4de08ba3780749a6b973ccb2f2e4f69818fba4d2f4d9057f2bd&X-Amz-SignedHeaders=host&response-content-disposition=inline`,
      title: 'Nordic Hygge'
    },
    {
      url: ``,
      image: `https://veerge-media.s3.us-east-1.amazonaws.com/bohemian_hideaway.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAVK34NDYCLCCSZBD3%2F20241209%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20241209T093408Z&X-Amz-Expires=300&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJHMEUCIQCseP9sU3N4L4WeFijCUZI04SsNxs0cIYFV%2BVLxTFAFCgIgW9qvcNia1KW4t1VODBebWdxke1mDZQOWzAcdqz%2F0O9cqgQMIcxABGgwzNjY5NDM3MzkzOTYiDBk5KYIkqJ0nb7y68yreAjzce%2FcRJicxFAxRLrvOi2e7qDzifUB0Qes1RiQARSuecvGTAeU%2BRqJcrOWDf74MsHFrCmoDY8ObhSj4EFNM96n1ICZTN%2Bfq6ZP0DVm4dUOa%2BSdDyPH8ptAlx8lgmNs93V729AzFQ8IuBaBFOCp7bRkj7ut%2BnG9Cf2Qeyq9slWvKlSaKzTxqgl1eCN9KAL3wrnAz6w3VhnH9HD9fYwAsoeUG7UUS0iTTuwMSNfkZb8AJ9BdL6brT%2Brsy9HW7Fbr6WiPYd92%2BjvFbbKCrSrtAUWAoG669Hyp7ABF%2BZNAPv4%2FmOT5ecGjWtmcyfJ4iCLEUBq1Ai5G8%2Fgi%2BA6fxmXVZWuI1LphoHkPJBL8rWCXkX0j7meUku85QGocx25W1IUdXPBJ6YKti3z7mLC%2Bh1Rd4cY38DlyWjybDFf%2BYUorkuXzI3nIeoN1IMPMxWEZNQgvdxKodAlqe3fbLd07ry%2BtgMJvY2roGOrMChun4XKpmgV6xMldupKK%2BvaKqxK5MMEECKZhurmHAhjUd6lip0z80n1yQdjXlJ%2FwYBmAJ8FnjH7iYgxc55ItOhje096wmaQuSxnbOi%2FmDQ5Yhe3DjEN%2Fk9IrmownT7SZlfRHJ6Akfi5%2BhkeFLlf2KdkdWe57CqR3lnsiZFeU%2FJjSCuudxK3a7Cm18x8nVUMqnANUY1S7hCw8%2FxO8NBL6bS3y34uHduos8X3%2F92xiL6KC%2Fk3ACFJAtf0YkD0TTa9E%2FvscU63UZA70KUEA2gqlBuILtSmZIh1Xh9uByMEtDtKUT3NQrzR1%2B0znQq87BkEgLp1TduANLd%2FrkUsHUBMlbAKBkiFrSdVcJ4yvzZdG%2FZkYgY64hpDKu08rQbkw1qdjSQfcTAeDNkOFGsxeMNBhVFc%2BiWQ%3D%3D&X-Amz-Signature=24acceddd87deba31f009b4567c40cfbbf9e713d30a4464cb261d377b2f538e8&X-Amz-SignedHeaders=host&response-content-disposition=inline`,
      title: 'Bohemian Hideaway'
    }
  ];
  return (
    <Stack
      gap={{base: `50px`, lg: `100px`}}
      p={{base: `60px 24px`, lg: `120px 64px`}}
      background={`#000000`}
      color={`#ffffff`}
      id={`templates`}
      data-background="#000000"
    >
      <VStack align={`stretch`} gap={{base: `24px`, lg: `120px`}}>
        <Text
          fontSize={{base: `36px`, lg: `160px`}}
          fontWeight={{base: `500`, lg: `400`}}
          lineHeight={{base: `133%`, lg: `93%`}}
          maxW={{base: `829px`}}
          letterSpacing={{base: `0.72px`, lg: `auto`}}
        >
          Connect in a whole new way
        </Text>

        <Text
          fontSize={{base: `18px`, lg: `56px`}}
          fontWeight={{base: `400`}}
          lineHeight={{base: `100%`}}
          maxW={{base: `100%`, lg: `543px`}}
        >
          Templates that set you up for success{' '}
        </Text>
        <Box
          overflow={`auto`}
          css={{
            '::-webkit-scrollbar': {
              display: 'none'
            }
          }}
        >
          <HStack gap={{base: `24px`, lg: `57px`}}>
            {templates?.map((el, i) => (
              <Stack gap={`31px`} key={i}>
                <Center
                  position={`relative`}
                  width={{base: `346px`, lg: `743px`}}
                  height={{base: `223.5px`, lg: `480px`}}
                >
                  <Image src={el?.image} alt={`L`} fill style={{objectFit: `cover`}} />
                </Center>

                <Text
                  fontSize={{base: `14px`}}
                  fontWeight={{base: `400`}}
                  lineHeight={{base: `100%`}}
                >
                  {el?.title}{' '}
                  <Box as={`span`} textDecor={`underline`}>
                    →
                  </Box>
                </Text>
              </Stack>
            ))}
          </HStack>
        </Box>
      </VStack>
    </Stack>
  );
};
