import {Center, Flex, Grid, Stack, Text, VStack} from '@chakra-ui/react';
import Image from 'next/image';

export const IdeasAndInsights = () => {
  return (
    <Flex
      direction={{base: `column`, lg: `row`}}
      gap={{base: `24px`, lg: `70px`}}
      p={{base: `60px 24px `, lg: `90px 90px`}}
      background={`#2F3FAD`}
      color={`#FFFFFF`}
      align={`flex-start`}
      data-background="#2F3FAD"
    >
      <Text
        maxW={`437px`}
        minW={{base: `auto`, lg: `437px`}}
        fontSize={{base: `36px`, lg: `62.5px`}}
        fontWeight={{base: `500`}}
        lineHeight={{base: `133%`}}
        letterSpacing={{base: `0.72px`, lg: `auto`}}
      >
        Our ideas and insights
      </Text>
      <Grid templateColumns={{base: `1fr`, md: `1fr 1fr`}} gap={{base: `32px`, md: `25px 10px `}}>
        <Stack
          borderRadius={{base: `7.5px`}}
          borderTop={{base: `0.7px solid`}}
          borderColor={{base: `#1E2C31`}}
          background={{base: `radial-gradient(50% 50% at 50% 50%, #3344BA 0%, #27348F 100%)`}}
          overflow={`hidden`}
        >
          <Center aspectRatio={`386.5 / 290`} position="relative" transition={`.5s`}>
            <Image
              src={`https://veerge-media.s3.us-east-1.amazonaws.com/myxellia_assets/ideas_insights_1.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAVK34NDYCMVHVXCOD%2F20241209%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20241209T084721Z&X-Amz-Expires=300&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJGMEQCH3heHcTqgo6ksnVg6f6qogbI7rfoppE1HFulbtMQk6ECIQDXK67O5d6gI2rxY8O0SFO92mLhU911E7gATE67%2BuE6IiqBAwhyEAEaDDM2Njk0MzczOTM5NiIM7SCBONrkea2Dg8HAKt4C%2Fq5el8bTvY0CtYSkBJoqmGbEwwoXzxZsyppr1CpJOihQE36NxUrK9oXPRZUe%2FOItye5ZqpSKmqVoXhU8ExSwWCnxnUbAoJs%2B2v66kT6uz3S%2BdfUE7Sx2%2FgWRJ755TMAUGlq2MivUKAq4myZMesV1Bo6hbxLyj61QuO%2F9C34da12OBl7uO7O7b%2FwJNGPnB2VCoNOOTKr8Qeo%2BjF5gT9dwQqN6mb4SMObQMQAzn5Sg3OYsSusyHYN513Fjr3AqHyDlewiE%2FFNENoS0Jqij8q9%2BI4RlZhPeoKyxkEgEJyrhMb2ouwJsKSHXn59cPOt5KfRWdGkZRIXUEO2JhHh3S9gtFtwSVMJt%2Fn2%2BlkZ9fXsmS4O58BB0Ldxijv7oZ2YYq6%2ByIQdEAfT4tuctzr%2BYJEKG0giygBmm6r7RWaEey1e4vxQ7%2ByHX31Hy38HgvglMVJFUHK3QJrrDPmNkveV713wwm9jaugY6tAINbMCkT3RVUCRQa13o0enMpAcDOwGFrsbXIEjRlGymm50mERMdItMPLZ5oZBhSv4uj2gJ5tEn92vF8dqHkomVDhHH8VfXty9C4wBS%2FBnkK7RSZbHusCvjKm69mKe4yNqjiQOVpXu8NElfxSwpbGmfkWgGArG2KcqFeuOx0JX0wnSzUZLNgqcjhBuzyO07PGB8Kb5g57gioGNsvOCQzJgWUd2v3CpqfylQxMM1EWlYtK8yIxU7c%2BkDpci%2BEsIjvyZgxwcSuBdMJccnOMCwDZe4OO5%2B%2FoEh3qOH0YiBDHmkiTKEZQKGwHVO0%2BajP9H2PLFh55sRJaO8hTmyoKIOZ2inrcZUaEl5LllDF7B8lqDtgt%2BdW98ZUW3naUj5S%2FEmD3QegnEGH8wRW5gyvXPVD3b%2BVWbUrag%3D%3D&X-Amz-Signature=d0b36b8987695d8b20de46cf098c2efd3ea70c38a76e76ef0a293dbf89dbd3b9&X-Amz-SignedHeaders=host&response-content-disposition=inline`}
              alt="The Genesis"
              fill
              style={{objectFit: `cover`}}
            />
          </Center>
          <VStack align={`stretch`} p={`18px 20px`} gap={`8px`}>
            <Text
              fontSize={{base: `20px`, md: `13px`}}
              fontWeight={{base: `500`, md: `600`}}
              lineHeight={{base: `120%`, md: `140%`}}
              letterSpacing={{base: `0.186px`}}
            >
              The Genesis
            </Text>
            <Text
              fontSize={{base: `12px`, md: `11px`}}
              fontWeight={{base: `500`}}
              lineHeight={{base: `125%`}}
              letterSpacing={{base: `0.447px`}}
            >
              See the big picture more clearly. Access dozens of metrics across every key aspect of
              your business.
            </Text>
          </VStack>
        </Stack>
        <Stack
          borderRadius={{base: `7.5px`}}
          borderTop={{base: `0.7px solid`}}
          borderColor={{base: `#1E2C31`}}
          background={{base: `radial-gradient(50% 50% at 50% 50%, #3344BA 0%, #27348F 100%)`}}
          overflow={`hidden`}
        >
          <Center aspectRatio={`386.5 / 290`} position="relative" transition={`.5s`}>
            <Image
              src={`https://veerge-media.s3.us-east-1.amazonaws.com/myxellia_assets/ideas_insights_2.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAVK34NDYCG3N2WG4V%2F20241209%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20241209T084823Z&X-Amz-Expires=300&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJHMEUCIGffLwgeU1YleF20G2eWCL%2BmDCJYqa245V3tve7WIStnAiEAwyJMcG1ootQ5LdcPGCrr0J5hGnvHVEVP1PSpjLinDc0qgQMIchABGgwzNjY5NDM3MzkzOTYiDFqUUrsMSVX6uugdbSreAlKrgiJulIzBzomtZAttpC7cjOErCx6n6XQAo0Ls3vD8fSFJ3Y97f4x%2B2An2OBEeboG80IPs1W%2BdATiD0ce3NOlFdypb2P4J37gSI2kaGIKj84AXzIdAlvxGMwVNK2%2FkVuURmLyAPYlyAK5IWBbbF8ZDaxGzMFStjVegGVvN2MCfRILVDXkEBTwZnM2i9i4Hd%2BSUJtY3or1IVsdiW%2Fp17lZsp7k6y9Tc%2Fl9ZKAz0GqhpOeJVEHaTTRsQTlf3Ndj%2Bt9w%2Ff6U7yOLGsBtwm3SqB9nFfftpMqBfxTG9ZCncwuLSZuxiFM0x0qZ8kzS3gX4rws7ajrSttn%2BJ4ZO2ZeRP2VTaewe0lFNmPZUWnzaZzuAWVl2wMqGo7NT1aAK2UGTAvjwxiQieiLcCIrJ5RSEwP%2F36%2FTKiorLMIhj4GBwKMZ7HnjD9e5bFGV%2BLf%2FaopAwvUKvzZSHSOjTTVIsHLKoTMJvY2roGOrMCZ2Xhi4sW7xi2EYLvNxkYRsjYrROgMCEgI5NinddtpEiKWfCHVQgrhggqIw4fhuFau84suqiQP1w%2FpksHTWnXaGy2BPCyGLyJTDZTUE3jugdYpIq6wjmAlkIMoacpY6%2BpcnBMCv9FoJcYqV%2FHG857nhidzx7sx7DTNYjLmi1G0yM8x9LxhCuzz5utdUVBiuYchHN9a2k5vm6KE1v%2BA5Nf2MfyECchFPktkVe%2FSainqVa7XhFYj04hNipdTqrOyOkx918LPeQ4eSBp%2Baa%2BGcH40d9WqHfVNR06Wr911vXf0yYVoYwg9wQfRICFuaVYDjHBRJqx6z2eQV1P3mHmE7APl8xA7NOY%2BLmjvN5UT%2FJKDxwDpPbYFyl6zEhiR1LhY2JtH5KBXiKdGuiRqC%2F3ct9uQHpqWA%3D%3D&X-Amz-Signature=b699bb5a6478c869b9d1326c131187350c19ec2b72800f4cd179268ccb9ae923&X-Amz-SignedHeaders=host&response-content-disposition=inline`}
              alt="Why Myxellia instead of building"
              fill
              style={{objectFit: `cover`}}
            />
          </Center>
          <VStack align={`stretch`} p={`18px 20px`} gap={`8px`}>
            <Text
              fontSize={{base: `20px`, md: `13px`}}
              fontWeight={{base: `500`, md: `600`}}
              lineHeight={{base: `120%`, md: `140%`}}
              letterSpacing={{base: `0.186px`}}
            >
              Why Myxellia instead of building
            </Text>
            <Text
              fontSize={{base: `12px`, md: `11px`}}
              fontWeight={{base: `500`}}
              lineHeight={{base: `125%`}}
              letterSpacing={{base: `0.447px`}}
            >
              Capture leads, convert them into clients and streamline your workflow with a complete
              CRM solution built right into your site.
            </Text>
          </VStack>
        </Stack>
        <Stack
          borderRadius={{base: `7.5px`}}
          borderTop={{base: `0.7px solid`}}
          borderColor={{base: `#1E2C31`}}
          background={{base: `radial-gradient(50% 50% at 50% 50%, #3344BA 0%, #27348F 100%)`}}
          overflow={`hidden`}
        >
          <Center aspectRatio={`386.5 / 290`} position="relative" transition={`.5s`}>
            <Image
              src={`https://veerge-media.s3.us-east-1.amazonaws.com/myxellia_assets/ideas_insights_3.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAVK34NDYCI7YN3A2X%2F20241209%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20241209T084853Z&X-Amz-Expires=300&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJHMEUCIQDVXGx7jXk965xURHVBGgfHEAIoowCPfu0iPQhMKXl2agIgT635zx7znymkamVSTO0PAr91%2F7zUnl7YrX4sL6%2FBqaUqgQMIchABGgwzNjY5NDM3MzkzOTYiDPLCk4tK2tcDjeSLTCreAg2ErZG0ZtX2D5LQ3mfoMPkcU5YjkXzmvcJzrawPdH5zbDLZmTrqyD4YBM9rWLm%2BsC%2BfsgfTBs8ktBfSIM1NUjSJ8Xz4NnmL%2BvlzYEfoXdrhF%2FQXGLChg8G2IfGv%2FBStkauwOeunZPyWYg8ZoN3qc%2Fm2H1CakHuUlxJDPRLCbD%2BVPsApSVfkqNnKv2ORic%2BJ%2FM6F3MPEqAlgwP3O7w27KgWQ2uXqF41Y7r8e9oNIk7EsHJ%2BjNIU3MQBmmRhd%2BQ%2FlXFVydWseRd1WcbefmsDtogG%2B9Q5fuz9%2FCmrbCwg8yvb8OYp4VW%2FZ7teqHRWTABiTgjkGLawzvq6LN7UITcuzgHvVS1kwnAcnbUP68q4A1fsLRgooAlmvEQOMVSvuY3fze1EL3pwUTMjGPAhl4qgvr7ID5rwfd2MKIIjBSbfG5FHhQQQx9jf2SYgY4C7dogj2KLv2kdZb4n6fafuMSxwXMJvY2roGOrMCqjnTwzyHnSUyJB1yp%2BzPXndeyTjBrJDPpvhq49OCMu295GmekVVgBO3Zli07QvM27BbNrTupTkQw3N3B%2B6ykJGJWw%2FeEHmm5vsRY5s2oGZpbOxlmsF%2FE1C8AFDL%2F87LzLNw5nKYQ4Tq46oddkNyzkA6%2BMb05Qs4lfMBPKJ%2BeyGMO8b%2BYMRzooiLFOTz9LE%2FVxI5pTrWnjWhzN%2FA6Vy0bk1htG7%2BZVm6GyW944e4Z4izrVt35pyV4ZG%2FCqOl3hT2IG%2BUa9%2FR5l4Zxd%2FpTUGRHTVCoh0A1Js%2F5bD8%2BaZ%2BWQ2qKkY29SnVW%2BxwbRmCAqjoPAxFoTUkip2frEvM1lyaMQp6f%2Bl2PPGnL2hahfqEFlRZ3ybFB%2BdTd4xkJt%2BxlV35k0RV%2B2myUlrbf%2BB1AwZ6EWIINAQ%3D%3D&X-Amz-Signature=b41a1727d78ce5d4fbc8cef38590bf47a1f8fb7186f4d340642320cdbbfbbdc8&X-Amz-SignedHeaders=host&response-content-disposition=inline`}
              alt="automated payment plans"
              fill
              style={{objectFit: `cover`}}
            />
          </Center>
          <VStack align={`stretch`} p={`18px 20px`} gap={`8px`}>
            <Text
              fontSize={{base: `20px`, md: `13px`}}
              fontWeight={{base: `500`, md: `600`}}
              lineHeight={{base: `120%`, md: `140%`}}
              letterSpacing={{base: `0.186px`}}
            >
              We have automated payment plans. Now, we’re engineering
            </Text>
            <Text
              fontSize={{base: `12px`, md: `11px`}}
              fontWeight={{base: `500`}}
              lineHeight={{base: `125%`}}
              letterSpacing={{base: `0.447px`}}
            >
              Capture leads, convert them into clients and streamline your workflow with a complete
              CRM solution built right into your site.
            </Text>
          </VStack>
        </Stack>
        <Stack
          borderRadius={{base: `7.5px`}}
          borderTop={{base: `0.7px solid`}}
          borderColor={{base: `#1E2C31`}}
          background={{base: `radial-gradient(50% 50% at 50% 50%, #3344BA 0%, #27348F 100%)`}}
          overflow={`hidden`}
        >
          <Center aspectRatio={`386.5 / 290`} position="relative" transition={`.5s`}>
            <Image
              src={`https://veerge-media.s3.us-east-1.amazonaws.com/myxellia_assets/ideas_insights_4.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAVK34NDYCOBZWW4A7%2F20241209%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20241209T084913Z&X-Amz-Expires=300&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJHMEUCIFwh5KJ7ogihQpHt1PFPkabFQZEHLbmzYFUov4S5OLSkAiEA7TPKou0xdYbLFhD4%2BHmuf3Go%2BgGfsTTTNpR1DHy7GS0qgQMIchABGgwzNjY5NDM3MzkzOTYiDNyVtElG01tD6e4pXCreAoYjtZlbjkg4OsKYVvFpTJNUKtRsYP6EH%2B4p8zU3bhDf7mAW%2BNwEchYAPnvXKSN2L6PyoemPvPcoCt05d9hjaYnmhgMnba8onfGgmvAjwgVdPsuy7ueWomQyk1MAmzKTC7j%2FJpRjKfkB79%2BEmabxdTMWAyiNuUfjusc69m%2Bw5LAVUW103JWN%2BpZ4VPItraqNQfixAFQHD16LYvnGugRXmJWF6N4IvEe33y5oalY2W8BdfgIZ%2B%2F%2FVlCVB%2Fo%2F6LDAbTBOoaXmcP6lkPM3QtQIJXRL5pEVkrzyTyMIbvKNOtFSmx6p9Y0yG3g9KjBnriqHD8oxu76waL0q5OKJH2tDi5HYt5z%2F5gQOsouXkmHJwHIbj7HA3AAuyXE6UAckefvAi5rjW5nwBmgLTfBFyiGz%2FO%2BW72mfLwO29OgbzfgN1CoHKdweNHm7y4H3jIiECrx6pr8xV5OQQP6kDqwCjuhpsMJvY2roGOrMC8rCuGxSrN6dpii7RNgS4IM08vWg7L5UdEaRBzgBwOm8RQlvb9SXz6bLda8BVRh%2B1CqBNTvgSzlvkSDOmuxS00%2FQdAcVDWJfJi7rPCuhKDBnLo5Dg7eK21iVT%2B0RSN5dGDjfXY8HSihl0sg%2Fu8VjexcRb7Eg8n4mMVRPXz9sTGp8mQ1XBTASujwQx6xPgdLoSlr7l%2FRc9rPG7meWWS5PjDNFXE1TFxMJ1NiPZujEQVdW49PQShxnf1b5JSCPvIBHLscZj0ZTY9yiLSaFAdsFaMKXZBJomPmEEtA3EFFNOLIB0MQgQALxVTEEOnrwVLVukytGfzr1QvVyuV21EfSZh3UFv%2FJzXQzlc2sj%2F1lN7njmOyEVoBOrZC5UAJxMRNBLHnPN7gbHsnTU%2FjrrGupZvTd6ChA%3D%3D&X-Amz-Signature=47f99ebfd987d2c1eeae2195850e4dd0a9dfdacd8d9a770dd585737655107c3c&X-Amz-SignedHeaders=host&response-content-disposition=inline`}
              alt="fractional ownership"
              fill
              style={{objectFit: `cover`}}
            />
          </Center>
          <VStack align={`stretch`} p={`18px 20px`} gap={`8px`}>
            <Text
              fontSize={{base: `20px`, md: `13px`}}
              fontWeight={{base: `500`, md: `600`}}
              lineHeight={{base: `120%`, md: `140%`}}
              letterSpacing={{base: `0.186px`}}
            >
              Why do startups struggle with fractional ownership?
            </Text>
            <Text
              fontSize={{base: `12px`, md: `11px`}}
              fontWeight={{base: `500`}}
              lineHeight={{base: `125%`}}
              letterSpacing={{base: `0.447px`}}
            >
              See the big picture more clearly. Access dozens of metrics across every key aspect of
              your business.
            </Text>
          </VStack>
        </Stack>
      </Grid>
    </Flex>
  );
};
