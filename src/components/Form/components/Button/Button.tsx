import React, { FC } from 'react';
import style from './Button.module.scss';

interface ButtonProps {
  disabled: boolean;
  onButtonClick?: () => void;
  children?: React.ReactNode;
}

export const Button: FC<ButtonProps> = ({ disabled, onButtonClick }) => (
  <button
    type="submit"
    disabled={disabled}
    onClick={onButtonClick}
    className={style.button}
  >
    click
  </button>
);