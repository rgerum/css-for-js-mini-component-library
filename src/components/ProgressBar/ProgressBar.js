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
    <BarWrapper>
    <Bar value={value} style={
      {
        "--value": `${value}px`,
        "--width": `${value}%`,
      }}>
      <VisuallyHidden>{value}%</VisuallyHidden>
    </Bar>
    </BarWrapper>
  </Component>
      ;
};



const Wrapper = styled.div`
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

const BarWrapper = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
  border-radius: 4px;
  
  ${WrapperLarge} & {
    border-radius: 4px;
  }
  `

const Bar = styled.div`
  width: var(--width);
  background: ${COLORS.primary};
  height: 100%;
`;

export default ProgressBar;
