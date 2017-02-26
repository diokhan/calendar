import './Header.scss';

import React from 'react';
import BaseComponent from 'components/BaseComponent/BaseComponent.jsx';


class Header extends BaseComponent {
  render() {
    return <div className={this.cx()}>Header</div>;
  }
}


export default Header;
