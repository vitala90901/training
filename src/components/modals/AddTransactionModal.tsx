import { Dialog } from '@radix-ui/react-dialog';
import { TransactionForm } from '../transactions/TransactionForm';

interface AddTransictionModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AddTransictionModal = ({ isOpen, onClose }: AddTransictionModalProps) => {
    return (
    <Dialog.Root open={isOpen}>
      <Dialog.Overlay className="fixed inset-0 bg-black/50" />
      <Dialog.Content className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-6 rounded-lg">
        <Dialog.Close onClick={onClose} className="absolute top-4 right-4">
          ×
        </Dialog.Close>
        <TransactionForm onSuccess={onClose} />
      </Dialog.Content>
    </Dialog.Root>
  );
};