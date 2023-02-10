import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Button from './Button';

describe('Button', () => {
  test('should render a button', () => {
    render(<Button onPress={() => {}} label="My Button" />);
  });
});
