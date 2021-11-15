import React from "react";
import { SvgXml } from 'react-native-svg';

function Image({ image }) {
  return (
    <SvgXml xml={image} />
  )
}

export default Image;