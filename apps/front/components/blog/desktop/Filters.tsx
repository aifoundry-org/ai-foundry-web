import { FiltersOption, CheckOption } from '../universal/FiltersType';

export interface FiltersProps {
  options: FiltersOption[];
  onClick: (option: CheckOption) => void;
  className?: string;
}
const Filters = ({ options, onClick, className, ...props }: FiltersProps) => {
  return (
    <div {...props} className={`flex items-center gap-3 flex-grow flex-wrap ${className}`}>
      {options.map(option => (
        <div onClick={() => onClick({id: option.id, isChecked: !option.isChecked})} key={option.id} className={`${option.isChecked ? 'bg-peach' : 'bg-orange'} rounded-md px-[1vw] py-[1vw] xl:px-[1vw] xl:py-[0.7vw] 2xl:px-[1vw] 2xl:py-[0.7vw]`}>
            <p className='font-dharma-gothic-e font-bold text-[1.8vw] xl:text-[1.4vw] 2xl:text-[1.4vw] leading-[1.4vw] uppercase'>
                {option.name}
            </p>
        </div>
      ))}
    </div>
  );
};

Filters.displayName = 'Filters';

export default Filters;
