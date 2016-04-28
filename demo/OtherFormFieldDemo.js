/**
 * OtherFormField Component Demo for uxcore
 * @author eternalsky
 *
 * Copyright 2014-2015, Uxcore Team, Alinw.
 * All rights reserved.
 */

let classnames = require('classnames');

let OtherFormField = require('../src');
let Form = require('uxcore-form/build/Form');
let FormRow = require('uxcore-form-row')

class Demo extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() {
        return (
            <div>
                <Form>
                    <FormRow>
                        <OtherFormField>
                            <div>1</div>
                        </OtherFormField>
                        <OtherFormField>
                            <div>1</div>
                        </OtherFormField>
                    </FormRow>
                </Form>
            </div>
        );
    }
};

module.exports = Demo;
