/**
 * OtherFormField Component Demo for uxcore
 * @author eternalsky
 *
 * Copyright 2014-2015, Uxcore Team, Alinw.
 * All rights reserved.
 */

import classnames from 'classnames';

import OtherFormField from '../src';
import Form from 'uxcore-form/build/Form';
import FormRow from 'uxcore-form-row';

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
}

export default Demo;
