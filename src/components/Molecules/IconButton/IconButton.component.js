import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/fontawesome-free-solid';

import Colours from '../../../theme/Colours/Colours';

const IconButton = styled.button`
  color: ${props => props?.color !== '' ? props.color : Colours.Typography.light};
  border: none;
  background: ${props => props?.backgroundColor !== '' ? props.backgroundColor : Colours.PrimaryB.normal};
  font-size: 14px;
  padding: 10px;
  border-radius: 3px;
  outline: none;
  min-width: 100px;
  letter-spacing: 0.2px;
  width: auto;
  min-height: 40px;

  svg {
    margin-right: 10px;
  }

  &:hover {
    background: ${props => props?.hoverColor !== '' ? props.hoverColor : Colours.PrimaryB.hovered};
    cursor: pointer;
  }

  &:active {
    background: ${props => props?.pressedColor !== '' ? props.pressedColor : Colours.PrimaryB.pressed};
  }

  &:disabled {
    background: ${props => props?.disabledColor !== '' ? props.disabledColor : Colours.PrimaryB.disabled};
  }
`;

const IconButtonComponent = ({ disabled, children, onClick, label, color, backgroundColor, pressedColor,  disabledColor, hoverColor }) => (
  <IconButton
    type="button"
    onClick={onClick}
    color={color}
    backgroundColor={backgroundColor}
    pressedColor={pressedColor}
    disabledColor={disabledColor}
    hoverColor={hoverColor}
    disabled={disabled}
  >
    {children}
    {label}
  </IconButton>
);

IconButtonComponent.propTypes = {
  onClick: PropTypes.func,
  children: PropTypes.node,
  label: PropTypes.string,
  color: PropTypes.string,
  backgroundColor: PropTypes.string,
  pressedColor: PropTypes.string,
  disabledColor: PropTypes.string,
  hoverColor: PropTypes.string,
  disabled: PropTypes.bool,
};

IconButtonComponent.defaultProps = {
  onClick: undefined,
  children: <FontAwesomeIcon icon={faCoffee} />,
  label: 'Button',
  color: '',
  backgroundColor: '',
  pressedColor: '',
  disabledColor: '',
  hoverColor: '',
  disabled: false,
};

export default IconButtonComponent;
