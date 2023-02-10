import React from 'react'

interface ButtonProps {
  label?: string
  text?: string
  onPress: () => void
}

const Button: React.FC<ButtonProps> = ({ onPress, label }) => {
  return (
    <button type="button" onClick={() => onPress()}>
      {label === null ? 'Submit' : label}
    </button>
  )
}

export default Button
