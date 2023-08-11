import * as React from 'react';
import Svg, {ClipPath, Defs, G, Path} from 'react-native-svg';

function MapIcon({size}) {
  return (
    <Svg
      width={size || 16}
      height={size || 16}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <Path
      stroke="#292F3A"
      d="M8 8.953a2.08 2.08 0 1 0 0-4.16 2.08 2.08 0 0 0 0 4.16Z"
    />
    <Path
      stroke="#292F3A"
      d="M2.413 5.66c1.314-5.773 9.867-5.767 11.174.007.766 3.386-1.34 6.253-3.187 8.026a3.462 3.462 0 0 1-4.807 0c-1.84-1.773-3.946-4.646-3.18-8.033Z"
    />
    </Svg>
  );
}

export default MapIcon;
