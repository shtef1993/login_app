import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Button, Form } from 'react-bootstrap';

function UserForm({ onSubmit }) {
  const [inputValue, setInputValue] = useState('');

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(inputValue);
  };

  return (
    <Form onSubmit={handleSubmit} className="card">
      <Form.Group controlId="formUsername" className="form-group">
        <Form.Label>GitHub Username:</Form.Label>
        <Form.Control type="text" value={inputValue} onChange={handleChange} />
      </Form.Group>
      <Button type="submit" variant="primary">
        Submit
      </Button>
    </Form>
  );
}

UserForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default UserForm;

