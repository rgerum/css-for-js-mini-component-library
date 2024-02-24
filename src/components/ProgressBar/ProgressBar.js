/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import VisuallyHidden from '../VisuallyHidden';

const ProgressBar = ({ value, size }) => {
  let Component;
  if(size === "large") {
    Component = WrapperLarge
  } else if(size === "medium") {
    Component = WrapperMedium
  } else {
    Component = WrapperSmall
  }
  return <Component role="progressbar" aria-valuenow={value} aria-valuemin="0" aria-valuemax="100" size={size}>
    <Bar value={value} style={{"--value": `${value}px`}}></Bar>
  </Component>
      ;
};

const Wrapper = styled.div`
  width: 370px;
  box-shadow: inset 0 2px 4px ${COLORS.transparentGray35};
  background: ${COLORS.transparentGray15};
`;

const WrapperLarge = styled(Wrapper)`
  height: 24px;
  border-radius: 8px;
  padding: 4px;
  
`
const WrapperMedium = styled(Wrapper)`
  height: 12px;
  border-radius: 4px;
`
const WrapperSmall = styled(Wrapper)`
  height: 8px;
  border-radius: 4px;
`

const Bar = styled.div`
  width: ${(p) => p.value}%;
  background: ${COLORS.primary};
  height: 100%;
  
  ${WrapperLarge} & {
      border-radius: 4px calc(max( var(--value) - 98px, 0px) / 2 * 4) calc(max( var(--value) - 98px, 0px) / 2 * 4) 4px;
  }
`;

export default ProgressBar;
