/**
 * OtherFormField Component for uxcore
 * @author eternalsky
 *
 * Copyright 2014-2015, Uxcore Team, Alinw.
 * All rights reserved.
 */

import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import assign from 'object-assign';

class OtherFormField extends React.Component {
  render() {
    const me = this;
    const style = {
      width: (`${(me.props.jsxflex / me.props.totalFlex) * 100}%`),
    };
    return (
      <div
        className={classnames({
          [me.props.jsxprefixCls]: true,
          [me.props.className]: !!me.props.className,
        })}
        style={assign({}, style, {
          display: me.props.jsxshow ? 'table' : 'none',
        })}
      >
        {me.props.children}
      </div>
    );
  }
}


OtherFormField.defaultProps = {
  jsxprefixCls: 'kuma-uxform-field kuma-other-uxform-field',
  jsxflex: 1,
  jsxshow: true,
};

OtherFormField.propTypes = {
  jsxprefixCls: PropTypes.string,
  jsxflex: PropTypes.number,
  jsxshow: PropTypes.bool,
};

OtherFormField.displayName = 'OtherFormField';

export default OtherFormField;

