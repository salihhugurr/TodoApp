import * as React from 'react';
import Svg, {ClipPath, Defs, G, Path} from 'react-native-svg';

function HomeIcon({size, color}) {
  return (
    <Svg
      width={size || 24}
      height={size || 24}
      viewBox="0 0 25 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
         <G clipPath="url(#a)">
      <Path
        stroke={color || "#292F3A"}
        strokeWidth={2}
        d="M10 19v-5h4v5c0 .55.45 1 1 1h3c.55 0 1-.45 1-1v-7h1.7c.46 0 .68-.57.33-.87L12.67 3.6c-.38-.34-.96-.34-1.34 0l-8.36 7.53c-.34.3-.13.87.33.87H5v7c0 .55.45 1 1 1h3c.55 0 1-.45 1-1Z"
      />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h24v24H0z" />
      </ClipPath>
    </Defs>
    </Svg>
  );
}

export default HomeIcon;
