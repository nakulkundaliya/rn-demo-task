import React from 'react';
import {Image} from 'react-native';

const MyImage = props => {
  const {source, style, tintColor, resizeMode} = props;
  return (
    <Image
      {...props}
      source={source}
      style={style}
      tintColor={tintColor}
      resizeMode={resizeMode || 'contain'}
    />
  );
};

export {MyImage};
