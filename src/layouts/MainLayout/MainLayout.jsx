import './MainLayout.scss';

import React, { PropTypes } from 'react';

import BaseComponent from 'components/BaseComponent/BaseComponent.jsx';
import Header from 'components/Header/Header.jsx';
import Footer from 'components/Footer/Footer.jsx';


class MainLayout extends BaseComponent {
  render() {
    const { children } = this.props;

    return (
      <div className={this.cx()}>
        <Header className={this.cxEl('header')} />
        <div className={this.cxEl('content')}>
          {children}
        </div>
        <Footer className={this.cxEl('footer')} />
      </div>
    );
  }
}


MainLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default MainLayout;
