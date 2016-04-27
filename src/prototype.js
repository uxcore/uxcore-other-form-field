
const React = require('react');
const {Bundle} = require('engine');
const {BoolSetter, TextSetter, ChoiceSetter, JsonSetter, NumberSetter} = require('engine-utils');

module.exports = Bundle.createPrototype({
    title: "其他",
    category: "表单",
    icon: require("./logo.svg"), // todo: require("./logo.svg"),
    componentName: "OtherFormField",
    canHovering: true,
    canSelecting: true,
    canDraging: true,
    isInline: true,
    isContainer: false,
    canDropto: function(container) {
        let name = container.getComponentName();
        return /Form|FormRow/.test(name);
    },
    canDroping: false,
    configure: [{
            name: "jsxflex",
            title: "弹性比例",
            defaultValue: 1,
            required: false,
            fieldStyle: "block",
            fieldCollapsed: false,
            setter: <NumberSetter />
        }]
});
