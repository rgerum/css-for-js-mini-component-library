import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';

import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';

const styles = {
    small: {
      "--size-icon": "16px",
      "--font-size": 14 / 16 + "rem",
      "--border-size": "1px",
    },
    large: {
      "--size-icon": "24px",
      "--font-size": 18 / 16 + "rem",
      "--border-size": "2px",
    }
}

const IconInput = ({
  label,
  icon,
  width = 250,
  size,
  placeholder,
}) => {
  let style = styles[size];
  if(!style) {
      throw new Error("size must be 'small' or 'large'");
  }
  if(width)
    style["--width"] = width + "px";
  else
    style["--width"] = "auto";
  return <Wrapper>
    <label><VisuallyHidden>{label}</VisuallyHidden>
    <IconWrapper style={style}>
    <Icon id={icon} strokeWidth={1} size={style["--size-icon"]} />
    </IconWrapper>
    <Input style={style} placeholder={placeholder}></Input>
    </label>
  </Wrapper>;
};

const Wrapper = styled.div`
  position: relative;
  width: fit-content;
`

const IconWrapper = styled.div`
  position: absolute;
  height: var(--size-icon);
  top: 0;
  bottom: var(--border-size);
  margin: auto;
  left: 0px;
  stroke: ${COLORS.gray700};
  pointer-events: none;
`

const Input = styled.input`
  padding-left: 36px;
  padding-top: 8px;
  padding-bottom: 8px;
  border: 0;
  width: var(--width);
  font-size: var(--font-size);
  font-weight: 700;
  border-bottom: var(--border-size) solid ${COLORS.transparentGray35};

  color: ${COLORS.gray700};
  
  &::placeholder {
    color: ${COLORS.gray500};
    font-weight: 500;
  }
  
  &:hover {
      color: ${COLORS.black};
    border-color: ${COLORS.black};

  }
  
  &:focus {
      outline-offset: 2px;
    border-color: ${COLORS.black};
  }
`

export default IconInput;
