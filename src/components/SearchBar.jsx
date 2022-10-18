import React, { useState } from 'react';
import { Form, Input } from 'semantic-ui-react';

function SearchBar(props) {
  //set state
  const [term, setTerm] = useState('');

  //callback function
  const handleInputChange = (e) => {
    setTerm(e.target.value);
  };
  const handleFormSubmit = (e) => {
    e.preventDefault();
    props.onSubmit(term);
  };

  return (
    <Form onSubmit={handleFormSubmit} className={`${props.styleSearchBar}`}>
      <Form.Field>
        <Input
          size="large"
          icon="search"
          type="text"
          //   onChange={(e) => console.log(e.target.value)}
          onChange={handleInputChange}
          value={term}
        />
      </Form.Field>
    </Form>
  );
}

export default SearchBar;
