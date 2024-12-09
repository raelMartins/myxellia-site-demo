import {Button2} from '@/ui-lib';
import {Box, Center, Flex, HStack, Show, Stack, Text, VStack} from '@chakra-ui/react';
import Image from 'next/image';
import {useEffect, useState} from 'react';
import ReactPlayer from 'react-player';

export const ProptechSection = () => {
  const [isClient, setIsClient] = useState(false);
  const [count, setCount] = useState(1);
  const [animating, setAnimating] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const features = [
    {
      title: `Offerings`,
      // image: `https://s3-alpha-sig.figma.com/img/e6d4/af46/8ad43a2496515aec5666e292126c4592?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=BBhlKd3eF00Io0l5pQJEM--gaQmItTwkMWXHSYqUSEvmGvWSO3pm60-n7Nv--RlFKakHF3Sxqb5RyCjg9vg7LefeE~BaovQjpy~YYeASRNbvHNiiv~PhffVbIbKqg5PC3K-pzuqFo27Yb9luRYNYEnbJz1gDlZJ146rzJ6w1XFHv0nus-4WZBg~rUWMBg0JCwMtpQ7sKvwnQN66AGdl1Pik~6Xm8J2FK8LsQB1u4szZUG2uvJeZyRmI~Iv~nFweVqg3BIporQolwywj6V2ryMSFeRDKJABZs4p87LqF97wbXXHJj6tPWQu9OjgU4oj8fJQEmiwn-019NKYL-kBkMgA__`,
      image: `https://veerge-media.s3.us-east-1.amazonaws.com/myxellia_assets/proptech_asset_1.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAVK34NDYCHKESO2XP%2F20241209%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20241209T091529Z&X-Amz-Expires=300&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJHMEUCIESpBRqK9j6j0z%2F6h3sYiZVlo7DSj%2B5Sjra1uqjDmeAZAiEAnchY0wHTi0z8XX%2ByvEXbisHxN83kj5wTykCP%2B10VLSgqgQMIchABGgwzNjY5NDM3MzkzOTYiDJjf5AuzFSTiftKdxyreAgc02r%2BhXW%2FPZiGVQcYxPpdAo3al3iGwklveKwOC7Fd3K%2BcOsnVFXw%2BKnQvEc30gdOowCWCQsvZAWNurCtMaw1zvcpEl6XrsN%2Bu%2FgiXLo6Nt8wHw%2FY6J1NMtKHeGeHwofQOuz7JxCzIK4AY1E4FYWzHInyBkjebTi5Bxi2Vzt4GjGpeTmBSuFZiyjqPF0cB8%2BeDwu8HktFsGPt8H%2FFgj17jyTbbGCixmtdESSK3000SF9hxBJ%2BaYRg5kouSh6scvKQ3JQlrWZQkPn3eQC0WUKlvrZvwJwbyJE8aV07UowX3P6ejVqk7aW0CRvc4ouSE6BUIDQPoPFjKg71lpjjMXKSwsfRS4PkBXq9nEk1Z%2BQkHqkpzV79zTgmU0xkiWEYIJRZ5DQu9O3LDcGXm18Ab%2BQPbP%2FbhDPRu7vmmB%2B8BgiuFaLGNIxQaZmT2bv%2B8mtDGNOONC9dQptCMQ4LMDJbKUMJvY2roGOrMCVoTCoG1sEzDmr5F7AEEY0%2FWDE7zLdGGzpK12fCGLeH5YlIrYJ5LPy6hOZTyv0bvCtGEy%2BpiqPY%2BXQQ0wii5NJYI3Vg%2B1Yen9IshovZ70elZxwMDqfWLIe%2FWc9Mu%2Bm6doz%2FI2mD82pW3dMsyklLIhn8zjkxliXpDO2zRyTnC4kpOVlE4zwDuZwKBOQqVqMVKAj8TT%2BS7GZbT8SGzwPcfki35RL%2BRz94P3Wmay7BN10n9HWsKJKKBZTTCTveOGBvAwDNd1oYU%2BzwKnJ9Omr5yz14gLXP25W3XKGoz0kgtx%2BJzUeLBMq0kgmsSk9slO9gkOL3v6DOB7yoF8YhHKo%2FF1DjzSN3PZRygcKx9KZXK4yTnuUNw5nN%2Fdvp32enp9Dh%2BxV74UcL5yTqhXCdzsDXffbl%2FxJQ%3D%3D&X-Amz-Signature=8b955b6e93a8c84d47a449bb4561c1ec9e2f8ede9c083f92c5616fdcfb192688&X-Amz-SignedHeaders=host&response-content-disposition=inline`,
      video: ``,
      media_type: `image`
    },
    {
      title: `Authentication`,
      // image: `https://s3-alpha-sig.figma.com/img/16f7/4946/90866fc624eb8af4a10d4ed88ba0d76b?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=RU5J2HJ~ectUteaGqtwvbNJxIDu0gRi3IFvivvzCfggNh-czDt52RipprTFgpiGabog8etm3onpymQJuEvaCXjPnLLea0H3-lJFCwg0dahDqYCAQwcyw-ccS--6Mp~3l5EbFbAZOr2OoKKoXZv59DkKAmSCtMLTdmG7oWxyCjsSDsP5MB2j6evgtzN9VvuY0mK4tX6-4ItCDKY3wQEb6Y8DXuPYjl4LaUdU1W-As8eJc2wPpNiETaQnN5d-vjuGaHJAZV4-Z7lgzEKUd4zuiK83RXt~0sgNNKP7KtVuTpBn0h3OTiNsYuzETIfx9U90qhFh-HnlyzQN1aZMbKNK91A__`,
      image: `https://veerge-media.s3.us-east-1.amazonaws.com/myxellia_assets/proptech_asset_2.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAVK34NDYCORMW6NA5%2F20241209%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20241209T091614Z&X-Amz-Expires=300&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJIMEYCIQCI95Xp08wo6TquA8FUCHtHqCjXLTq4mtG8qdSYTRu%2B%2BgIhAIAwpJB36yNTRYbAQXDNDAn85xYK7yoF8XOw7tifKd%2B9KoEDCHIQARoMMzY2OTQzNzM5Mzk2IgyiD8dDTWE4KnZtw3Yq3gLHlAdIiivjSLN5CRP1mjSNHdKTENQbYh2firt3wbAGh%2FofXa%2FvuIfcs21zhnyNgNJL5CVkGvS6RYZwW4ZsUcKlFImG9ZAgTFrETO19MCvHSIwWoLqcXZ5ig%2FflAc0xmffcerhjogXJR48iJQAzZi5jTEqpu23aqXt%2FaLzDQr%2FNxUG3XVm3DpAnB3jsIPvbeOk7xejt5j1XZt3clJgTqBdqpVTQ4sjxrzodhNbXewci%2FYaJCx1BBjKgA6ADgD3Zfx0mSO6us1MKuqXPSnjW6ECvVvgP2Agaoy%2Fi%2FMsM6npfjfZ0IhSWgEmf8JpXFQTEgmm4wLfiEMncNV6P7nLTnDBd5kb1mCXmNucBbyJAIQvZceIaqHWHvKlKibyLCqgG%2FpbuMmfh3kh%2FxdgiOhy4lpXReN8SHg1Q3H1gIyW35yCISxkX8BdsDdBW50W4rTuzDUYC78lnnwR6oMrxCTGsJDCb2Nq6BjqyAuHVMnYq1mVpD%2BZeWquG5XPMd88li8NRZ3MbILrBaOR0NSQ7BJYwEAM5z4cs8k%2F6TR6j4iMdDvziHww74p7fbNNI1cCk3eSR1TGNpDwC3t7y%2FMdkufhGo5JR7LBP7%2FRo9v%2BXAY3VXj%2ByiUAtGnrxNfR%2BkJdWjegjuOfq9XNNmlDK%2F6Hgwa8qHm4cfPDKdd7npLAwYW%2FH%2FMb5DNtyQr1%2FRmTbZtHPMv322hsfv3tlra3iv4a3R%2FZO6%2F5HY7rW7wsVZitoSsJKcKGIKU2W2jHxhbDS7r%2BnQ6oBrV23dlnG%2F51niNVOdVRbNbvxDFNg%2Fg94gCXtciFRlU8I0v8LtybuxszFscVFZd4jWNmqiSEl4dWJ0473HZsMXYYMwZiLr6jgteRaTT60oK30GuzodxwdnZg5IA%3D%3D&X-Amz-Signature=d04d7fe78389f182d866ee12f1946aae274afd9b26ae7cdf498e935fcbab677b&X-Amz-SignedHeaders=host&response-content-disposition=inline`,
      video: `https://s3-figma-videos-production-sig.figma.com/video/1380982990654738066/TEAM/9c4e/40fb/-68c2-4c2d-97f8-9b2f911eaaae?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=LB3g8R-Nh44BEM6PzKGVuiZTghmRAJ3BibAqsl-2eEqILX7kPIJ8UNo8Hp~GaxonyLEWEitvcYG0qRrt9anrCcl1V-8zcwmbEKSeoW-NOONF9ISf~PaBXpnK9YWX3rXPk-M0VMYlVbWJ64tv6UKqsGCOxtWGi5F0hMMQxmUP~lCLcj4IzdUMcxIfA0jmTZNAA0mNyizbAtSYPQLnn4vxIl8~2XRD7YWaS2aAw7g4SRl5tWRdGEF6J66ImVYwFjHyEfgvK6Lui8f8ju~~Lpdj9iY4kpOIynjuhIofJQRHqbO97q3raNzYFrPjiqWivWDx82Fatu0jfBXdZ9kfojek9A__`,
      media_type: `video`
    },
    {
      title: `Schedule Inspection`,
      // image: `https://s3-alpha-sig.figma.com/img/a711/14fe/1c506f6e46290e08972c7e34d397fe04?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=FX-0qUZg~9jlv30~N2RhOV9ghDYA8SrZaVkHjxjF79zUQ3QcLpX42SzFJnvOFYqOYbFH-k75Ltcbhsp0NrUp6fD0pcDPnNJku-wapa7iJs1gYG2Wgn~xCLn8d~YYSYug17lyyfcqOb-oupitfIFf2dudyNZI91WjO8ZBzgJFB5B7F1OeJoqWNR5fV2MRajXvWBUv1ZeH9S9OCbZv3NEdy6fUEVwQIYE2jdJQ5Rr8qakA5D1byuamT~LrONaMn8SCgiP9j9eNqvW8-DLfsKe4QiNQ4wyMem35EjST3Jn8Gd5YZJn49dPly96c0slBxWM55gpHH6nX7JCCoXffABN4XA__`,
      image: `https://veerge-media.s3.us-east-1.amazonaws.com/myxellia_assets/proptech_asset_3.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAVK34NDYCHPVNX5WC%2F20241209%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20241209T091846Z&X-Amz-Expires=300&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJHMEUCIQDzLYH0T0tUFLIOxfqWij0lQmQo0m%2F6NTKhfz5Tf310CAIgV2BsAD6hzWVS4c%2BgEvmGP2aeZAUN46i%2FTQ6k9cohkZUqgQMIchABGgwzNjY5NDM3MzkzOTYiDP1c4kxk0s4QLkYnVyreAv005GRU%2Bs45TPHk0YP0wxG3pmS4foZsErLvpwC%2BbfbTfbxcDkR0%2BLyMxEc9UgVvmDDVBay0Ku%2BLZje%2FqVkl31QtkpCRXL2X%2BNp2KYzsDRRJ1qkCy4MCffR5D%2BbG0%2B1REfIhNYwAUv5NtSBc%2Fxwzq%2BsJRi6gcfUEQf3UOdFe7EoxmKXt2P7KHNJB5H2RbMOxIldq43tl5nU0HYZXW1DohbcA7zhUst5zhvduLEPT6iBCqLEfl6ATLfTxMRi4jBVMwsOsTDBJeAN%2F9CffPjpZgnAo0r0OElF47VqKwv00cp1lv9sifd16noL6V2riEz0dhbsTCXl57DCzXJEDVbaHFLMhTm6gczo2Wek%2BWWaPYarI8Ct6MN1KdNAfe1eLIptSbxZ9sGssXG4TNAfKbVurK6E8UXimtoaAGTCqikczLp3XXBMjXE8toY29DXL5h8%2FoQkzTTLHhRY3wBRNh%2FbZDMJvY2roGOrMCdKzh5HbeWDz4%2B2rZzhoFeZk6A0jB4zALSYOdNVkxL8b%2B1WHHWs5wiKl1N%2FKks5M02SPcWx%2BQmjvlO1CVDEcXAzB%2FOtYU7ciJjFoNw5IivH8h6H2adpfHiXYvUuPYXrFKjYOLxl07m2iarjVl3ywd3pYlmKTkPNm8MdFc7BG8R0eBUb2xQx37X8d1DEPukHokjShkjma9gsaQpSw0BHp%2FMqnsKQ505bQkHBN4lIqImjIiuwk6tmN4IUFNc8lseDjkIyhPBIx3Xm2mAmaZDi36DBBg4OgYszKPwZWlsMLbsYsOFVMddHhWuImKWeTlurlRPosX0szX00O4%2FmQNmqG%2B22INLh72pLVDNfb5uJDGWkKXqMLGqxiuuJmj%2BZ1rm%2BNEijF9wCHWYl%2F%2FU1TIOFib4CuUdw%3D%3D&X-Amz-Signature=71c519537b9a8ca2e61d94bfbb108378d91977768eb249e503d598e08cf38485&X-Amz-SignedHeaders=host&response-content-disposition=inline`,
      video: ``,
      media_type: `image`
    },
    {
      title: `Portfolio`,
      // image: `https://s3-alpha-sig.figma.com/img/4033/31ea/3a766b5b20d3ec2b4ed3aae3960113b5?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=on9wevsXNukQX544kLC9kxFQQ5KwA~8xfJExCbAyF178y7NrC~11FMk4hNb4dKKEtOZ42loVNPGdJNV4uR~6I1s6k2om6ezk9m5Ut7o95N1VUCbNYACRIqWRF4WiNzcEv9VfaudqZJJwkQA0p1XEntPEkFDV4DlM-OfnoWIEe9XVGMeFgx1IKNWlCHR0UmZFNdZ3T2QfO9i8dUrNSosdPfUcBz6-C9l7UylrHTvZlK4muTMquDCXRSqgcu1OomCFX77MHjnHEEV1TCLPip85iDkhWBazvqAyTayCDBnnun-TTK14rAQU3gEVCLeZ4rKU~O~rwpuz06QNOqZl-DYFaw__`,
      image: `https://veerge-media.s3.us-east-1.amazonaws.com/myxellia_assets/proptech_asset_4.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAVK34NDYCGFW4FYEP%2F20241209%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20241209T091907Z&X-Amz-Expires=300&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJIMEYCIQDf%2BHHitxu9%2BpDu%2Fc7yXGMzCphb4bdDyQZTEyWOMpC8bwIhALn2OiDtWpCHZzdUwUFA4fWVBA%2BlGf2mTK43ygTERolfKoEDCHIQARoMMzY2OTQzNzM5Mzk2IgyAMBlyIvXt%2BJ0f9roq3gJrE2No6KxxkYuq1VQ1U0bAXiVC6rb2GCbt7fIIXque8YfCsqhFblWcPw8k0Auu8WlRYWWHCz4ecu91Lxlhxr8%2FfLsW3N7f37CD5hiTUA%2Bekz%2B5bf8JenZ87vBj8QmiSLtYXDjo%2BbBKWqLMswInCz0dtN2wwuzfqPfAz5QL%2B%2B0ug1NAH8dhBrSrgO1Rygf76%2BFAy5yPyI1%2BVZ3ZdQqlWpghETY7CyrGfwRjFxBgGds%2BKCeIjpwD1pB2j3HNw9qiWx8zkYje0Jne%2B5TRUdcKtfJWI5Hah978pmUZ%2BOnL0ZPxzdb9jAkjmF76Hpen6SQ71uIKn0SANu4tejSviGaVO2PqAiHeKEGq6YEiGvr%2BNBEvRa9%2FxH70xSQ6y96jxmr4CjPRI%2Fpb8A3M2BKxo5jxmnWahXk3ugs6YHmFc1qfaylHkg3%2FFHSyNw%2F3T1soQnKhrjx7mOiDKpnPdOM4b0ThDDCb2Nq6BjqyAiE25Qr47flHuLJSs358mzAsonAf0Sb0LKxNBQ8YADpSIahD4ux3k9oBElFTjXiFvL2SHaVoBzyquU3Fwb%2F22VAh86osqSVJXvCQmpDWGrVID2FMPkqTir3RLso49%2Bs5%2FzkvSAmUgk9NThNL%2Bt3ZrkqBn2VwuOFzzGj0Wt5OWRrBkFYfJMGV4GqpE7EjKo27idUcPnInapE%2FpZJHZwTisjc5cagVqXnlAkJccSIvLRS%2FW6CyMsEGS2LvgTmFDpKUDrvORzTMCMGjGENDhfwSkcQ2U329%2FNeO3lMchTLO4Olay8vTyexWo6dnFewBegI1eM7qz%2BCdc7BRtZvSrUZ2qjG5ctbeoCNC749hduJouAvdPtWb3I5sqyPMXFpXHYO2zGZj71GCnuMFTImz0EZ4BRM9XQ%3D%3D&X-Amz-Signature=f40f8415e6ffa8f35f95c1e3c89fd063d0021bb10335b34824a1e091357d6d1f&X-Amz-SignedHeaders=host&response-content-disposition=inline`,
      video: ``,
      media_type: `image`
    },
    {
      title: `KYC`,
      // image: `https://s3-alpha-sig.figma.com/img/e6d4/af46/8ad43a2496515aec5666e292126c4592?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=BBhlKd3eF00Io0l5pQJEM--gaQmItTwkMWXHSYqUSEvmGvWSO3pm60-n7Nv--RlFKakHF3Sxqb5RyCjg9vg7LefeE~BaovQjpy~YYeASRNbvHNiiv~PhffVbIbKqg5PC3K-pzuqFo27Yb9luRYNYEnbJz1gDlZJ146rzJ6w1XFHv0nus-4WZBg~rUWMBg0JCwMtpQ7sKvwnQN66AGdl1Pik~6Xm8J2FK8LsQB1u4szZUG2uvJeZyRmI~Iv~nFweVqg3BIporQolwywj6V2ryMSFeRDKJABZs4p87LqF97wbXXHJj6tPWQu9OjgU4oj8fJQEmiwn-019NKYL-kBkMgA__`,
      image: `https://veerge-media.s3.us-east-1.amazonaws.com/myxellia_assets/proptech_asset_5.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAVK34NDYCM7VZGIJU%2F20241209%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20241209T091928Z&X-Amz-Expires=300&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJHMEUCICV9VxU3qQy36mgwPJW5Obutvg9nmnsGiMJuDoCSYhGaAiEA8pTuGejRBiEqwAZ6TShI1SEYoIMmx7RbXIkM%2Beqb9T0qgQMIchABGgwzNjY5NDM3MzkzOTYiDDSutOushyiTe8DRYyreApW8imnINcxkQrY61A3asZDiK0rBphzlw0KeTQOh6QIrUlCdd334JFbT6BINC%2Fcw5bRqwOTx5DFJKIx0V522ghvff%2FdAF8NX%2Fkm%2FaB9mC1GSJhtnkHtMC5eiWImoq49ZqFVe1zDyAfKjzwYdqgIewFV3GPJRZME4JyDS6EBdPb2D%2F5X2eBUtMX%2FFaI%2Fsv9r9jR72wj7U7r1mmmmV3XZRMgsdbpZq5VpsZ%2B5wY0J6R9SgMURFoeqlTt%2FtPFjEJ3dbemj6pCt9WvbCNggHijrTEIPvjKRP4EywSo9fjZmiSQYSJs%2FXUl%2BalnJPB8Kw5krlmt%2FKzDg5PP4AUIBo6nU6DJF%2BA%2F8QwRg6cX0btU%2FqJwJHzX9GtTPy%2Ffxd%2ByoDXM8AtEmyAdY5cZemmn%2FV3zyLGJRJ%2BABkB9HCzXJx70vwI%2F0O1AILJ2ALO5HcNhJ79%2FQ1M08GYki8AsW8tu6wZzTAMJvY2roGOrMCDBt5vTASII2cAXL%2FgZmHboucTnURTtptK9PBu1rMRqvsaex5zUoaLaWi8Jl3QQQHxsLf2PqVoZFwwUf75p9D4XsAPHHXRYljByRn4IuARFds8azWjf2aWY%2FHuxQM8NN%2BG9jHdGCkOCgeyp8%2FTNa47nda%2BULzn53k3yycJoO7Rf%2BVT%2BCrU0qGzLhVQEcpoul6YalBo1S7VoyPCs%2F%2BBRfhX4XfovPvdYQXCJzoeQq0b4Xeg4wa8KrAgUw91aZM4vYjWzsIT%2BjKCpKLz4STQAXOolH5avIBmMt%2FiWhO5k2WSZFqroB7690Q2hx1vZjogqg6Hcyte8Pip1vdBomIon9%2BxVqyjxg0JroFFdDJHpAZ1tuHebu5nzs5g7KU96xse%2BCRxwAXqpk146o6B9cCUfIa8fmqJw%3D%3D&X-Amz-Signature=b5dd701ee16b59eebcc1cf673e34bdae317c5aed1997d2397872e8ecac002742&X-Amz-SignedHeaders=host&response-content-disposition=inline`,
      video: ``,
      media_type: `image`
    },
    {
      title: `Fractional  Ownership`,
      // image: `https://s3-alpha-sig.figma.com/img/b482/cf54/8dd268c1780c29f27764b7d376fa21f3?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=OP7wzt0duOVeR-OdUqmGDIxAUNW-~2MzZ2NLqvQwd0nRDrJJJdpMZQ1bIKQ9NVzk-CLDNLFB7BE~YxpLodUAFX43baRe0x2zGY9l9fQxsOdrFHFX6Sn8jHROWchK91vIQHID-6uP8LosHlDUx~AdtNtMn9bIoc9Wumb~IDes4~GYDfrkOiPnCHjASxb1E-~l1ebXEUvEaXmABQrtGHwVnpWeBAZdPuHrFwTysbxS8K9TXvXrVV3fmal50m4qI-KQmTGEho0jlEkpya0OrlwIufztFSOByeg~wNn3jJHwyb5Py6Qpa5VmS4yETGpKxLtvL5jki4JS~ueUzAz5iY8R3A__`,
      image: `https://veerge-media.s3.us-east-1.amazonaws.com/myxellia_assets/proptech_asset_6.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAVK34NDYCPFTXZA5N%2F20241209%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20241209T091951Z&X-Amz-Expires=300&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJHMEUCIGmY2j8FGSXN0cQKcMUG5IIJVOrFyw3vVujSCFnNKmEcAiEAiZCJEzbxuyWURcmEQcHA8ZjgPj0OEVYoRV%2FbGlNn8xkqgQMIchABGgwzNjY5NDM3MzkzOTYiDBma2UG6CkRmsDg5cireAn9QKGnfc3eskj%2BzF1K7fHh0AIwMPr9x0buJvtyzUtVpgdQQUjqeN4lkZQND2XbrPshwYLshhfNm%2FSjLZtBlif5C%2BSe%2FI8aARC9xSKu%2BSIT9AiWTB%2BGyFZsV99U09IZw4BRheX7xnsgKzl%2ByJ4R6m6gU9nbGo0VlSlN2JJoFFZHLV%2FvaMFVAZcjn66M4EF721lzBfUE%2BanOcB8Hrr%2F%2FzXSf1xPbGMLtX5MxHzsFtX0ZeajbYse500WcxOlKZOmrHb%2BdoXmHKl5QaKGWXMtn1yeRE4thPCHHIWshXXdcFTtTvoxg36PYcKviXmKgx6%2Fn%2BK%2F%2F3ogYcZQaS3R%2FEq4veLD6gd1VNxbL1FTpHsttgqfYjb3dk%2B5l9u97phrnSAK5ghjNEQDdlUJbfv2rrpKd7dQchBK2AGLoEZM6jdCPv7Z1%2Frv%2B0nvgSlRfNAWHxqXHQjq7Tv3J9rc%2BqemdA3aL8MJvY2roGOrMCC8X3zMjjpbphG1Vm5Fdka2hYmPLyIl5Dm%2BRjyh4LvV8rgCCQlqhMsBtgO8eBmVxkPpO2br%2FOUq02PP9xByv%2F5%2BqXr0ks8rUkdTTFZsOnHH8nbReQQW5S1f9Z6HFvY%2F0mtyhYP6c3uDQ%2FtH7ucl8Ijge%2FdNfN4%2FE7l%2BawgrOjEbQZbrRoqOkY86hR9PL9LqUo6KF%2FtszC%2FpgZ%2BcvR3px4x%2Fo9LxRHRPSurGguNvpnUxEiM0uF7H0azCsH%2F4lDoriWne2qJoSxrfQmOMgoZBzqzVwURyUnkTZiQNjA6DbZkFDQIuZxPweNdXUcL0LUcY0euYXSgP58hoFRZmmrwoc8MI0DYiEIyOwteswDcBpXD4qPbImueyPFViu7mfN0ox9HcfvxfctOIPIz5liiLxXVLHGphw%3D%3D&X-Amz-Signature=4d40c48e8aab48c171a3d96bff1e8590d3453ed3b575104681f006fe1f37546f&X-Amz-SignedHeaders=host&response-content-disposition=inline`,
      video: ``,
      media_type: `image`
    },
    {
      title: `Wallet`,
      // image: `https://s3-alpha-sig.figma.com/img/ae9b/3121/a239a117428cae08c39716b206948033?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=BJ7H7BB2OT6KZ4gRvP11CPC67FPcpRdiJOZkKrhrvsB5AhiuCNg01YU4A5O1ScbUPxaVRQzPN8SOSOD3e9qaWVDanYrHgRe2GfgThK4ohHklT1FiZ5L3BkzQb9V6tNaWh2TUoXUDRSGaAJbmGRPTUFuMt8G3maNO38UIwr5hJiuRIm-rH38DBVonOxl-XpTEd2JUgvUXquYNTOU5N8DtlYk~BM8SgYwBF7Fld-hKGVb3M6baA1hvp3ntIIwEhgGUKOXTSPfSyyE~hZ3y1nvVhjDAGXopaAyV3jO-0ot1pgBHqj6o2PqfkpcZFz-wxjEG4MOg6mO86E8VO~IPKOmf-g__`,
      image: `https://veerge-media.s3.us-east-1.amazonaws.com/myxellia_assets/proptech_asset_7.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAVK34NDYCEKMBAVYQ%2F20241209%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20241209T092015Z&X-Amz-Expires=300&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJHMEUCID3gQskd9hQDcgWstZEav%2B0McytpjlFGpbEEMKcoNo2JAiEAoaXYuW6ETVWAHOan4G2ygWTNTNNdwKrEF8sCwQAktK8qgQMIchABGgwzNjY5NDM3MzkzOTYiDPv3UDFoRLcC0LW0%2FyreAhMlXZBwu2buzvSZtQ4iVBPeoMgOEj0jp9R4fHDOl6zk6xNTw2CV6b3h2beGzQUF2Mv8EPxQ7U3hTUF0fGHk3gySfy7oxxUrUIC4UajR%2F5JrAZSxJEqVGifO07Hgk3wNoLdfgkT5aHm6vAUOeEn5KXAV0GWoeIKP%2FEV%2BKQwj7w8iOT1miIDmpAkFGvf%2FqHk%2BDjoSe%2FZIAHKmUrmTcftAIyrQ5daZMK1D3iKVim%2FvYN95E6tO94yAXPHsE0J2XAhYyikeAXqWsuzNb0a%2F1fJkPm0HAwk1Zf7kC0uaSPVzdDUCEiYSYRdzpUEI4QuIgl4H9J0q0WkcPiiNKywgKaYo7GyP%2F6vHC041%2FCQOGKa%2FiKL%2BIN49vTVLZhGOk78yr%2B7VoI%2B6sPnpWlscYAexFzqPGQ7jswzr15dG8zDScfdKnBDCQ1JgvfwQsbthQKpId6sTERddngOrhPsZwWK4AdHEMJvY2roGOrMCC82DT1VY3A12Z%2B%2BUzhVm1bETHMb2VMHykj9C6vtmW2kDgaTIDtcTYQCSZPEelhXrW23UmfmgfObVAig18ulNhDd%2FfVPgntlNOvoflTdKPqY%2BHYq4t8cqKwWXIrZf2tr6pGwwMLPxn2y2F0ho%2BRbxjUmPVItPU%2F%2BpaeqpCQbHwJqJn2dCD8JOKIojg5kuqjZpOBBDevpXQwbk7fTtXNmGcOobeV4QBnEogjuOkfH8mtd2gNHJr9yUT2OLgtrp0nT38gzT3u7Nljt%2BhMDsg%2FgSETkittBtJKANLmo3NDcDuON5FjDxNvgVy6fKX6BbE3dYiSZwA16WTefUdcSDjyrqPVrZxX%2F5StZBKOT4xAY4Kk1gZ3CeCGyb61ME83OE5k3PjYZJViJ9jh1xT%2B9B0ykAd%2BmpOg%3D%3D&X-Amz-Signature=ee1dbeb6be68e5241e607ba6edf20340d22f53a1a048594b46b92b33f91b5532&X-Amz-SignedHeaders=host&response-content-disposition=inline`,
      video: ``,
      media_type: `image`
    },
    {
      title: `Co-ownership`,
      // image: `https://s3-alpha-sig.figma.com/img/6ec6/29e0/d760bf6f885c54828d1d47ca4341eb6d?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=I9Y68KkUiKGG9TDL7QQFCro4RG2Oc1~nD9bXWSYPfbY-IOjbdUPTokVGkp0LBWm4Aj~IcD08k-Ow23Kl2~645B-tH2NErD63cG20yzNM3AlwstiyjB5kIMt8aPLtV0OCVQKYGWxmVO8f0RoNLRWZkR3jCd8hIlmib-Iw9UenM6EGrEmNPk4GQQWsUUF~27Ss0NTutfS95ina~YqxPEBxltUPq95jEhMdzCseH8b8LAX2eybzjTLHI-WOCrFxt82CYsD57LQM0OYoZnGMt8K51NKoFmvnw~V3qOk7jhyGzwuv6vvOR6LI40sbnu8ooe58XRhf1j7aVw9Zwj-fGR6K3w__`,
      image: `https://veerge-media.s3.us-east-1.amazonaws.com/myxellia_assets/proptech_asset_8.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAVK34NDYCFKOL6GJZ%2F20241209%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20241209T092035Z&X-Amz-Expires=300&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJGMEQCIE4uR%2F8mLUeCy4mnf1fxnYF17UZIOV%2Fa%2B1MsfVjTqaucAiBXO%2Bj8ePyhf4yZjjmiS1cLfHDHjjcDyOorvJfCMdN9oiqBAwhyEAEaDDM2Njk0MzczOTM5NiIMdSLHx0gw1b9YOfjLKt4CwczC2tIBLCjhgOmdYaPoHaIywRUVooMFm8bKpdBayA%2B6RYECbw%2BPgWmMk5nN9wzUMEjZ7xRIxd3f%2Br8oegpXma%2FvKkwNvttEJmOuafzOncldAPXMCHRnjBut28l9TeHLExrWztCmw3RCsGvJJ3a4VEg3x1Pr%2BQvT5ZI65yCYYyFhx4Xb5TpqOk2CSbhMQ0cN%2BU%2FsnTYKeyqY0lCCEDhUocIIRuUdZPa4RGL25iSpsrJdaBWWS7hvIhVYogT8jUxRSQn6eEu5KrGN5UF78EW4OWcdV7NEGwY97O8LLdPuJziv7npJybKWtg6ZpSN%2FbTvzr1Mp5T%2Bb6bxnLgiUNwCq%2BOU8TOtLzHYIK4JkIJIK6KrrOlIZJ%2F%2BZRBGW96xSf77jJS7vFwszhcsZgvdUh9UI9B%2BgZ3n8EV53Ybbzyf%2BvoyCq1ipl2wuviUwgv4pf7luuMgLyKbGSNaP3fAR5zxowm9jaugY6tAKcI5Fy1wIf4Y2Dhl3TD%2BK0OLlsuFCb9h1cQfcJX4I73V3OMhW4goqItCTPc3ZpPWcOIk%2FImlMdjQG4SYUDJSVc8mf6hZt85ePsJSyTKpG2OsT4Z%2FSX9iucr1F4yedEYRn%2F%2B5ytmPFNsfRc8EtJSfQGmnq9mv48ja5EQjP3Yrb3WiAV6ifBND4Il7HB9IZjRT4s453pcjnIdaIcthNLqVLe8g%2F0XtzCflNIQtiiEj7YuHYGY68Oeb2g274TulF8TFOfVWgcLsV6Bqgs2lxNTXYlG3Pl1%2FZmuBF0Qk0JOwN6rb3RCnruRCz0kAY65%2F%2Bssgqix47QJxQHrZKCt8hpGDKwjdmXwXp9AtEkR9WkV%2BJcFd%2BTsEPXoPMAqgh0c%2FlbfmMs6BHKknpcnNRlc8GX5b91DTOZZA%3D%3D&X-Amz-Signature=c92196d1d61075eb2f6b9c073596805c8e82d43944a591dc5ac6e1c669fb175f&X-Amz-SignedHeaders=host&response-content-disposition=inline`,
      video: ``,
      media_type: ``
    }
  ];
  useEffect(() => {
    if (!animating) {
      return;
    } else {
      let index = count || 1;
      const rifle_interval = setInterval(() => {
        if (index === features?.length) {
          index = 1;
          setCount(1);
        } else {
          index++;
          setCount(index);
        }
      }, 5000);
      return () => {
        clearInterval(rifle_interval);
      };
    }
  }, [count, animating]);

  useEffect(() => {
    const section = document.getElementById('proptech') as Element;

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setAnimating(true);
          } else {
            setAnimating(false);
          }
        });
      },
      {rootMargin: `50%`}
      // {rootMargin: `100%`, threshold: 0.1}
    );
    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  const handle_click = (ind: number) => {
    setCount(ind);
  };

  return (
    <Stack
      gap={{base: `50px`}}
      p={{base: `60px 24px`, lg: `120px 64px`}}
      data-background="#FFFFFF"
      id={`proptech`}
    >
      <Flex
        align={`flex-start`}
        gap={{base: `12px`, lg: `150px`}}
        direction={{base: `column`, lg: `row`}}
      >
        <Box w={{base: `100%`, lg: `550px`}}>
          <Text
            fontSize={{base: `40px`, lg: `56px`}}
            fontWeight={{base: `500`}}
            lineHeight={{base: `120%`, lg: `100%`}}
            letterSpacing={{base: `.8px`, lg: `-2.24px`}}
            w={{base: `100%`, lg: `438px`}}
          >
            Become a PropTech in Minutes
          </Text>
        </Box>
        <VStack align={`stretch`} gap={`50px`} maxW={{base: `550px`, md: `100%`}}>
          <Text
            fontSize={{base: `16px`}}
            fontWeight={{base: `400`}}
            lineHeight={{base: `140%`}}
            letterSpacing={{base: `-0.016px`}}
          >
            From seamless onboarding and real-time access to your offerings, to easy payment
            tracking and timely push notifications when payments are due - your clients stay
            informed every step of the way.
          </Text>
          <Button2 variation="primary" invertAnimation>
            Explore our solutions
          </Button2>
        </VStack>
      </Flex>
      <Show below={`lg`}>
        <Box
          overflow={`auto`}
          css={{
            '::-webkit-scrollbar': {
              display: 'none'
            }
          }}
        >
          <HStack gap={{base: `16px`}}>
            {features?.map((el, i) => (
              <Stack key={i} w={`346px`}>
                <Text
                  fontSize={`30px`}
                  fontWeight={`400`}
                  lineHeight={`133%`}
                  letterSpacing={`-1.6px`}
                >
                  {el.title}
                </Text>
                <Box
                  aspectRatio={{base: `346 / 223`}}
                  w={`346px`}
                  flex={`1`}
                  background={`#f0f0f0`}
                  overflow={`hidden`}
                >
                  {el?.media_type === 'image' ? (
                    <Center pos={`relative`} w={`346px`} height={`223px`}>
                      <Image src={el?.image} alt="Image" fill style={{objectFit: `cover`}} />
                    </Center>
                  ) : el?.media_type === 'video' ? (
                    <Center position={`relative`}>
                      {isClient && (
                        <ReactPlayer
                          url={el?.video}
                          style={{
                            aspectRatio: `346 /  223`,
                            width: '100%',
                            backgroundColor: '#000000',
                            margin: 'auto'
                          }}
                          width={'100%'}
                          height={'100%'}
                          playing={el?.video ? true : false}
                          loop
                        />
                      )}
                    </Center>
                  ) : (
                    <></>
                  )}
                </Box>
              </Stack>
            ))}
          </HStack>
        </Box>
      </Show>
      <Show above={`lg`}>
        <Flex gap={{base: `60px`, xl: `150px`}} justify={`space-between`} align={`flex-start`}>
          <Stack gap={`18px`}>
            {features?.map((el, i) => (
              <Stack
                key={i}
                fontSize={`40px`}
                fontWeight={`400`}
                lineHeight={`100%`}
                letterSpacing={`-1.6px`}
                cursor={`pointer`}
                w={`max-content`}
                onClick={() => handle_click(i + 1)}
                position={`relative`}
              >
                <Text>
                  {el.title}
                  {` `}{' '}
                  <Box
                    as={`span`}
                    transition={`.6s`}
                    ml={`10px`}
                    opacity={i + 1 === count ? `1` : `0`}
                  >
                    →
                  </Box>
                </Text>
                <Box
                  h={`1.5px`}
                  bg={`#000`}
                  borderRadius={`1px`}
                  w={i + 1 === count ? `100%` : `0%`}
                  transition={`.6s`}
                />
              </Stack>
            ))}
          </Stack>
          <Center
            aspectRatio={{base: `790 / 500`}}
            w={`100%`}
            flex={`1`}
            background={`#f0f0f0`}
            overflow={`hidden`}
            position={`relative`}
          >
            {features?.map((el, i) => (
              <>
                {el?.media_type === 'image' ? (
                  <Image
                    src={el?.image}
                    alt="Image"
                    fill
                    style={{
                      objectFit: `cover`,
                      transition: `.6s`,
                      opacity: i + 1 === count ? `1` : `0`
                    }}
                  />
                ) : el?.media_type === 'video' ? (
                  isClient && (
                    <ReactPlayer
                      url={el?.video}
                      style={{
                        aspectRatio: `790 /  500`,
                        width: '100%',
                        backgroundColor: '#000000',
                        margin: 'auto',
                        transition: `.6s`,
                        opacity: i + 1 === count ? `1` : `0`
                      }}
                      width={'100%'}
                      height={'100%'}
                      playing={el?.video ? true : false}
                      loop
                    />
                  )
                ) : (
                  <></>
                )}
              </>
            ))}
          </Center>
        </Flex>
      </Show>
    </Stack>
  );
};
