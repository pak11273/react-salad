import React from 'react';
export interface ButtonProps {
  label?: string;
  text?: string;
  onPress: () => void;
}

const Button: React.FC<ButtonProps> = ({ onPress, label }) => {
  return (
    <button onClick={() => onPress()}>
      {label === null || label === undefined ? 'Submit' : label}
    </button>
  );
};

export default Button;
