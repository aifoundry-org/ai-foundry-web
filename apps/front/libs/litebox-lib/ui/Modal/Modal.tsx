'use client';

import { motion, AnimatePresence } from "motion/react"
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
  useScrollLock({
    autoLock: isOpen,
  });

  return (
    <AnimatePresence>
      {isOpen && 
        <motion.div
          onClick={onClose}
          className={cn(
            'fixed top-0 left-0 right-0 bottom-0 z-50 bg-[#00000080] flex items-center justify-center',
            className
          )}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            onClick={(e) => e.stopPropagation()}
            initial={{
              scale: 0.9,
              opacity: 0
            }}
            animate={{
              scale: 1,
              opacity: 1
            }}
            exit={{
              scale: 0.9,
              opacity: 0
            }}
            transition={{type: 'spring', stiffness: 400, damping: 25}}
          >
            {children}
          </motion.div>
        </motion.div>
      }
    </AnimatePresence>
  );
};

Modal.displayName = 'Modal';

export default Modal;
