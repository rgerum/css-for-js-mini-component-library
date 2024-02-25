import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import Icon from '../Icon';
import { getDisplayedValue } from './Select.helpers';

const Select = ({ label, value, onChange, children }) => {
  const displayedValue = getDisplayedValue(value, children);

  return (
      <>
          <Wrapper>
              <Selet value={value} onChange={onChange}>
                  {children}
              </Selet>
              <Display>{displayedValue}</Display>
          </Wrapper>
      </>
  );
};

const Selet = styled.select`
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    color: transparent;
    background: transparent;
    border: none;
    opacity: 0;
`
const Wrapper = styled.div`
    position: relative;
    width: max-content;
    `
const Display = styled.div`
    pointer-events: none;
    border-radius: 8px;
  background: ${COLORS.transparentGray15};
  color: ${COLORS.gray700};
  padding: 12px 52px 12px 16px;
    width: max-content;
    position: relative;
    &::before {
        position: absolute;
        right: 18px;
        display: block;
        content: '';
        border: 2px solid gray;
        border-bottom: 0;
        border-left: 0;
        width: 10px;
        height: 10px;
        transform: rotate(135deg);
    }
    ${Selet}:hover + &::before {
        border-color: ${COLORS.black};
    }
    
    ${Selet}:hover + & {
        color: ${COLORS.black};
    }

    ${Selet}:focus + & {
        outline: 1px dotted #212121;
        outline: 5px auto -webkit-focus-ring-color;
    }
`;

export default Select;
