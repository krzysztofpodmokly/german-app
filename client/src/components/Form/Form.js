import React from 'react';

import Input from '../UI/Input/Input';

const Form = () => {
  let form = (
    <form>
      <Input
        inputtype='input'
        type='text'
        name='word'
        placeholder='Type German Word'
      />
      <Input
        inputtype='input'
        type='text'
        name='article'
        placeholder='Add Proper Article'
      />
      <Input
        inputtype='input'
        type='text'
        name='translated'
        placeholder='Add Polish Translation'
      />
      <Input inputtype='textarea' name='sentence-one' />
      <Input inputtype='textarea' name='sentence-two' />
    </form>
  );

  return <div>{form}</div>;
};

export default Form;
