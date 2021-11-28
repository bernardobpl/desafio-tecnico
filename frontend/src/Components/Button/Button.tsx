import { ButtonHTMLAttributes, forwardRef } from "react";
import { RefProps } from "../../RefProps";
import './styles.css';

const Button = forwardRef((props: ButtonHTMLAttributes<HTMLButtonElement>, ref?: RefProps<HTMLButtonElement>) => <button ref={ref} {...props} className={`button-component ${props.className}`}></button>)

export { Button };