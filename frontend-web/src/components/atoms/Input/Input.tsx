import React, { ChangeEvent } from 'react';
import * as S from './Input.styles';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement>{
  option?: 'default' | 'grey';
  inputSize?: 'medium' | 'small';
  $borderRadius?: number;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
}

const Input = (
  { option, inputSize, $borderRadius, onChange, placeholder }: InputProps,
  ref?: React.LegacyRef<HTMLInputElement>
) => {
  return (
    <S.Input
      ref={ref}
      option={option}
      inputSize={inputSize}
      $borderRadius={$borderRadius}
      onChange={onChange}
      placeholder={placeholder}
    ></S.Input>
  );
};

export default React.forwardRef(Input);