'use client';

import { useRef, useState } from 'react';
import { useClickOutside } from '../../hooks/useClickOutside';
import useScrollLock from '../../hooks/useScrollLock';
import { cn } from '../../utils/cn';

export interface ModalProps {
  isOpen: boolean;
  children?: React.ReactNode;
  className?: string;
  onClose: () => void;
}

/**
 * The `Modal` component displays content on top of an overlay. It is commonly used to present a dialog, alert, or confirmation message to the user.
 * Version: 1.0.0
 * Docs: https://www.notion.so/litebox/Modal-1-0-0-19d45c5f211941b38bd4d159a412dca8
 *
 * @param isOpen - A boolean value that determines whether the modal is open or closed.
 * @param children - The content to be displayed inside the modal.
 * @param className - Additional CSS classes that can be passed to customize the styling of the component.
 * @param onClose - A callback function that is called when the modal is closed.
 *
 */
const Modal = ({ isOpen, children, className, onClose }: ModalProps) => {
  const [isExiting, setIsExiting] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const animateExit = (callback: () => void) => {
    setIsExiting(true);

    const timeout = setTimeout(() => {
      callback();
      setIsExiting(false);
      clearTimeout(timeout);
      // This value should be the same as the duration of the fade-out animation declared in the tailwind.config.ts file
    }, 300);
  };

  const handleCloseModal = () => {
    animateExit(onClose);
  };

  useClickOutside({ ref, callback: handleCloseModal });
  useScrollLock({
    autoLock: isOpen,
  });

  if (!isOpen) {
    return null;
  }

  return (
    <div
      ref={ref}
      className={cn(
        'fixed top-0 left-0 right-0 bottom-0 z-50 bg-[#00000080] flex items-center justify-center',
        isExiting ? 'animate-fade-out' : 'animate-fade-in',
        className
      )}>
      {children}
    </div>
  );
};

Modal.displayName = 'Modal';

export default Modal;
