import localFont from 'next/font/local';

export const neueHaas = localFont({
  src: [
    {
      path: './NeueHaasDisplay-Roman.woff2',
      weight: '400'
    },
    {
      path: './NeueHaasDisplay-Bold.woff2',
      weight: '700'
    },
    {
      path: './NeueHaasDisplay-Black.woff2',
      weight: '900'
    }
  ],
  variable: '--font-neue',
  style: 'normal'
});

export const sf_pro = localFont({
  src: [
    {
      path: './SFPRODISPLAYREGULAR.woff2',
      weight: '400'
    },
    {
      path: './SFPRODISPLAYMEDIUM.woff2',
      weight: '500'
    },
    {
      path: './SFPRODISPLAYBOLD.woff2',
      weight: '600'
    },
    {
      path: './SFPRODISPLAYBOLD.woff2',
      weight: '700'
    }
  ],
  variable: '--font-sf-pro',
  style: 'normal'
});
