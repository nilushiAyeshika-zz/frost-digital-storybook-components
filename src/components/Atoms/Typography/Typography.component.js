import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Colours from '../../../theme/Colours/Colours';

const variantsMapping = {
  h1: "h1",
  h2: "h2",
  h3: "h3",
  h4: "h4",
  h5: "h5",
  h6: "h6",
};

const handleHeadings = (props) => {
  let size = '30px';

  switch (props.variant) {
    case variantsMapping.h1:
      size = '30px';
      break;
    case variantsMapping.h2:
      size = '20px';
      break;
    case variantsMapping.h3:
      size = '18px';
      break;
    case variantsMapping.h6:
      size = '10px';
      break;
    default:
      break;
  }

  return size;
};

const Heading = styled.h1`
  color: ${Colours.Typography.title};
  font-size: ${props => handleHeadings(props)};
  font-family: 'Roboto', sans-serif;
  margin: 10px 0px;
`;

const TypographyComponent = ({ variant, children }) => (
  <Heading
    as={variant}
    variant={variant}
  >
    {children && children}
  </Heading>
);

TypographyComponent.propTypes = {
  children: PropTypes.any,
  variant: PropTypes.string,
};

TypographyComponent.defaultProps = {
  variant: variantsMapping.h1,
  children: ''
};

export default TypographyComponent;
