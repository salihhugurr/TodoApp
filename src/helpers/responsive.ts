import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('screen');
const ww = (param: number): number => {
  return width * param || width;
};

const wh = (param: number): number => {
  return height * param || height;
};

export { ww, wh };
