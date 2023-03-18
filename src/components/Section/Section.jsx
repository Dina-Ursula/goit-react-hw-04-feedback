import React from 'react';
import { Title, SectionChild, Container } from './Section.styled';

const Sections = ({ title, child }) => {
  return (
    <Container>
      <Title>{title}</Title>
      <SectionChild>{child}</SectionChild>
    </Container>
  );
};
export default Sections;
