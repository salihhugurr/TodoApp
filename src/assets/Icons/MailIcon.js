import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function MailIcon({size}) {
  return (
    <Svg
      width={size || 16}
      height={size || 16}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <Path
      stroke="#292F3A"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      d="M1.333 5.667c0-2.333 1.334-3.333 3.334-3.333h6.667c2 0 3.333 1 3.333 3.333v4.667c0 2.333-1.333 3.333-3.333 3.333H4.667"
    />
    <Path
      stroke="#292F3A"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      d="M11.333 6 9.246 7.667c-.686.546-1.813.546-2.5 0L4.667 6M1.333 11h4M1.333 8.334h2"
    />
    </Svg>
  );
}

export default MailIcon;
