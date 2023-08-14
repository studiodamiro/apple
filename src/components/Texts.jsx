import { Button } from './ui/button';
import { MdChevronRight, MdOutlineNorthEast } from 'react-icons/md';

export function Title({ text }) {
  return <h2 className='text-3xl md:text-[2.8rem] lg:text-[3.2rem] font-semibold'>{text}</h2>;
}

export function PreText({ text }) {
  return <h3 className='text-sm md:text-base text-accent'>{text}</h3>;
}

export function SubText({ children }) {
  return <h3 className='text-lg md:text-[1.4rem] lg:text-[1.6rem]'>{children}</h3>;
}

export function MoreText({ children }) {
  return <h4 className='text-base text-gray-400'>{children}</h4>;
}

export function LinkText({ text, icon = '' }) {
  return (
    <Button variant={'link'} className='text-md md:text-lg font-light text-accent'>
      {text}
      {icon === '' ? (
        <div className='ml-0.5 -mr-1'>
          <MdOutlineNorthEast size={14} />
        </div>
      ) : (
        <div className='-mr-2'>
          <MdChevronRight size={18} />
        </div>
      )}
    </Button>
  );
}