import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Heading from '../../Atoms/Typography/Typography.component';

const Card = styled.div`
  background: ${props => props.backgroundColor};
  min-height: 10px;
  min-width: 100px;
  width: ${props => props.size};
  padding: 15px;
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 20px 10px;

  &:hover {
    cursor: pointer;
    box-shadow: 0px 2px 14px rgb(0 0 0 / 15%);
  }

  h2 {
    margin-bottom: 5px;
  }

  h3 {
    margin-top: 5px;
    margin-bottom: 0;
  }
`;

const Image = styled.img`
  width: 100%;
`;

const CardComponent = ({ backgroundColor, onClick, title, subTitle, children, size, altText, imgSrc, className }) => (
  <Card
    backgroundColor={backgroundColor}
    onClick={onClick}
    size={size}
    className={className}
  >
    <Image src={imgSrc} alt={altText} />
    {children && children}
    <Heading variant="h2">
      {title}
    </Heading>
    <Heading variant="h3">
      {subTitle}
    </Heading>
  </Card>
);

CardComponent.propTypes = {
  children: PropTypes.any,
  backgroundColor: PropTypes.string,
  imgSrc: PropTypes.string,
  altText: PropTypes.string,
  size: PropTypes.string,
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string,
  onClick: PropTypes.func,
  className: PropTypes.string,
};

CardComponent.defaultProps = {
  backgroundColor: '#fafafa',
  onClick: null,
  subTitle: '$1000',
  children: '',
  size: '28%',
  imgSrc: '',
  altText: 'cat product',
  className: '',
};

export default CardComponent;
