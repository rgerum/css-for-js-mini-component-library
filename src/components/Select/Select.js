import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import Icon from '../Icon';
import { getDisplayedValue } from './Select.helpers';

const Select = ({ label, value, onChange, children }) => {
  const displayedValue = getDisplayedValue(value, children);

  return (
      <>
          <Wrapper>{displayedValue}
              <Selet value={value} onChange={onChange}>
                  {children}
              </Selet>
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
    
    &:focus {
        outline: 2px;
        outline-color: black;
    }
`

const Wrapper = styled.div`
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
    &:hover::before {
        border-color: ${COLORS.black};
    }
    
    &:hover {
        color: ${COLORS.black};
    }
`;

export default Select;
