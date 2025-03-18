import React from 'react';
import Input from './Input';

export interface SearchInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  value?: string;
  variant?: Variant;
  className?: string;
  inputClassName?: string;
}

type Variant = 'plain' | 'outlined';

const SearchIcon = ({ className }: { className: string }) => {
  return (
    <svg
      className={`lucide lucide-search ${className}`}
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'>
      <circle cx='11' cy='11' r='8' />
      <path d='m21 21-4.3-4.3' />
    </svg>
  );
};

const SearchInput = React.forwardRef<HTMLInputElement, SearchInputProps>(
  ({ value = '', variant = 'plain', className, inputClassName, ...props }, ref) => {
    return (
      <div className={`relative flex items-center ${className}`}>
        <Input defaultValue={value} ref={ref} variant={variant} placeholder='Search' className={`px-[40px] !text-[#7B7B7B] ${inputClassName}`} {...props} />
        <SearchIcon className='absolute left-5 h-7 w-7 text-neutral-650' />
      </div>
    );
  }
);

SearchInput.displayName = 'SearchInput';

export default SearchInput;
