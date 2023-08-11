import * as React from 'react';
import Svg, {ClipPath, Defs, G, Path} from 'react-native-svg';

function PhoneIcon({size}) {
  return (
    <Svg
      width={size || 16}
      height={size || 16}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <Path
      stroke="#292F3A"
      strokeMiterlimit={10}
      d="M14.647 12.22c0 .24-.053.487-.167.727a2.75 2.75 0 0 1-.453.68c-.327.36-.687.62-1.093.787-.4.166-.834.253-1.3.253-.68 0-1.407-.16-2.174-.487a11.713 11.713 0 0 1-2.293-1.32 19.164 19.164 0 0 1-2.187-1.867 18.941 18.941 0 0 1-1.86-2.18c-.546-.76-.986-1.52-1.307-2.273-.32-.76-.48-1.487-.48-2.18 0-.453.08-.887.24-1.287.16-.406.414-.78.767-1.113.427-.42.893-.627 1.387-.627.187 0 .373.04.54.12.173.08.326.2.446.374l1.547 2.18c.12.167.207.32.267.466.06.14.093.28.093.407 0 .16-.046.32-.14.474a2.267 2.267 0 0 1-.373.473l-.507.527a.357.357 0 0 0-.106.266c0 .053.006.1.02.154.02.053.04.093.053.133.12.22.327.506.62.853.3.347.62.7.966 1.053.36.354.707.68 1.06.98.347.294.634.494.86.614.034.013.074.033.12.053a.46.46 0 0 0 .167.027c.114 0 .2-.04.274-.114l.506-.5c.167-.166.327-.293.48-.373a.888.888 0 0 1 .474-.14c.126 0 .26.027.406.087.147.06.3.147.467.26l2.207 1.566c.173.12.293.26.366.427.067.167.107.334.107.52Z"
    />
    <Path
      stroke="#292F3A"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M12.333 6c0-.4-.313-1.013-.78-1.513-.426-.46-.993-.82-1.553-.82M14.667 6A4.663 4.663 0 0 0 10 1.333"
    />
    </Svg>
  );
}

export default PhoneIcon;