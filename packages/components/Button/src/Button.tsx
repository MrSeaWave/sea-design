import { CSSProperties } from 'react';
import './button.css';
import { ButtonProps } from './interfaces';

/**
 * Primary UI component for user interaction
 */
const Button = ({ primary, backgroundColor, size = 'medium', label, ...props }: ButtonProps) => {
  const mode = primary ? 'searc-button--primary' : 'searc-button--secondary';
  let style: CSSProperties = { backgroundColor };
  return (
    <button
      type='button'
      className={['searc-button', `searc-button--${size}`, mode].join(' ')}
      style={style}
      {...props}
    >
      {label}
    </button>
  );
};

export default Button;
