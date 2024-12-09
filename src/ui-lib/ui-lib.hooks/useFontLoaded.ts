import axios from 'axios';
import {useQuery} from 'react-query';

const useFontLoaded = () => {
  const fontQuery = useQuery(['isFontLoaded'], checkFontLoaded);

  if (!fontQuery?.isSuccess) {
    setTimeout(() => {
    console.log('font ready')
  }, 3000)
  }

  return fontQuery?.isSuccess;
};

export default useFontLoaded;

export const checkFontLoaded = async () => {
  return await axios.get('https://fonts.cdnfonts.com/css/neue-haas-grotesk-display-pro');
};
