import Button from '@sea-org/rc-button';
import './button.css';
import { ButtonProps } from './interfaces';
import { useCount } from './hooks';

/**
 * Primary UI component for user interaction
 */
const CustomButton = (props: ButtonProps) => {
  const [count, setCount] = useCount(0);
  return (
    <div>
      自定义button
      <Button {...props} />
      <>{count}</>
    </div>
  );
};

export default CustomButton;
