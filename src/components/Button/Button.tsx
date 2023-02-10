import React, { FC, PropsWithChildren } from 'react';

interface ButtonProps {
  onClick(): void;
}

const Button: FC<ButtonProps & PropsWithChildren<{}>> = ({
  onClick,
  children
}) => <button onClick={onClick}>{children}</button>;

export default Button;
