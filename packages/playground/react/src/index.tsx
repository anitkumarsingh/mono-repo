import React from 'react';
import ReactDom from 'react-dom';
import { Button } from '@dsf/react';
import '@dsf/design/lib/buttons.css';

ReactDom.render(
  <Button label={'Example Button'} />,
  document.querySelector('#root')
)