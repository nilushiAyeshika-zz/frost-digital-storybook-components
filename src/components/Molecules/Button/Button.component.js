import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Colours from '../../../theme/Colours/Colours';

const sizeMapping = {
  small: "small",
  medium: "medium",
  large: "large",
};

const handleSizeChange = (props) => {
 let width = '150px';

 switch (props.size) {
  case sizeMapping.small:
    width = '150px';
    break;
  case sizeMapping.medium:
    width = '200px';
    break;
  case sizeMapping.large:
    width = '300px';
    break;
  default:
    break;
}

 return width;
};

const Button = styled.button`
  color: ${Colours.Typography.light};
  border: 2px solid ${Colours.Typography.normal};
  background: ${props => props.primary ? Colours.PrimaryA.normal : Colours.PrimaryB.normal};
  font-size: 14px;
  padding: 10px;
  border-radius: 3px;
  outline: none;
  min-width: 150px;
  letter-spacing: 0.2px;
  min-height: 40px;
  width: ${props => handleSizeChange(props)};

  &:hover {
    background: ${props => props.primary ? Colours.PrimaryA.hovered : Colours.PrimaryB.hovered};
    cursor: pointer;
  }

  &:active {
    background: ${props => props.primary ? Colours.PrimaryA.pressed : Colours.PrimaryB.pressed};
  }

  &:disabled {
    background: ${props => props.primary ? Colours.PrimaryA.disabled : Colours.PrimaryB.disabled};
  }
`;

const ButtonComponent = ({ primary, size, label, onClick, disabled }) => (
  <Button
    type="button"
    primary={primary}
    size={size}
    onClick={onClick}
    disabled={disabled}
  >
    {label}
  </Button>
);

ButtonComponent.propTypes = {
  primary: PropTypes.bool,
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
};

ButtonComponent.defaultProps = {
  primary: false,
  size: 'medium',
  onClick: () => null,
  disabled: false,
};

export default ButtonComponent;
