import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Heading from '../../Atoms/Typography/Typography.component';
import Colours from '../../../theme/Colours/Colours';

const variants = {
  small: 'small',
  large: 'large',
};

const Banner = styled.div`
  min-height: 10px;
  min-width: 400px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  height: ${props => props.size === variants.large ? '300px' : '200px'};

  img {
    position: absolute;
    height: 100%;
    object-fit: cover;
    z-index: 2;
  }

  &:after {
    position: absolute;
    width: 100%;
    height: 100%;
    content: '';
    background: red;
    background: rgba(0,0,0,0.7);
    z-index: 4;
  }

  h1 {
    position: absolute;
    z-index: 5;
    color:  ${Colours.Typography.light};
    text-transform: capitalize;
    font-family: 'Skranji', cursive;
    font-size: 35px;
    padding: 0 20px;
    text-align: center;
  }
`;

const Image = styled.img`
  width: 100%;
`;

const BannerComponent = ({ title, children, size, altText, imgSrc, className }) => (
  <Banner
    size={size}
    className={className}
  >
    <Image src={imgSrc} alt={altText} />
    <Heading variant="h1">
      {title}
    </Heading>
    {children && children}
  </Banner>
);

BannerComponent.propTypes = {
  children: PropTypes.any,
  imgSrc: PropTypes.string,
  altText: PropTypes.string,
  size: PropTypes.oneOf(['small', 'large']),
  title: PropTypes.string.isRequired,
  className: PropTypes.string,
};

BannerComponent.defaultProps = {
  children: '',
  size: variants.large,
  imgSrc: '',
  altText: 'cat product',
  className: '',
};

export default BannerComponent;
