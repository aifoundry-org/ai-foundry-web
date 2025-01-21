import { useEffect } from 'react';

interface UseClickOutsideProps {
  ref: React.RefObject<HTMLElement | null>;
  callback: (e?: MouseEvent) => void;
}

/**
 * `useClickOutside` is a hook that detects and handles clicks outside of a specified element. This is particularly useful for closing modals, dropdowns, or resetting component states when the user interacts with the area outside of an interactive component.
 * Version: 1.0.0
 * Docs: https://www.notion.so/litebox/useClickOutside-1-0-0-27e20c85fed54747825ff39de2d3fa0a?pvs=25
 *
 * @param ref A React ref created by `useRef` that is attached to the element you want to detect outside clicks for.
 * @param callback A function that will be called when a click outside of the referenced element is detected.
 */
export const useClickOutside = ({ ref, callback }: UseClickOutsideProps) => {
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        callback(event);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [ref, callback]);
};
