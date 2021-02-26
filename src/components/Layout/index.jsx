import React from 'react';
import styled from 'styled-components';

import { Footer } from '../Footer';
import { Header } from '../Header';

const Content = styled.div`
  background-color: #f8f8f8;
`;

export const Layout = ({ children }) => {
  return (
    <Content className="principal-content">
      <Header />
      {children}
      <Footer />
    </Content>
  );
};
