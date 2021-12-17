import React from 'react';
import { Field, FieldConfig, useField } from 'formik';
import './TextWithLabelField.scss';
import { Col, Form, Row } from 'react-bootstrap';
import { InputType } from '../../../types/input-type';

interface TextInputFieldInputs {
  label: string;
  name?: string;
  type: InputType
}

const TextInputField: React.FC<TextInputFieldInputs & FieldConfig<string>> = 
  (props: TextInputFieldInputs): React.ReactElement => {
  const { label, name, type } = props;

  return (
    <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
        <Form.Label column sm="2">
            Input:
        </Form.Label>

        <Col sm="10">
            <Form.Control type="password" placeholder="Password" />
        </Col>
    </Form.Group>
  );
};

export default TextInputField;