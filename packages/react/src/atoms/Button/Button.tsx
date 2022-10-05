import React from 'react';

interface ButtonProps {
  label: String
}
const Button: React.FunctionComponent<ButtonProps> = ({ label }) => {
  return (<button className='dsf-btn-container'>{label}</button>)
}
export default Button;