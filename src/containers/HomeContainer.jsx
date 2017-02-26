import React, { PropTypes } from 'react';
import MainLayout from 'layouts/MainLayout.jsx';


const HomeContainer = ({ children }) => (
  <MainLayout>
    {children}
  </MainLayout>
);


HomeContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

export default HomeContainer;
