import {Button2} from '@/ui-lib';
import {Box, Flex, Stack, Text} from '@chakra-ui/react';
import Image from 'next/image';
import {useEffect, useState} from 'react';

export const ManageBusinesSection = () => {
  const [slide, setSlide] = useState(0);

  useEffect(() => {
    let index = 1;
    setInterval(() => {
      if (index === 3) {
        index = 1;
        setSlide(1);
      } else {
        index++;
        setSlide(index);
      }
    }, 2000);
  }, []);

  return (
    <Flex
      p={{lg: `135px 64px`}}
      gap={{base: `0px`, lg: `105px`}}
      align={`center`}
      direction={{base: `column`, lg: `row`}}
      id={`manage-business`}
      data-background="#FFFFFF"
    >
      <Box
        flex={`1`}
        order={{base: `2`, lg: `1`}}
        // padding={{base: `16px 150px 84px`}}
        padding={{base: `16px 0px 84px`}}
        aspectRatio={{base: `655 / 830`}}
        w={`100%`}
        bgImage={`https://veerge-media.s3.us-east-1.amazonaws.com/myxellia_assets/manage_business_background.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAVK34NDYCAYY6M5CN%2F20241209%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20241209T092326Z&X-Amz-Expires=300&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJHMEUCIF6dIzU%2FaWg%2BrT%2BE2tj%2F7Mru4RbzIB9QwuDsMYB%2BHm3CAiEA2VumMKqUnIE2pv5fngsgL12ocXLiZ634l%2BXV8qTljCoqgQMIcxABGgwzNjY5NDM3MzkzOTYiDGvyVm2hAW0BEZnz8SreAvxLDFJW4%2BromuZ1VSNXW2WgAFiMkB9mLQMm0tkzgix2B3qdtNDId4fBbfQaA1Opn%2BHndrj%2FfomoO0BqFmE2vAKg4WGlxl7hvSFtQRCu1D6l4O2A%2BQa%2B4HwjJ3lj0oxENyOmlXZJd5E08yjJpa2zmhByhcScWo44eIngySek7jWVmjRgN4quFqHq8ZJ63Av68Q0hYcr%2F%2FHfLmGGjpWAf%2FNablCEZrYHfgTq5n%2B3kfaHxRdPBf9HEM5GXBPOeehu00gIim80W4xSHX3GRU1D0tHpzZ2mMpEGPtmDuy%2FsR2vYU5DWvaxkr9QTPEG6dctS8Keaov87Wz3PpYUS2%2FmZK7lfK5LXhE6cTJmEDslYG3x1ji1FWU1IBjr8DOuM7a4mT5LTTJ3okWm5Lt40WazuRU%2BoS7dwzxoYJE8%2Fpf%2FVToCniu55CZZCjcgIHDSLj2z4NatTE943NMGp62XJhHXZpMJvY2roGOrMCl%2F%2FJjKBFSTTCQp46uJesvVh7dD%2BltvyW4rN6uT4IA5JIybtbYw3pgELVmil1fMAyYaoyVYrJqVGCfA5spapAky82C2%2ByAubkUoW350pLofMQArZv0VyTe0Iqq8d6X7ovkNBcGSti9iNjJvSrZ9kzUlJLwD0%2FwPn8W9pKXJAQ0yEB%2BaRqlss5HoCoanPs70smM62PVnE9GHdxVK8XS468iYf5BW18YXg%2FxHSG4qp8xL7CBuSF%2B1Aykn%2FQSuUstZUEieznqmGIVr69D0uH3MiPeJ9gRmmJlU2%2Fn%2BSIJz4e2ME0NNKHskITdVjNCjgT9OOAvANVIRR7JapeWGlE%2BmUA5O53I3IebHjHWDbLnsLmszGD62JxkUHAejTV44ZjgR9ets4lmB8ibYf0wBu1%2FQ9GxAkRbg%3D%3D&X-Amz-Signature=95f5b2f7444d272a45c056829a79b5d384d91514d257dae3ffc2fa86eb48d41c&X-Amz-SignedHeaders=host&response-content-disposition=inline`}
        bgPosition={`center`}
        bgSize={`cover`}
        bgRepeat={`no-repeat`}
        overflow={`hidden`}
      >
        <Box
          position={`relative`}
          w={{base: `${(354 / 655) * 100}%`}}
          mx={`auto`}
          p={`15px`}
          aspectRatio={{base: `354 / 730`}}
          borderRadius={{base: `15.689px`}}
          border={{base: `1px solid rgba(255, 255, 255, 0.10)`}}
          background={{base: `rgba(255, 255, 255, 0.10)`}}
          backdropFilter={{base: `blur(39.22222137451172px)`}}
        >
          <Box
            position={`relative`}
            w={`100%`}
            h={`100%`}
            bg={`#0D0D0D`}
            aspectRatio={{base: `354 / 730`}}
            borderRadius={{base: `9px`}}
            overflow={`hidden`}
          >
            <Image
              src={`https://veerge-media.s3.us-east-1.amazonaws.com/myxellia_assets/manage_business_home_screen.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAVK34NDYCBJHJEXZS%2F20241209%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20241209T085209Z&X-Amz-Expires=300&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJGMEQCIDWDrq%2Fo%2BNKh4We%2FyxNqyITRd48i%2F9QeczbcCd3VzUdkAiAGqn4DdSXM6Wro9m2Ut8B4bZYimur9gbKQIzftoX%2BBZiqBAwhyEAEaDDM2Njk0MzczOTM5NiIMTjOPV6ijvMb6dCVqKt4C7%2F%2BGGq30GqZ2Nc%2FPvqJQY3eQAOsMdCZy6uXnnxEp33%2BbW1B4TOVsy7JeHDRWTYmfl5H5ntESlU1QSZuWuu2QrPbpxex0MbQZB0IwoFyr0Pzw3rOKM3Af9US%2BYWFWxtv4qauJd9W4HuUEcqFFnd7dsvyAz6eg2c8wIgMt1L5W1B3Ue1Y2guHK4bbr9PxL6v74CBzPYDlOxJ6uNxxpGQ04GWlBRJY8o7lG1qFlWnWiFtk7G9S20IwZ16ztUsXyrmHelVUHuOflRWwkVgE70qcoMf0O9HS0yO7KiVNfWGe1qlyjxLfXD9QpzVDDLtGXuHdJPdVdE%2FKil8u9sZjx7Qki1sT3wqcPr9Mes5SrxNa%2Bn507gCIoPpBYMVOnt%2Br51OMEWiIYUm5g%2F%2FJTz33bJZKhSvsClOsHl%2Fh7x6%2FvfGG8Y2FEDqHvTmzQZgj10sVQporWLsevELIkowV1UF9sBjowm9jaugY6tALW%2B%2FVZjK5EfE%2BAQ5IrNGfGir0jpHtRT0sIy%2B7HD8ijaMARD%2BIv9bTCaCvFuHdR93GgRCVZCyLXW22BMZVPzwGrnrqe7vwMmwdutwIdUSYbx7Eqw5N1v1ftJ%2FyNuT9xg%2FTDjMoNEfnYktm3SqpwWw2bQzOgYU8hR8qQcxo0noJZqK%2FnSTEJlCXfUgUPXhUdyV6Z24in2TkPohFP5yvMhdUXD2eivCLf4lBZqwqOoWzj1jbeQfivki3o8ozS2BzNeGJ1TnIoizn%2FdEPaGZaK4OvwOQBol18U73XegeoptgZvOtSI7aiH48X4RglUf6L13QJkIhYCokRGGmQVLBrjF50zByVOMmsIaLfTrVxi3jKZN541%2BsT9TLXodMBNZsMUKqJ%2BTcFrD4Ox63WREl6qAMoi3veuEw%3D%3D&X-Amz-Signature=50e76802e8e2f4d9e132083812bd84c16d356759f2dcf07ced980214b8523e04&X-Amz-SignedHeaders=host&response-content-disposition=inline`}
              alt={`image 1`}
              fill
              style={{objectFit: `contain`, opacity: slide === 1 ? `1` : `0`, transition: '.5s'}}
            />
            <Image
              src={`https://veerge-media.s3.us-east-1.amazonaws.com/myxellia_assets/manage_business_account_new_screen.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAVK34NDYCDV6TQAPE%2F20241209%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20241209T085048Z&X-Amz-Expires=300&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJHMEUCIAg8eRv93QDe4WxqRJLrIQzNEGN%2Bj01US4G34wPuPXJjAiEApff3lj%2Fr2tevP1XdB7i5%2FWVPkgTvhW3iC6IEIoih9zMqgQMIchABGgwzNjY5NDM3MzkzOTYiDJ0LRrdJz6LowH8eMCreAtB%2FCDNzkRIsNdVHCyg%2B%2FhoT4ZiAu74XpBc9tPtCqLo3ciYXE%2BtZbaykLbketEAbGi3VM7uwF2UXYUrWGaI4lPrDj9hxB5GZ0g3RBjhp0B%2Bw%2FuD4u0MEhz2hRNHf%2BJ02xPhqCS0%2BL2uSesMn8cOWXdHOcgXEfWP%2Br7ijy7ZSNsOLvp1aPtti0B70MsKE%2FMSmFRNnUaUU8r%2Bp6jYEcEkI1YlrbnebvBvrcyGY5ZCkchGmM38GO%2Bj18rtPz3LrJwW0Z3kRjk3%2FPAkCOgrCfn6kW%2B%2FLDB1uA%2BPMGxIl7XpXXBFIepot07vRlsxswEIMduitfzC1Z%2F9K6X7RK3JTedVcp25NOsNoOw9vRR6NLu2TuMH%2Bl8d%2BwMLXiDGT%2Fd29LvmBc2cFEm%2Bge7Mt2nDBx50sQAUfooi%2FNipzsr%2FSpf9CfZqRcQbsg3TVtey3WXWP2iVp%2F1Ze0Gj1a8H%2BpjgqW9oOMJvY2roGOrMCbjYcr2PhFLarnrqarmW6iTo7gAaacl0FwpRHSyUyMSg5EqSIyUxJQ2ME%2BwqDMrcXbanN1uMoQ9efsXCQZ8H9afRUBLVq0fDNTz3XcsJoYjuTMnB9v20er%2B08Q33o550DtA%2FhnDfJ6xFbAd%2FksKNt3%2BAt5yszPT4BR49wDDmuFB8pPqE6PPeLxccaQkzoO4dn9XxWUD65EwZiDR%2FKkPzeULN2zWCeEWmKPEmnO3FY8S41Dytf2Rxhp1zx0l%2BrSdfyAgFuiffGOMrc8IW5GWSr6IQsKXizKPVUJc2u5omFcXuUEdKnfdTgc5m52BJn0AZOtav4xvsYL0IuJHyihJ8o1aqEidjWyKZqDBoabNCY3Mm%2Bspl9ObEbmSybbFDMzK8%2FtXa6uj9JP8ab7la5jZp6rbLlvw%3D%3D&X-Amz-Signature=62214b3ff3e26fb33ef7bc36c890dc92ad7b14012900851e5c7dd4b81c5267e6&X-Amz-SignedHeaders=host&response-content-disposition=inline`}
              alt={`image 2`}
              fill
              style={{objectFit: `contain`, opacity: slide === 2 ? `1` : `0`, transition: '.5s'}}
            />
            <Image
              src={`https://veerge-media.s3.us-east-1.amazonaws.com/myxellia_assets/manage_business_user_new_screen.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAVK34NDYCFB3FKOU7%2F20241209%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20241209T085142Z&X-Amz-Expires=300&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJIMEYCIQDlhgbC4nOfBx8pypym39UqpQ6bQ%2FB6i%2FqfU1ppi4srnwIhAKEvm0PKc%2B10uw5vbvGmF8Xb3s1VmyZ18vg3JnMNPxunKoEDCHIQARoMMzY2OTQzNzM5Mzk2IgwPaYXwC7xt9YCG6CYq3gIapTCeEpBsgfhRyPc3TOVVGOsqCyaeMWADdPT%2BoAxvr%2BzDp9UGiIZYqwzI54mAcDFejce3Smja8MgFDQAgzFVluEowtUjpwuUnJPdv5iXRvXVslJ2MjJbTRN7ERN6IFmse0B4r1WHMJiIaxcbd43%2FgLWdBfsVmzXLu%2FV6QOfJkEV2%2FRo9kvNN0dkJ%2BykxbO%2BarXkWRX%2F4c2tcP2FAyPpBsJLPQlBfWMLmJY2CSh29%2B7ZPR3DhqR6MR%2BjefnC2BIuCudaqXuu2yaG%2BlYlNTc%2B8qpx1aHU8uqGw2127ZgmsgRYI0O%2Bnt%2BhIoQ9aoRDY4UhULMyzxhCDAhVigFib8lcDBYtLiimLPpAsmxMllYlrlvRsNOmWYZRv%2FO6WK0TyX6nOZcxi4kxjL1dTK%2FLKCad6MZIAgzyQHgqN3g0zOcyKKVoBry%2BycddRmTdGWFJvp6ZLCfthNd%2BriTNdWqnKmBzCb2Nq6BjqyAsKE4nsOqbi4c6qY0WdSQtnQs5L44qHLNxGTjQrjIILLjDo0d61wsBzwdOfucIkMsvkpxV0mJLNJd9J7sttjJv8zby81YIu6CibFJDAoVKA0E5eeouEDc5M8YV7pxiXtucjU2vYjG3ax7cJm9pnYEMVRfClU3S8T80rj9C4niM4n1bh3KBm0bJm1M3pXMUmM0KUqwpti3eHQhIGPDo2zDXkoSDnhkYHaWP56sgXVtqj1lPWEBK9%2BG45OiBfBR0bx6tgk3uyb1aHpKTBHgcMDpPqA9PvO43jSd76S9XFrGhWKFYszaJub6I11ue0HysNEM7Zja4d1G07t7y1PU%2FHqX1oF9BTMU1sthGWsqeOGrjhwG90AXIq4wspD8qHmhQsjgsSS6xm%2BQXA7G9hjq5XOBFNanQ%3D%3D&X-Amz-Signature=2388fa8b92333fa831b1e1462c0f111454cb7c8d03e65101aa701caa784590fc&X-Amz-SignedHeaders=host&response-content-disposition=inline`}
              alt={`image 3`}
              fill
              style={{objectFit: `contain`, opacity: slide === 3 ? `1` : `0`, transition: '.5s'}}
            />
          </Box>
        </Box>
      </Box>
      <Stack
        flex={`1`}
        gap={{base: `24px`, lg: `40px`}}
        p={{base: `80px 24px`}}
        order={{base: `1`, lg: `2`}}
      >
        <Text
          fontSize={{base: `40px`, lg: `62px`}}
          fontWeight={{base: `500`}}
          lineHeight={{base: `120%`, lg: `133%`}}
        >
          Manage your business like a pro
        </Text>
        <Text
          fontSize={{base: `18px`, lg: `20px`}}
          fontWeight={{base: `400`}}
          lineHeight={{base: `normal`, lg: `140%`}}
          mb={{base: `24px`, lg: `0px`}}
        >
          Capture leads, gain insights with detailed reports, and automate your business—all
          accessible from your desktop or mobile with the Veerge app.
          <br />
          Enjoy seamless, synchronised management at your fingertips.
        </Text>
        <Button2 bg={`#141414`} color={`#ffffff`}>
          Get started
        </Button2>
      </Stack>
    </Flex>
  );
};
