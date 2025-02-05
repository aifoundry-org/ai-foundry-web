import { useEffect, useRef } from 'react';

interface Props {
  onEnterView: (id: string) => void;
  selectors: string[];
  options?: IntersectionObserverInit;
}

/**
 * `useOnEnterView` is a custom React hook designed to execute a callback function when an element enters the viewport. It uses the Intersection Observer API to detect when the selected elements enter the viewport.
 * Version: 1.0.0
 * Docs: https://www.notion.so/litebox/useOnEnterView-1-0-0-f77c1a70e0f04dec9ae132f8e26b2b42
 *
 * @param onEnterView - A callback function that is executed when an element enters the viewport. This function receives the ID of the element that enters the viewport as a parameter.
 * @param selectors - An array of CSS selectors used to select the elements to be observed. Each selector should be a string representing a valid CSS selector.
 * @param options - An options object passed to the Intersection Observer constructor (optional).
 *
 */
const useOnEnterView = ({ onEnterView, selectors, options }: Props) => {
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    const callback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          onEnterView(entry.target.id);
        }
      });
    };

    observerRef.current = new IntersectionObserver(callback, options);

    const elements = selectors.flatMap(selector => Array.from(document.querySelectorAll(selector)));
    elements.forEach(element => observerRef.current?.observe(element));

    return () => {
      if (observerRef.current) {
        elements.forEach(element => observerRef.current?.unobserve(element));
      }
    };
  }, [onEnterView, selectors, options]);
};

export default useOnEnterView;
