import React from 'react';
import { cn } from '../../utils/cn';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  variant?: Variant;
  className?: string;
}

type Variant = 'plain' | 'outlined' | 'error';

const inputVariants = {
  essentialStyles: `text-gray-600 placeholder-gray-300 focus:border-purple-600 transition duration-100 outline-none px-3 py-4 w-full disabled:opacity-50 disabled:cursor-not-allowed`,
  variant: {
    plain: 'border-0 border-b bg-gray-50 rounded-t-md',
    outlined: 'border rounded-md',
    error: 'bg-gray-50 border border-red-500 rounded-md focus:border-red-500',
  },
};

/**
 * The `Input` componen renders an input with two style customizations: Outlined and Default. It supports native HTML input props such as type, placeholder and events handling. It also integrates customization using Tailwind CSS by the className property.t
 * Version: 1.0.0
 * Docs: https://www.notion.so/litebox/Input-1-0-0-0b3b35abbff74d3ca9cef6ab02ace93f
 *
 * @param variant - The visual style variant of the input.
 * @param className - Additional CSS classes that can be passed to customize the styling of the component.
 */
const Input = React.forwardRef<HTMLInputElement, InputProps>(({ variant = 'plain', className = '', ...props }, ref) => {
  const inputStyles = cn(inputVariants.essentialStyles, inputVariants.variant[variant], className);
  return <input ref={ref} className={inputStyles} {...props} />;
});

Input.displayName = 'Input';

export default Input;
