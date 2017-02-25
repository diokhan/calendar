import { Component, PropTypes } from 'react';
import cx from 'classnames';
import { Set } from 'immutable';


class BaseComponent extends Component {
  static propTypes = {
    className: PropTypes.string,
  }

  blockName() {
    return this.constructor.name || null;
  }

  // Returns a duplicate-free version of the string with class names
  uniqCx(classNames) {
    return Set(classNames.split(' ')).toArray().join(' ');
  }

  // b-Block
  cx(...rest) {
    return this.uniqCx(cx(this.blockName(), this.props.className, ...rest));
  }

  // b-Block__Element
  cxEl(elName, ...rest) {
    return cx(`${this.blockName()}__${elName}`, ...rest);
  }

  // b-Block--Modifier
  cxMod(modName, ...rest) {
    return cx(this.cx(), `${this.blockName()}--${modName}`, ...rest);
  }

  // b-Block__Element--Modifier
  cxElMod(elName, modName, ...rest) {
    return cx(this.cxEl(elName), `${this.blockName()}__${elName}--${modName}`, ...rest);
  }
}

export default BaseComponent;
