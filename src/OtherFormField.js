/**
 * OtherFormField Component for uxcore
 * @author eternalsky
 *
 * Copyright 2014-2015, Uxcore Team, Alinw.
 * All rights reserved.
 */

let React = require('react');
let ReactDOM = require('react-dom');
let classnames = require('classnames');
let assign = require('object-assign');

class OtherFormField extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let me = this;
        return (
            <div className={classnames({
                [me.props.jsxprefixCls]: true,
                [me.props.className]: !!me.props.className
            })} style={assign({}, me.props.style, {
                display: me.props.jsxshow ? "table" : "none"
            })}>
                {me.props.children}
            </div>
        );
    }
    
} 


OtherFormField.defaultProps = {
    jsxprefixCls: "kuma-uxform-field kuma-other-uxform-field", // 默认类名
    jsxflex: 1, // 占 Form 的比例，类似于 css3 中的 flex-box
    jsxshow: true
};

OtherFormField.propTypes = {
    /**
     * @title 类名前缀
     * @veIgnore
     */
    jsxprefixCls: React.PropTypes.string,
    /**
     * @title 弹性比例
     */
    jsxflex: React.PropTypes.number,
    /**
     * @title 是否显示
     * @veIgnore
     */
    jsxshow: React.PropTypes.bool
};

OtherFormField.displayName = "OtherFormField";

module.exports = OtherFormField;

 