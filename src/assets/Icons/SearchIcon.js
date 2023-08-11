import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SearchIcon({size, color}) {
  return (
    <Svg
      width={size || 24}
      height={size || 24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <Path
      fill={color || "#292F3A"}
      fillOpacity={0.5}
      fillRule="evenodd"
      d="M11.62 2C6.308 2 2 6.216 2 11.415s4.307 9.413 9.62 9.413c2.196 0 4.22-.719 5.839-1.93l2.898 2.828a.978.978 0 0 0 1.362-.001.928.928 0 0 0-.002-1.333l-2.851-2.783a9.262 9.262 0 0 0 2.376-6.194c0-5.199-4.308-9.413-9.621-9.413Zm-7.694 9.414c0-4.158 3.445-7.529 7.695-7.529s7.694 3.371 7.694 7.529c0 4.158-3.445 7.529-7.694 7.529-4.25 0-7.695-3.371-7.695-7.529Z"
      clipRule="evenodd"
    />
    </Svg>
  );
}

export default SearchIcon;
