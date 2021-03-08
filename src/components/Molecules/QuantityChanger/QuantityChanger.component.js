import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus } from '@fortawesome/fontawesome-free-solid';

import Colours from '../../../theme/Colours/Colours';

const QuantityChanger = styled.div`
  width: 160px;
  position: relative;
  height: 40px;
  box-sizing: border-box;
  border: 1px solid ${Colours.Border.light};

  input {
    height: 100%;
    width: 100%;
    padding: 0 45px;
    width: 100%;
    box-sizing: border-box;
    border: 0;
    text-align: center;

    &:disabled {
      background: ${Colours.Backgrounds.white};
    }
  }
`;

const PlusButton = styled.div`
  width: 40px;
  height: 100%;
  position: absolute;
  z-index: 4;
  right: 0;
  top: 0;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  border-left: 1px solid ${Colours.Border.light};
  
  &.disabled {
    background: ${Colours.Backgrounds.disabled};
    pointer-events: none;
  }
  
  svg {
    font-size: 14px;
  }

  &:hover {
    cursor: pointer;
    background: ${Colours.Backgrounds.rangeInput};
  }
`;

const MinusButton = styled.div`
  width: 40px;
  height: 100%;
  position: absolute;
  z-index: 4;
  left: 0;
  top: 0;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  border-right: 1px solid ${Colours.Border.light};

  svg {
    font-size: 14px;
  }

  &:hover {
    cursor: pointer;
    background: ${Colours.Backgrounds.rangeInput};
  }

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  input[type=number] {
    -moz-appearance: textfield;
  }
`;

const QuantityChangerComponent = ({ onChangeInputValue, defaultValue, maxValue, resetValue }) => {
  const [value, setValue] = useState(defaultValue);
  const [disablePlusButton, setDisablePlusButton] = useState(defaultValue);

  const handleQuantityMinus = () => {
    value > 0 && setValue(value - 1);
  };

  const handleQuantityPlus = () => {
    setValue(value + 1);
  };

  useEffect(() => {
    onChangeInputValue && onChangeInputValue(value);
  }, [value]);

  useEffect(() => {
    if (resetValue) {
      setValue(1);
    }
  }, [resetValue]);

  useEffect(() => {
    if (maxValue !== null && maxValue <= value) {
      setDisablePlusButton(true);
    } else {
      setDisablePlusButton(false);
    }
  }, [value, maxValue]);
  
  return (
    <QuantityChanger
      defaultValue={defaultValue}
      resetValue={resetValue}
    >
      <input type="number" value={value} disabled />
      <MinusButton onClick={handleQuantityMinus}>
        <FontAwesomeIcon icon={faMinus} />
      </MinusButton>
      <PlusButton onClick={handleQuantityPlus} className={disablePlusButton ? 'disabled' : ''}>
        <FontAwesomeIcon icon={faPlus} />
      </PlusButton>
    </QuantityChanger>
  );
};

QuantityChangerComponent.propTypes = {
  defaultValue: PropTypes.number,
  maxValue: PropTypes.number,
  onChangeInputValue: PropTypes.func,
  resetValue: PropTypes.bool,
};

QuantityChangerComponent.defaultProps = {
  defaultValue: 2,
  maxValue: null,
  onChangeInputValue: () => null,
  resetValue: false,
};

export default QuantityChangerComponent;
