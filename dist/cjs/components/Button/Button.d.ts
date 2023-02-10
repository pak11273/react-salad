import React from 'react';
interface ButtonProps {
    label?: string;
    text?: string;
    onPress: () => void;
}
declare const Button: React.FC<ButtonProps>;
export default Button;
