import { ButtonHTMLAttributes, ReactNode } from 'react';

import classes from './Button.module.css';

type Props = {
  children?: ReactNode;
  type: ButtonHTMLAttributes<HTMLButtonElement>['type'];
  onClick: () => void;
};

function Button({ children, type, onClick }: Props) {
  return (
    <button className={classes.btn} type={type} onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;
