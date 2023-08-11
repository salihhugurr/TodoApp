import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
import { theme } from '../../helpers';

function LockIcon({size, color}) {
    return (
        <Svg
            width={size || 24}
            height={size || 24}
            fill={theme.white}
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg">
            <Path
                d="M19 10H5a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-8a2 2 0 0 0-2-2ZM6 6a3 3 0 0 1 3-3h6a3 3 0 0 1 3 3v4H6V6Z"
                stroke={color}
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </Svg>
    );
}

export default LockIcon;
