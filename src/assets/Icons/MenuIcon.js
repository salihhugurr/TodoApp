import * as React from 'react';
import Svg, {ClipPath, Defs, G, Path} from 'react-native-svg';

function MenuIcon({size, color}) {
  return (
    <Svg
      width={size || 24}
      height={size || 24}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
         <G clipPath="url(#a)">
      <Path
        fill={color || "#323232"}
        d="M4 24h24v-2.667H4V24Zm0-6.667h24v-2.666H4v2.666ZM4 8v2.667h24V8H4Z"
      />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h32v32H0z" />
      </ClipPath>
    </Defs>
    </Svg>
  );
}

export default MenuIcon;
