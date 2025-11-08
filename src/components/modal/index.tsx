import { Fragment, ReactNode } from 'react';
import {
  Dialog,
  DialogPanel,
  DialogTitle,
  DialogBackdrop,
  CloseButton,
} from '@headlessui/react';
import Icon from '../icon';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: ReactNode;
}

export default function Modal({
  isOpen,
  onClose,
  title,
  children,
}: ModalProps) {
  return (
    <Dialog open={isOpen} onClose={() => null} className='relative z-50'>
      <DialogBackdrop className='fixed inset-0 bg-black/40' />
      <div className='fixed inset-0 flex w-screen items-center justify-center p-4'>
        <DialogPanel className='w-full max-w-xl relative space-y-4 border rounded-2xl bg-white p-5'>
          <CloseButton onClick={onClose}   className="absolute top-4 right-4 text-gray-500 hover:text-black"
          >
            <Icon name='mdi-close' size={32} />
          </CloseButton>
          <DialogTitle className='text-2xl font-bold'>{title}</DialogTitle>
          {children}
        </DialogPanel>
      </div>
    </Dialog>
  );
}
