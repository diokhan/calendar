import './NoMatch.scss';

import React from 'react';
import BaseComponent from 'components/BaseComponent/BaseComponent.jsx';


class NoMatch extends BaseComponent {
  render() {
    return <div className={this.cx()}>NoMatch</div>;
  }
}


export default NoMatch;
