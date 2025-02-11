import { FiltersOption, CheckOption } from '../universal/FiltersType';

export interface FiltersProps {
  options: FiltersOption[];
  onClick: (option: CheckOption) => void;
  className?: string;
}
const Filters = ({ options, onClick, className, ...props }: FiltersProps) => {
  return (
    <div {...props} className='flex items-center gap-3 flex-grow flex-wrap'>
      {options.map(option => (
        <div onClick={() => onClick({id: option.id, isChecked: !option.isChecked})} key={option.id} className='bg-orange rounded-md px-[2.15vw] py-[3.2vw] md:px-[1.2vw] md:py-[1.2vw]'>
            <p className='font-dharma-gothic-e font-bold text-[5vw] md:text-[2.8vw] leading-[1.4vw] uppercase'>
                {option.name}
            </p>
        </div>
      ))}
    </div>
  );
};

Filters.displayName = 'Filters';

export default Filters;
